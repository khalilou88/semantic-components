# @semantic-components/re-captcha

**@semantic-components/re-captcha** is an Angular library designed to simplify the integration of Google reCAPTCHA into your Angular applications. It supports reCAPTCHA v2 and v3, providing an easy-to-use API and seamless setup for enhancing your app's security.

## Features

- Effortless integration of Google reCAPTCHA with Angular applications.
- Supports reCAPTCHA v2 (checkbox and invisible based on resolving a challenge) and v3 (invisible verification based on a score).
- Supports displaying multiple reCAPTCHA instances on the same page.
- Works seamlessly with both reactive and template-driven forms.
- Leverages the latest Angular features, including **signal inputs** and **standalone components** for enhanced modularity and reactivity.
- Optimized for performance with a lightweight implementation.
- Allows customization of the reCAPTCHA theme (e.g., light or dark) for better UI consistency.

## Compatibility

This library is **compatible with Angular 19 and above**:

| Lib Version | Angular Version |
| ----------- | --------------- |
| 0.43.0      | >=19            |

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

### reCAPTCHA Settings

To use reCAPTCHA v2 provide the `v2SiteKey` and to use reCAPTCHA v3 provide the `v3SiteKey` using the `provideScReCaptchaSettings` function:

```typescript
...

import { provideScReCaptchaSettings } from '@semantic-components/re-captcha';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideScReCaptchaSettings({
      v2SiteKey: 'YOUR_V2_SITE_KEY',
      v3SiteKey: 'YOUR_V3_SITE_KEY',
      languageCode: 'fr',
    }),
  ],
};
```

### Checkbox reCAPTCHA v2 Component with Reactive Forms

In your component template, add the reCAPTCHA v2 to a div:

```html
<form [formGroup]="checkboxReCaptchaForm" (ngSubmit)="onSubmit()">
  <div sc-checkbox-re-captcha [siteKey]="siteKey" formControlName="captcha"></div>
  <button type="submit">Submit</button>
</form>
```

In your component class:

```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScCheckboxReCaptcha } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, ScCheckboxReCaptcha],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  siteKey = 'YOUR_V2_SITE_KEY'; //You can also provide it globally with provideScReCaptchaSettings

  checkboxReCaptchaForm = new FormGroup({
    captcha: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
```

### Invisible reCAPTCHA v2 Component with a Button

In your component template, add the invisible reCAPTCHA v2 to a button (you can also add it to a div):

```html
<button [callback]="myCallback" sc-invisible-re-captcha>
  Click me to execute Invisible reCAPTCHA
</button>
```

In your component class:

```typescript
import { Component } from '@angular/core';

import { ScInvisibleReCaptcha } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-root',
  imports: [ScInvisibleReCaptcha],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  myCallback = (token: string) => {
    console.log('Callback function:', token);
  };
}
```

### Invisible reCAPTCHA v2 Component with Reactive Forms

Call the execute function programmatically before submitting the form

### Score based reCAPTCHA v3 Service

In your component template, add a button to execute reCAPTCHA v3 :

```html
<button (click)="executeReCaptcha()">Execute reCAPTCHA V3</button>
```

In your component class:

```typescript
import { Component, inject } from '@angular/core';

import { ScScoreReCaptcha } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly scScoreReCaptcha = inject(ScScoreReCaptcha);

  async executeReCaptcha() {
    const token = await this.scScoreReCaptcha.execute('action-name');
    console.log('Token:', token);
  }
}
```

## License

This library is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.
