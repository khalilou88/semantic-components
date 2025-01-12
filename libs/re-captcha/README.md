# @semantic-components/re-captcha

**@semantic-components/re-captcha** is an Angular library designed to simplify the integration of Google reCAPTCHA into your Angular applications. It supports reCAPTCHA v2 and v3, providing an easy-to-use API and seamless setup for enhancing your app's security.

## Features

- Effortless integration of Google reCAPTCHA with Angular applications.
- Supports reCAPTCHA v2 (checkbox and invisible based on resolving a challenge) and v3 (invisible verification based on score).
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

## Usage

### Provide Settings

To use reCAPTCHA v3 provide the `siteKey` using the `provideScReCaptchaSettings` function:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { provideScReCaptchaSettings } from '@semantic-components/re-captcha';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideScReCaptchaSettings({
      siteKey: '6LczIrAqAAAAANk0sH07W5kW6hPNwfWAJbnaoEat',
      languageCode: 'fr',
    }),
  ],
};
```

### reCAPTCHA v2 Chechbox Component with Reactive Forms

In your component template, add the reCAPTCHA v2 to a div:

```html
<form [formGroup]="reCaptchaV2Form" (ngSubmit)="onSubmit()">
  <div sc-re-captcha-v2 [siteKey]="siteKey" formControlName="captcha"></div>
  <button type="submit">Submit</button>
</form>
```

In your component class:

```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScReCaptchaV2 } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, ScReCaptchaV2],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  siteKey = 'YOUR_SITE_KEY_V2';

  reCaptchaV2Form = new FormGroup({
    captcha: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
```

### Invisible reCAPTCHA v2 Component

In your component template, add the invisible reCAPTCHA v2 to a button (you can also add it to a div):

```html
<button [siteKey]="invisibleReCaptchaV2SiteKey" [callback]="myCallback" sc-invisible-re-captcha-v2>
  Click me to execute Invisible reCAPTCHA
</button>
```

In your component class:

```typescript
import { Component } from '@angular/core';

import { ScInvisibleReCaptchaV2 } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-root',
  imports: [ScInvisibleReCaptchaV2],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  invisibleReCaptchaV2SiteKey = 'YOUR_INVISIBLE_RE_CAPTCHA_V2_SITEKEY';

  myCallback = (token: string) => {
    console.log('Callback function:', token);
  };
}
```

### reCAPTCHA v3 Service

In your component template, add a button to execute reCAPTCHA v3 :

```html
<button (click)="executeReCaptcha()">Execute reCAPTCHA V3</button>
```

In your component class:

```typescript
import { Component, inject } from '@angular/core';

import { ScReCaptchaV3 } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly scReCaptchaV3 = inject(ScReCaptchaV3);

  async executeReCaptcha() {
    const token = await this.scReCaptchaV3.execute('action-name');
    console.log('Token:', token);
  }
}
```

## License

This library is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.
