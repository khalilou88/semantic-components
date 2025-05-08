import { Injectable, Signal, inject, signal } from '@angular/core';

import { SC_RE_CAPTCHA_LANGUAGE_CODE, SC_RE_CAPTCHA_V3_SITE_KEY } from './re-captcha-config';

// Extend the Window interface to include custom reCAPTCHA properties
declare global {
  interface Window {
    onRecaptchaError?: () => void;
    onRecaptchaSuccess?: (token: string) => void;
    onRecaptchaExpired?: () => void;
    onRecaptchaLoaded?: () => void;
    grecaptcha?: any;
  }
}

/**
 * Script status: null (initial), true (loaded), false (error)
 */
export type ScriptStatus = boolean | null;

@Injectable({
  providedIn: 'root',
})
export class ScReCaptchaService {
  private readonly v3SiteKey = inject<string>(SC_RE_CAPTCHA_V3_SITE_KEY, { optional: true });
  private readonly languageCode = inject<string>(SC_RE_CAPTCHA_LANGUAGE_CODE, { optional: true });

  private readonly scriptId = 'recaptcha-script';
  private readonly apiUrl = 'https://www.google.com/recaptcha/api.js';

  private readonly scriptStatus = signal<ScriptStatus>(null);
  private loadPromise: Promise<boolean> | null = null;

  /**
   * Check if the script already exists in the document
   */
  private checkScriptExists(): void {
    const existingScript = document.getElementById(this.scriptId);
    if (existingScript) {
      // Check if grecaptcha is actually available in window object
      if (window['grecaptcha'] && typeof window['grecaptcha'].render === 'function') {
        this.scriptStatus.set(true);
      }
    }
  }

  /**
   * Load the reCAPTCHA script dynamically
   * @param onload Optional callback function name for script load
   * @returns Promise that resolves to true when script is loaded
   */
  loadScript(onload?: string): Promise<boolean> {
    // First check if script exists and is loaded
    this.checkScriptExists();

    // If script is already loaded, return success immediately
    if (this.scriptStatus() === true) {
      return Promise.resolve(true);
    }

    // If script is currently loading, return the existing promise
    if (this.loadPromise) {
      return this.loadPromise;
    }

    // Create a new loading promise
    this.loadPromise = new Promise<boolean>((resolve, reject) => {
      // Create a unique callback function name if not provided
      const callbackName = onload ?? `onRecaptchaLoaded_${Date.now()}`;

      // Define the callback function in window scope
      (window as any)[callbackName] = () => {
        // Start checking for grecaptcha object
        this.checkGrecaptchaAvailability(3, resolve, reject);
      };

      // Build URL with parameters if provided
      let url = this.apiUrl;
      const params: string[] = [];

      if (this.v3SiteKey) {
        params.push(`render=${this.v3SiteKey}`);
      } else {
        params.push(`render=explicit`);
      }

      if (this.languageCode) {
        params.push(`hl=${this.languageCode}`);
      }

      // Always include onload parameter
      params.push(`onload=${callbackName}`);

      if (params.length > 0) {
        url = `${url}?${params.join('&')}`;
      }

      // Create script element
      const script = document.createElement('script');
      script.id = this.scriptId;
      script.src = url;
      script.async = true;
      script.defer = true;

      // Set up error handler
      script.onerror = () => {
        this.loadPromise = null;
        console.error('Error loading reCAPTCHA script');
        this.scriptStatus.set(false);
        reject(new Error('Failed to load reCAPTCHA script'));
      };

      // Add script to document
      document.head.appendChild(script);
    });

    return this.loadPromise;
  }

  /**
   * Check repeatedly if grecaptcha is available
   * @param attempts Number of attempts to check
   * @param resolve Promise resolve function
   * @param reject Promise reject function
   */
  private checkGrecaptchaAvailability(
    attempts: number,
    resolve: (value: boolean) => void,
    reject: (reason: any) => void,
  ): void {
    if (window['grecaptcha'] && typeof window['grecaptcha'].render === 'function') {
      this.scriptStatus.set(true);
      this.loadPromise = null;
      resolve(true);
      return;
    }

    if (attempts <= 0) {
      this.loadPromise = null;
      console.error('reCAPTCHA script loaded but grecaptcha object not available');
      this.scriptStatus.set(false);
      reject(new Error('reCAPTCHA script loaded but grecaptcha object not available'));
      return;
    }

    // Try again after a short delay
    setTimeout(() => this.checkGrecaptchaAvailability(attempts - 1, resolve, reject), 200);
  }

  /**
   * Remove the reCAPTCHA script from the DOM
   */
  removeScript(): void {
    const script = document.getElementById(this.scriptId);
    if (script) {
      script.remove();
      delete window['grecaptcha'];
      this.scriptStatus.set(null);
      this.loadPromise = null;
    }
  }

  /**
   * Get a signal with the current script status
   */
  isLoaded(): Signal<ScriptStatus> {
    return this.scriptStatus.asReadonly();
  }

  /**
   * Reset all reCAPTCHA instances on the page
   */
  resetAll(): void {
    if (this.scriptStatus() === true && window['grecaptcha']) {
      try {
        window['grecaptcha'].reset();
      } catch (e) {
        console.warn('Error resetting reCAPTCHA:', e);
      }
    }
  }
}
