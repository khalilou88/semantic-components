import { Component } from '@angular/core';

import { ImageCropperComponent } from './image-cropper.component';

@Component({
  selector: 'app-root',
  imports: [ImageCropperComponent],
  template: `
    <div class="container">
      <div class="header">
        <h1>🖼️ Angular Image Cropper</h1>
        <p>Upload an image and crop it with precision controls</p>
      </div>

      <div class="content">
        <app-image-cropper></app-image-cropper>
      </div>
    </div>
  `,
  styles: [
    `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :host {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        padding: 20px;
        display: block;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        background: white;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }

      .header {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        color: white;
        padding: 30px;
        text-align: center;
      }

      .header h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        font-weight: 300;
      }

      .header p {
        font-size: 1.1rem;
        opacity: 0.9;
      }

      .content {
        padding: 40px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-image-cropper';
}
