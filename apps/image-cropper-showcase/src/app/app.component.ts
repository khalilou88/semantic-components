import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="header">
        <h1>🖼️ Angular Image Cropper</h1>
        <p>Upload an image and crop it with precision controls</p>
      </div>

      <div class="content">
        <!-- Upload Section -->
        <div class="upload-section">
          <label class="file-input-wrapper" for="imageInput">
            📁 Choose Image File
            <input class="file-input" id="imageInput" type="file" accept="image/*" />
          </label>

          <div class="demo-buttons">
            <button class="demo-btn" onclick="loadDemoImage('landscape')">🏔️ Landscape</button>
            <button class="demo-btn" onclick="loadDemoImage('portrait')">👤 Portrait</button>
            <button class="demo-btn" onclick="loadDemoImage('square')">⬜ Square</button>
            <button class="demo-btn" onclick="loadDemoImage('wide')">📐 Wide</button>
          </div>
        </div>

        <!-- Cropper Container -->
        <div class="cropper-container">
          <!-- Original Image & Cropper -->
          <div class="cropper-section">
            <h3>📷 Original Image</h3>
            <div class="image-cropper-container" id="cropperContainer">
              <div class="no-image">
                <p>Select an image to start cropping</p>
              </div>
            </div>

            <div class="preset-buttons">
              <button class="preset-btn active" onclick="setAspectRatio(null)">Free</button>
              <button class="preset-btn" onclick="setAspectRatio(1)">1:1</button>
              <button class="preset-btn" onclick="setAspectRatio(4/3)">4:3</button>
              <button class="preset-btn" onclick="setAspectRatio(16/9)">16:9</button>
              <button class="preset-btn" onclick="setAspectRatio(3/2)">3:2</button>
            </div>

            <div class="controls">
              <button class="control-btn" id="cropBtn" onclick="cropImage()" disabled>
                ✂️ Crop Image
              </button>
              <button class="control-btn" id="resetBtn" onclick="resetCrop()" disabled>
                🔄 Reset
              </button>
              <button class="control-btn" id="downloadBtn" onclick="downloadImage()" disabled>
                💾 Download
              </button>
            </div>
          </div>

          <!-- Cropped Result -->
          <div class="result-section">
            <h3>✨ Cropped Result</h3>
            <div id="resultContainer">
              <div class="no-image">
                <p>Cropped image will appear here</p>
              </div>
            </div>

            <div class="crop-info" id="cropInfo" style="display: none;">
              <h4>📊 Crop Information</h4>
              <p id="imageDimensions"></p>
              <p id="cropDimensions"></p>
              <p id="aspectRatioInfo"></p>
              <p id="fileSizeInfo"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: '',
})
export class AppComponent {}
