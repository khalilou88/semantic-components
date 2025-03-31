// recaptcha.service.ts - Enhanced to better handle script loading across route changes
import { Injectable, NgZone } from '@angular/core';

import { filter, take } from 'rxjs/operators';

import { BehaviorSubject, Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class RecaptchaService {
  private readonly scriptId = 'recaptcha-script';
  private readonly apiUrl = 'https://www.google.com/recaptcha/api.js';

  // Use BehaviorSubject with three states: null (initial), true (loaded), false (error)
  private readonly scriptStatus$ = new BehaviorSubject<boolean | null>(null);
  private scriptLoading = false;

  constructor(private readonly zone: NgZone) {
    // Check if script already exists on page load
    this.checkScriptExists();
  }

  /**
   * Check if the script already exists in the document
   */
  private checkScriptExists(): void {
    const existingScript = document.getElementById(this.scriptId);
    if (existingScript) {
      // Check if grecaptcha is actually available in window object
      if (window['grecaptcha'] && typeof window['grecaptcha'].render === 'function') {
        this.scriptStatus$.next(true);
      }
    }
  }

  /**
   * Load the reCAPTCHA script dynamically
   * @param render Optional render parameter ('explicit' or site key)
   * @param onload Optional callback function name for script load
   * @returns Observable that emits true when script is loaded
   */
  loadScript(render?: string, onload?: string): Observable<boolean> {
    // First check if script exists and is loaded
    this.checkScriptExists();

    // If script is already loaded, return success immediately
    if (this.scriptStatus$.value === true) {
      return this.scriptStatus$.pipe(
        filter((status) => status === true),
        take(1),
      ) as Observable<boolean>;
    }

    // If script is currently loading, return the observable without creating a new script
    if (this.scriptLoading) {
      return this.scriptStatus$.pipe(
        filter((status) => status !== null),
        take(1),
      ) as Observable<boolean>;
    }

    this.scriptLoading = true;

    // Build URL with parameters if provided
    let url = this.apiUrl;
    const params: string[] = [];

    if (render) {
      params.push(`render=${render}`);
    }

    if (onload) {
      params.push(`onload=${onload}`);
    }

    if (params.length > 0) {
      url = `${url}?${params.join('&')}`;
    }

    // Create script element
    const script = document.createElement('script');
    script.id = this.scriptId;
    script.src = url;
    script.async = true;
    script.defer = true;

    // Set up load and error handlers
    script.onload = () => {
      this.zone.run(() => {
        this.scriptLoading = false;
        // Wait a brief moment to ensure grecaptcha is fully initialized
        setTimeout(() => {
          if (window['grecaptcha'] && typeof window['grecaptcha'].render === 'function') {
            this.scriptStatus$.next(true);
          } else {
            console.error('reCAPTCHA script loaded but grecaptcha object not available');
            this.scriptStatus$.next(false);
          }
        }, 100);
      });
    };

    script.onerror = () => {
      this.zone.run(() => {
        this.scriptLoading = false;
        console.error('Error loading reCAPTCHA script');
        this.scriptStatus$.next(false);
      });
    };

    // Add script to document
    document.head.appendChild(script);

    return this.scriptStatus$.pipe(
      filter((status) => status !== null),
      take(1),
    ) as Observable<boolean>;
  }

  /**
   * Remove the reCAPTCHA script from the DOM
   */
  removeScript(): void {
    const script = document.getElementById(this.scriptId);
    if (script) {
      script.remove();
      delete window['grecaptcha'];
      this.scriptStatus$.next(null);
      this.scriptLoading = false;
    }
  }

  /**
   * Check if the script is loaded
   */
  isLoaded(): Observable<boolean | null> {
    return this.scriptStatus$.asObservable();
  }

  /**
   * Reset all reCAPTCHA instances on the page
   */
  resetAll(): void {
    if (this.scriptStatus$.value === true && window['grecaptcha']) {
      try {
        window['grecaptcha'].reset();
      } catch (e) {
        console.warn('Error resetting reCAPTCHA:', e);
      }
    }
  }
}
