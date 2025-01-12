# @semantic-components/re-captcha

**@semantic-components/re-captcha** is an Angular library designed to simplify the integration of Google reCAPTCHA into your Angular applications. It supports reCAPTCHA v2 and v3, providing an easy-to-use API and seamless setup for enhancing your app's security.

## Features

- Effortless integration of Google reCAPTCHA with Angular applications.
- Supports reCAPTCHA v2 (checkbox and invisible) based on resolving a challenge and v3 based on score (invisible verification).
- Supports displaying multiple reCAPTCHA instances on the same page.
- Works seamlessly with both reactive and template-driven forms.
- Leverages the latest Angular features, including **signal inputs** and **standalone components** for enhanced modularity and reactivity.
- Optimized for performance with a lightweight implementation.

## Installation

To install the library, use npm or yarn:

```bash
npm install @semantic-components/re-captcha
```

or

```bash
yarn add @semantic-components/re-captcha
```

## Setup

### Step 1: Import the Module

For standalone component support, you can directly import the `ReCaptchaComponent` without needing to use an Angular module:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';

import { ReCaptchaComponent, provideReCaptchaSettings } from '@semantic-components/re-captcha';

import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [provideReCaptchaSettings({ siteKey: 'YOUR_GOOGLE_RECAPTCHA_SITE_KEY' })],
  standaloneComponents: [ReCaptchaComponent],
});
```

### Step 2: Add Your reCAPTCHA Component

In your component template, add the reCAPTCHA directive:

```html
<form (ngSubmit)="onSubmit()">
  <re-captcha (resolved)="onCaptchaResolved($event)" [signal]="recaptchaSignal"></re-captcha>
  <button type="submit">Submit</button>
</form>
```

In your component class:

```typescript
import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReCaptchaComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  recaptchaSignal: Signal<string> = signal('');

  onCaptchaResolved(captchaResponse: string) {
    this.recaptchaSignal.set(captchaResponse);
    console.log('Captcha resolved: ', captchaResponse);
    // Send the captchaResponse to your server for validation.
  }

  onSubmit() {
    console.log('Form submitted with captcha response: ', this.recaptchaSignal());
  }
}
```

## Usage

The library provides flexibility for different scenarios:

### Reactive Forms

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <re-captcha formControlName="recaptcha"></re-captcha>
  <button type="submit">Submit</button>
</form>
```

In your component:

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ReCaptchaComponent } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReCaptchaComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      recaptcha: [''],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For support or inquiries, please contact us at [support@semantic-components.dev](mailto:support@semantic-components.dev).
