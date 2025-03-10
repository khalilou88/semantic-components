// File: otp-verification-flow.spec.ts
import { expect, test } from '@playwright/test';

test.describe('OTP Verification Flow', () => {
  test('complete user flow for OTP verification', async ({ page }) => {
    // Navigate to the page with the OTP component
    await page.goto('http://localhost:4200/');

    // Verify the initial state
    await expect(page.locator('h2')).toHaveText('OTP Verification');
    await expect(page.locator('p').first()).toHaveText('Enter the 6-digit code sent to your phone');

    // Verify button should be disabled initially
    await expect(page.locator('.btn-verify')).toBeDisabled();

    // Test scenario 1: User enters digits one by one
    console.log('Scenario 1: Entering digits one by one');
    const inputs = await page.locator('.otp-input').all();

    // Enter first three digits
    await inputs[0].type('7');
    await inputs[1].type('8');
    await inputs[2].type('9');

    // Check partial OTP is displayed
    await expect(page.locator('text=Current OTP: 789')).toBeVisible();

    // User realizes a mistake and resets
    await page.locator('.btn-reset').click();

    // Verify all fields are cleared
    for (const input of inputs) {
      await expect(input).toHaveValue('');
    }

    // Test scenario 2: User pastes the OTP
    console.log('Scenario 2: Pasting OTP');

    // Simulate pasting
    await page.evaluate(() => {
      const customEvent = new CustomEvent('otpPaste', {
        bubbles: true,
        detail: { value: '123456' },
      });
      document.querySelector('.otp-input')?.dispatchEvent(customEvent);
    });

    // Wait for the OTP to be processed
    await page.waitForTimeout(100);

    // Verify all digits are in place
    await expect(inputs[0]).toHaveValue('1');
    await expect(inputs[1]).toHaveValue('2');
    await expect(inputs[2]).toHaveValue('3');
    await expect(inputs[3]).toHaveValue('4');
    await expect(inputs[4]).toHaveValue('5');
    await expect(inputs[5]).toHaveValue('6');

    // Verify that completion message shows
    await expect(page.locator('.success-message')).toBeVisible();
    await expect(page.locator('.success-message')).toHaveText('OTP verification complete!');

    // Verify button should be enabled
    await expect(page.locator('.btn-verify')).toBeEnabled();

    // Test scenario 3: User submits the OTP
    console.log('Scenario 3: Submitting OTP');

    // Set up dialog handler for the alert
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Verifying OTP: 123456');
      await dialog.accept();
    });

    // Click verify button
    await page.locator('.btn-verify').click();

    // Test scenario 4: Correcting digits
    console.log('Scenario 4: Correcting digits');

    // Reset the form for a new try
    await page.locator('.btn-reset').click();

    // Enter a few digits
    await inputs[0].type('9');
    await inputs[1].type('8');

    // Decide to change the first digit
    await inputs[0].click();

    // First click should move focus to the next empty field (index 2)
    // Let's click explicitly on the first input again
    await inputs[0].dblclick();
    await inputs[0].press('Backspace');
    await inputs[0].type('5');

    // Continue entering the rest
    await inputs[1].click();
    await inputs[1].press('Backspace');
    await inputs[1].type('4');
    await inputs[2].type('3');
    await inputs[3].type('2');
    await inputs[4].type('1');
    await inputs[5].type('0');

    // Verify final OTP
    await expect(page.locator('text=Current OTP: 543210')).toBeVisible();
  });

  test('should handle edge cases properly', async ({ page }) => {
    await page.goto('http://localhost:4200/');
    const inputs = await page.locator('.otp-input').all();

    // Edge case 1: Pasting non-numeric content
    console.log('Edge case 1: Pasting non-numeric content');
    await page.evaluate(() => {
      const customEvent = new CustomEvent('otpPaste', {
        bubbles: true,
        detail: { value: 'abc123' },
      });
      document.querySelector('.otp-input')?.dispatchEvent(customEvent);
    });

    // Wait for processing
    await page.waitForTimeout(100);

    // No digits should be entered
    await expect(inputs[0]).toHaveValue('');

    // Edge case 2: Pasting more digits than inputs
    console.log('Edge case 2: Pasting more digits than inputs');
    await page.evaluate(() => {
      const customEvent = new CustomEvent('otpPaste', {
        bubbles: true,
        detail: { value: '12345678901' },
      });
      document.querySelector('.otp-input')?.dispatchEvent(customEvent);
    });

    // Wait for processing
    await page.waitForTimeout(100);

    // Should only take first 6 digits
    await expect(inputs[0]).toHaveValue('1');
    await expect(inputs[5]).toHaveValue('6');

    // Edge case 3: Rapid keyboard entry
    console.log('Edge case 3: Rapid keyboard entry');

    // Reset
    await page.locator('.btn-reset').click();

    // Focus first input
    await inputs[0].focus();

    // Type rapidly
    await page.keyboard.type('123456', { delay: 10 });

    // All inputs should be filled
    await expect(inputs[0]).toHaveValue('1');
    await expect(inputs[5]).toHaveValue('6');

    // Edge case 4: Keyboard navigation with arrow keys
    console.log('Edge case 4: Keyboard navigation with arrow keys');

    // Reset
    await page.locator('.btn-reset').click();

    // Focus first input
    await inputs[0].focus();

    // Enter first digit
    await page.keyboard.type('1');

    // Move back with left arrow
    await page.keyboard.press('ArrowLeft');

    // Focus should be on first input
    await expect(inputs[0]).toBeFocused();

    // Enter next three digits
    await page.keyboard.type('234');

    // Move back and forth
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowLeft');

    // Focus should be on second input
    await expect(inputs[1]).toBeFocused();

    // Test right arrow
    await page.keyboard.press('ArrowRight');

    // Focus should be on third input
    await expect(inputs[2]).toBeFocused();
  });
});
