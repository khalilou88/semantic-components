// File: otp-input.spec.ts
import { Page, expect, test } from '@playwright/test';

test.describe('OTP Input Component', () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    // Navigate to the page with the OTP component
    // Replace with your actual test URL
    await page.goto('http://localhost:4200/');
  });

  test('should render all 6 input fields', async () => {
    const inputFields = await page.locator('.otp-input');
    await expect(inputFields).toHaveCount(6);
  });

  test('should allow entering digits one by one', async () => {
    const inputs = await page.locator('.otp-input').all();

    // Type each digit
    await inputs[0].type('1');
    await inputs[1].type('2');
    await inputs[2].type('3');
    await inputs[3].type('4');
    await inputs[4].type('5');
    await inputs[5].type('6');

    // Check if the current OTP text is shown
    await expect(page.locator('text=Current OTP: 123456')).toBeVisible();

    // Check if completion message is shown
    await expect(page.locator('.success-message')).toBeVisible();
    await expect(page.locator('.success-message')).toHaveText('OTP verification complete!');
  });

  test('should automatically focus next input after entering a digit', async () => {
    const inputs = await page.locator('.otp-input').all();

    // Type in the first input
    await inputs[0].type('1');

    // Check if second input is focused
    await expect(inputs[1]).toBeFocused();

    // Continue typing
    await page.keyboard.type('2');
    await expect(inputs[2]).toBeFocused();
  });

  test('should handle backspace correctly', async () => {
    const inputs = await page.locator('.otp-input').all();

    // Enter digits
    await inputs[0].type('1');
    await inputs[1].type('2');
    await inputs[2].type('3');

    // Press backspace to remove last digit and move focus back
    await inputs[2].press('Backspace');
    await expect(inputs[1]).toBeFocused();

    // Press backspace again
    await page.keyboard.press('Backspace');
    await expect(inputs[0]).toBeFocused();

    // Current OTP should be just '1'
    await expect(page.locator('text=Current OTP: 1')).toBeVisible();
  });

  test('should handle clicking on any input field', async () => {
    const inputs = await page.locator('.otp-input').all();

    // Enter first digit
    await inputs[0].type('1');

    // Click on the fourth input
    await inputs[3].click();

    // Should focus on the second input (first empty one)
    await expect(inputs[1]).toBeFocused();

    // Fill all inputs
    await inputs[1].type('2');
    await inputs[2].type('3');
    await inputs[3].type('4');
    await inputs[4].type('5');
    await inputs[5].type('6');

    // Click on the first input again
    await inputs[0].click();

    // Since all inputs are filled, focus should stay on the last one
    await expect(inputs[5]).toBeFocused();
  });

  test('should only allow numeric input', async () => {
    const inputs = await page.locator('.otp-input').all();

    // Try typing non-numeric characters
    await inputs[0].type('a');

    // Input should be empty
    await expect(inputs[0]).toHaveValue('');

    // Try typing a number
    await inputs[0].type('1');
    await expect(inputs[0]).toHaveValue('1');
  });

  test('should handle pasting OTP code', async () => {
    const inputs = await page.locator('.otp-input').all();

    // Simulate pasting the entire OTP
    // This requires some workarounds since Playwright doesn't directly support clipboard simulation
    // We'll use page.evaluate to trigger a paste event with data

    await page.evaluate(() => {
      // Create a new ClipboardEvent
      const pasteEvent = new ClipboardEvent('paste', {
        bubbles: true,
        cancelable: true,
        clipboardData: new DataTransfer(),
      });

      // Set the clipboard data
      pasteEvent.clipboardData?.setData('text/plain', '123456');

      // Dispatch the event on the first input
      document.querySelector('.otp-input')?.dispatchEvent(pasteEvent);

      // Also trigger the custom event we created for OTP paste
      const customEvent = new CustomEvent('otpPaste', {
        bubbles: true,
        detail: { value: '123456' },
      });
      document.querySelector('.otp-input')?.dispatchEvent(customEvent);
    });

    // Wait for the OTP to be processed
    await page.waitForTimeout(100);

    // Check that all inputs have the correct values
    await expect(inputs[0]).toHaveValue('1');
    await expect(inputs[1]).toHaveValue('2');
    await expect(inputs[2]).toHaveValue('3');
    await expect(inputs[3]).toHaveValue('4');
    await expect(inputs[4]).toHaveValue('5');
    await expect(inputs[5]).toHaveValue('6');

    // Check if completion message is shown
    await expect(page.locator('.success-message')).toBeVisible();
  });

  test('should reset OTP inputs', async () => {
    const inputs = await page.locator('.otp-input').all();

    // Enter full OTP
    await inputs[0].type('1');
    await inputs[1].type('2');
    await inputs[2].type('3');
    await inputs[3].type('4');
    await inputs[4].type('5');
    await inputs[5].type('6');

    // Verify OTP is complete
    await expect(page.locator('.success-message')).toBeVisible();

    // Click reset button
    await page.locator('.btn-reset').click();

    // Check that all inputs are empty
    for (const input of inputs) {
      await expect(input).toHaveValue('');
    }

    // Check that completion message is gone
    await expect(page.locator('.success-message')).not.toBeVisible();

    // Check that first input is focused
    await expect(inputs[0]).toBeFocused();
  });

  test('should verify OTP when verify button is clicked', async () => {
    const inputs = await page.locator('.otp-input').all();

    // Enter OTP
    await inputs[0].type('1');
    await inputs[1].type('2');
    await inputs[2].type('3');
    await inputs[3].type('4');
    await inputs[4].type('5');
    await inputs[5].type('6');

    // Set up dialog handler for the alert
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Verifying OTP: 123456');
      await dialog.accept();
    });

    // Click verify button
    await page.locator('.btn-verify').click();
  });

  test('should disable verify button when OTP is incomplete', async () => {
    // Verify button should be disabled initially
    await expect(page.locator('.btn-verify')).toBeDisabled();

    const inputs = await page.locator('.otp-input').all();

    // Enter partial OTP
    await inputs[0].type('1');
    await inputs[1].type('2');

    // Verify button should still be disabled
    await expect(page.locator('.btn-verify')).toBeDisabled();

    // Complete the OTP
    await inputs[2].type('3');
    await inputs[3].type('4');
    await inputs[4].type('5');
    await inputs[5].type('6');

    // Verify button should be enabled
    await expect(page.locator('.btn-verify')).toBeEnabled();
  });

  test('should work with keyboard navigation', async () => {
    const inputs = await page.locator('.otp-input').all();

    // Focus first input
    await inputs[0].focus();

    // Type using keyboard
    await page.keyboard.type('1');
    await page.keyboard.type('2');

    // Use arrow keys to navigate
    await page.keyboard.press('ArrowLeft');

    // Should focus on previous input
    await expect(inputs[1]).toBeFocused();

    // Type a new value
    await page.keyboard.type('3');

    // Check the new value
    await expect(inputs[1]).toHaveValue('3');

    // Navigate right
    await page.keyboard.press('ArrowRight');
    await expect(inputs[2]).toBeFocused();
  });
});
