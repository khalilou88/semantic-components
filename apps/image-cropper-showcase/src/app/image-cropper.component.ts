import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface CropPosition {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface Position {
  x: number;
  y: number;
}

@Component({
  selector: 'app-image-cropper',
  imports: [CommonModule],
  template: `
    <!-- Upload Section -->
    <div class="upload-section">
      <label class="file-input-wrapper" for="imageInput">
        📁 Choose Image File
        <input
          class="file-input"
          id="imageInput"
          #fileInput
          (change)="onFileSelect($event)"
          type="file"
          accept="image/*"
        />
      </label>

      <div class="demo-buttons">
        <button class="demo-btn" (click)="loadDemoImage('landscape')">🏔️ Landscape</button>
        <button class="demo-btn" (click)="loadDemoImage('portrait')">👤 Portrait</button>
        <button class="demo-btn" (click)="loadDemoImage('square')">⬜ Square</button>
        <button class="demo-btn" (click)="loadDemoImage('wide')">📐 Wide</button>
      </div>
    </div>

    <!-- Cropper Container -->
    <div class="cropper-container">
      <!-- Original Image & Cropper -->
      <div class="cropper-section">
        <h3>📷 Original Image</h3>
        <div class="image-cropper-container" #cropperContainer>
          <div class="no-image" *ngIf="!currentImage">
            <p>Select an image to start cropping</p>
          </div>

          <div class="cropper-canvas" *ngIf="currentImage">
            <img
              class="source-image"
              #sourceImage
              [src]="currentImage"
              (load)="onImageLoad()"
              alt="Source image"
            />

            <div class="crop-overlay" [style.display]="showOverlay ? 'block' : 'none'">
              <div
                class="crop-area"
                #cropArea
                [style.left.px]="cropPosition.x1"
                [style.top.px]="cropPosition.y1"
                [style.width.px]="cropPosition.x2 - cropPosition.x1"
                [style.height.px]="cropPosition.y2 - cropPosition.y1"
                (mousedown)="startMove($event)"
                (touchstart)="startMove($event)"
              >
                <div
                  class="resize-handle tl"
                  (mousedown)="startResize($event, 'tl')"
                  (touchstart)="startResize($event, 'tl')"
                ></div>
                <div
                  class="resize-handle tr"
                  (mousedown)="startResize($event, 'tr')"
                  (touchstart)="startResize($event, 'tr')"
                ></div>
                <div
                  class="resize-handle bl"
                  (mousedown)="startResize($event, 'bl')"
                  (touchstart)="startResize($event, 'bl')"
                ></div>
                <div
                  class="resize-handle br"
                  (mousedown)="startResize($event, 'br')"
                  (touchstart)="startResize($event, 'br')"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="preset-buttons">
          <button
            class="preset-btn"
            [class.active]="aspectRatio === null"
            (click)="setAspectRatio(null)"
          >
            Free
          </button>
          <button class="preset-btn" [class.active]="aspectRatio === 1" (click)="setAspectRatio(1)">
            1:1
          </button>
          <button
            class="preset-btn"
            [class.active]="aspectRatio === 4 / 3"
            (click)="setAspectRatio(4 / 3)"
          >
            4:3
          </button>
          <button
            class="preset-btn"
            [class.active]="aspectRatio === 16 / 9"
            (click)="setAspectRatio(16 / 9)"
          >
            16:9
          </button>
          <button
            class="preset-btn"
            [class.active]="aspectRatio === 3 / 2"
            (click)="setAspectRatio(3 / 2)"
          >
            3:2
          </button>
        </div>

        <div class="controls">
          <button class="control-btn" [disabled]="!currentImage" (click)="cropImage()">
            ✂️ Crop Image
          </button>
          <button class="control-btn" [disabled]="!currentImage" (click)="resetCrop()">
            🔄 Reset
          </button>
          <button class="control-btn" [disabled]="!croppedImageData" (click)="downloadImage()">
            💾 Download
          </button>
        </div>
      </div>

      <!-- Cropped Result -->
      <div class="result-section">
        <h3>✨ Cropped Result</h3>
        <div id="resultContainer">
          <div class="no-image" *ngIf="!croppedImageData">
            <p>Cropped image will appear here</p>
          </div>
          <img
            class="result-image"
            *ngIf="croppedImageData"
            [src]="croppedImageData"
            alt="Cropped image"
          />
        </div>

        <div class="crop-info" *ngIf="cropInfo">
          <h4>📊 Crop Information</h4>
          <p>Original: {{ cropInfo.originalWidth }} × {{ cropInfo.originalHeight }}px</p>
          <p>Cropped: {{ cropInfo.croppedWidth }} × {{ cropInfo.croppedHeight }}px</p>
          <p>Aspect Ratio: {{ cropInfo.aspectRatio }}:1</p>
          <p>Estimated Size: ~{{ cropInfo.estimatedSize }}KB</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .upload-section {
        margin-bottom: 40px;
        text-align: center;
      }

      .file-input-wrapper {
        display: inline-block;
        position: relative;
        overflow: hidden;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 16px;
        font-weight: 500;
        border: none;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
      }

      .file-input-wrapper:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
      }

      .file-input {
        position: absolute;
        left: -9999px;
      }

      .demo-buttons {
        margin: 20px 0;
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .demo-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 25px;
        background: #f8f9fa;
        color: #495057;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
        border: 2px solid #e9ecef;
      }

      .demo-btn:hover {
        background: #e9ecef;
        transform: translateY(-1px);
      }

      .cropper-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        margin-bottom: 40px;
      }

      @media (max-width: 768px) {
        .cropper-container {
          grid-template-columns: 1fr;
          gap: 20px;
        }
      }

      .cropper-section,
      .result-section {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 30px;
        border: 2px solid #e9ecef;
      }

      .cropper-section h3,
      .result-section h3 {
        margin-bottom: 20px;
        color: #495057;
        font-size: 1.3rem;
        font-weight: 500;
      }

      .image-cropper-container {
        position: relative;
        width: 100%;
        height: 400px;
        border: 2px dashed #dee2e6;
        border-radius: 10px;
        overflow: hidden;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .no-image {
        color: #6c757d;
        font-size: 1.1rem;
        text-align: center;
      }

      .cropper-canvas {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .source-image {
        max-width: 100%;
        max-height: 100%;
        display: block;
        margin: 0 auto;
        object-fit: contain;
      }

      .crop-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }

      .crop-area {
        position: absolute;
        background: transparent;
        border: 2px solid #fff;
        box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
        cursor: move;
        outline: 1px solid rgba(255, 255, 255, 0.3);
      }

      .resize-handle {
        position: absolute;
        width: 12px;
        height: 12px;
        background: #fff;
        border: 2px solid #4facfe;
        border-radius: 50%;
        z-index: 10;
      }

      .resize-handle.tl {
        top: -6px;
        left: -6px;
        cursor: nwse-resize;
      }

      .resize-handle.tr {
        top: -6px;
        right: -6px;
        cursor: nesw-resize;
      }

      .resize-handle.bl {
        bottom: -6px;
        left: -6px;
        cursor: nesw-resize;
      }

      .resize-handle.br {
        bottom: -6px;
        right: -6px;
        cursor: nwse-resize;
      }

      .controls {
        margin-top: 20px;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .control-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 25px;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
        font-weight: 500;
      }

      .control-btn:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(79, 172, 254, 0.4);
      }

      .control-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      .result-image {
        max-width: 100%;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border: 2px solid #e9ecef;
      }

      .crop-info {
        margin-top: 20px;
        padding: 20px;
        background: white;
        border-radius: 10px;
        border: 1px solid #e9ecef;
      }

      .crop-info h4 {
        margin-bottom: 10px;
        color: #495057;
      }

      .crop-info p {
        margin: 5px 0;
        color: #6c757d;
        font-size: 14px;
      }

      .preset-buttons {
        margin-top: 20px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .preset-btn {
        padding: 8px 16px;
        border: 1px solid #dee2e6;
        border-radius: 20px;
        background: white;
        color: #495057;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 12px;
      }

      .preset-btn:hover,
      .preset-btn.active {
        background: #4facfe;
        color: white;
        border-color: #4facfe;
      }
    `,
  ],
})
export class ImageCropperComponent implements OnInit {
  @ViewChild('cropperContainer') cropperContainer!: ElementRef;
  @ViewChild('sourceImage') sourceImage!: ElementRef<HTMLImageElement>;
  @ViewChild('cropArea') cropArea!: ElementRef;

  currentImage: string | null = null;
  showOverlay = false;
  aspectRatio: number | null = null;
  croppedImageData: string | null = null;

  cropPosition: CropPosition = { x1: 0, y1: 0, x2: 0, y2: 0 };
  startPosition: Position = { x: 0, y: 0 };
  moveType: 'crop' | 'resize' = 'crop';
  resizeHandle: string | null = null;
  isCropping = false;

  cropInfo: any = null;

  demoImages = {
    landscape: 'https://picsum.photos/800/600?random=1',
    portrait: 'https://picsum.photos/600/800?random=2',
    square: 'https://picsum.photos/600/600?random=3',
    wide: 'https://picsum.photos/1000/400?random=4',
  };

  ngOnInit() {
    // Load demo image by default
    setTimeout(() => this.loadDemoImage('landscape'), 500);
  }

  onFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.loadImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  loadDemoImage(type: keyof typeof this.demoImages) {
    this.loadImage(this.demoImages[type]);
  }

  loadImage(src: string) {
    this.currentImage = src;
    this.showOverlay = false;
    this.croppedImageData = null;
    this.cropInfo = null;
  }

  onImageLoad() {
    this.showOverlay = true;

    // Set initial crop area (80% of image)
    const container = this.cropperContainer.nativeElement;
    const img = this.sourceImage.nativeElement;

    const containerRect = container.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    const autoCropArea = 0.8;
    const cropWidth = imgRect.width * autoCropArea;
    const cropHeight = this.aspectRatio
      ? cropWidth / this.aspectRatio
      : imgRect.height * autoCropArea;

    const x1 = (containerRect.width - cropWidth) / 2;
    const y1 = (containerRect.height - cropHeight) / 2;

    this.cropPosition = {
      x1,
      y1,
      x2: x1 + cropWidth,
      y2: y1 + cropHeight,
    };
  }

  startMove(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.moveType = 'crop';
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    this.startPosition = { x: clientX, y: clientY };
    this.isCropping = true;

    document.addEventListener('mousemove', this.onMove.bind(this));
    document.addEventListener('mouseup', this.endMove.bind(this));
    document.addEventListener('touchmove', this.onMove.bind(this));
    document.addEventListener('touchend', this.endMove.bind(this));
  }

  startResize(event: MouseEvent | TouchEvent, handle: string) {
    event.preventDefault();
    event.stopPropagation();

    this.moveType = 'resize';
    this.resizeHandle = handle;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    this.startPosition = { x: clientX, y: clientY };
    this.isCropping = true;

    document.addEventListener('mousemove', this.onMove.bind(this));
    document.addEventListener('mouseup', this.endMove.bind(this));
    document.addEventListener('touchmove', this.onMove.bind(this));
    document.addEventListener('touchend', this.endMove.bind(this));
  }

  onMove(event: MouseEvent | TouchEvent) {
    if (!this.isCropping) return;

    event.preventDefault();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    const deltaX = clientX - this.startPosition.x;
    const deltaY = clientY - this.startPosition.y;

    this.startPosition = { x: clientX, y: clientY };

    if (this.moveType === 'crop') {
      this.moveCropArea(deltaX, deltaY);
    } else if (this.moveType === 'resize') {
      this.resizeCropArea(deltaX, deltaY);
    }
  }

  moveCropArea(deltaX: number, deltaY: number) {
    const containerRect = this.cropperContainer.nativeElement.getBoundingClientRect();
    const width = this.cropPosition.x2 - this.cropPosition.x1;
    const height = this.cropPosition.y2 - this.cropPosition.y1;

    let x1 = Math.max(0, this.cropPosition.x1 + deltaX);
    let y1 = Math.max(0, this.cropPosition.y1 + deltaY);

    if (x1 + width > containerRect.width) {
      x1 = containerRect.width - width;
    }

    if (y1 + height > containerRect.height) {
      y1 = containerRect.height - height;
    }

    this.cropPosition = {
      x1,
      y1,
      x2: x1 + width,
      y2: y1 + height,
    };
  }

  resizeCropArea(deltaX: number, deltaY: number) {
    const containerRect = this.cropperContainer.nativeElement.getBoundingClientRect();
    let { x1, y1, x2, y2 } = this.cropPosition;

    const minSize = 50;

    switch (this.resizeHandle) {
      case 'tl':
        x1 = Math.min(x1 + deltaX, x2 - minSize);
        y1 = Math.min(y1 + deltaY, y2 - minSize);
        break;
      case 'tr':
        x2 = Math.max(x2 + deltaX, x1 + minSize);
        y1 = Math.min(y1 + deltaY, y2 - minSize);
        break;
      case 'bl':
        x1 = Math.min(x1 + deltaX, x2 - minSize);
        y2 = Math.max(y2 + deltaY, y1 + minSize);
        break;
      case 'br':
        x2 = Math.max(x2 + deltaX, x1 + minSize);
        y2 = Math.max(y2 + deltaY, y1 + minSize);
        break;
    }

    // Maintain aspect ratio if set
    if (this.aspectRatio) {
      const width = x2 - x1;
      const height = y2 - y1;

      if (width / height !== this.aspectRatio) {
        switch (this.resizeHandle) {
          case 'tl':
          case 'tr':
            y1 = y2 - width / this.aspectRatio;
            break;
          case 'bl':
          case 'br':
            y2 = y1 + width / this.aspectRatio;
            break;
        }
      }
    }

    // Keep within bounds
    x1 = Math.max(0, x1);
    y1 = Math.max(0, y1);
    x2 = Math.min(containerRect.width, x2);
    y2 = Math.min(containerRect.height, y2);

    this.cropPosition = { x1, y1, x2, y2 };
  }

  endMove(event: MouseEvent | TouchEvent) {
    if (!this.isCropping) return;

    this.isCropping = false;
    this.resizeHandle = null;

    document.removeEventListener('mousemove', this.onMove.bind(this));
    document.removeEventListener('mouseup', this.endMove.bind(this));
    document.removeEventListener('touchmove', this.onMove.bind(this));
    document.removeEventListener('touchend', this.endMove.bind(this));
  }

  setAspectRatio(ratio: number | null) {
    this.aspectRatio = ratio;

    if (this.sourceImage && this.aspectRatio) {
      // Adjust current crop area to match aspect ratio
      const width = this.cropPosition.x2 - this.cropPosition.x1;
      const newHeight = width / this.aspectRatio;
      const centerY = (this.cropPosition.y1 + this.cropPosition.y2) / 2;

      this.cropPosition.y1 = centerY - newHeight / 2;
      this.cropPosition.y2 = centerY + newHeight / 2;

      // Ensure it fits in canvas
      const containerRect = this.cropperContainer.nativeElement.getBoundingClientRect();
      if (this.cropPosition.y2 > containerRect.height) {
        const overflow = this.cropPosition.y2 - containerRect.height;
        this.cropPosition.y1 -= overflow;
        this.cropPosition.y2 -= overflow;
      }
      if (this.cropPosition.y1 < 0) {
        const overflow = -this.cropPosition.y1;
        this.cropPosition.y1 += overflow;
        this.cropPosition.y2 += overflow;
      }
    }
  }

  cropImage() {
    if (!this.sourceImage || !this.showOverlay) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const img = this.sourceImage.nativeElement;

    // Calculate crop dimensions relative to original image
    const imgRect = img.getBoundingClientRect();
    const containerRect = this.cropperContainer.nativeElement.getBoundingClientRect();

    const scaleX = img.naturalWidth / imgRect.width;
    const scaleY = img.naturalHeight / imgRect.height;

    const cropWidth = (this.cropPosition.x2 - this.cropPosition.x1) * scaleX;
    const cropHeight = (this.cropPosition.y2 - this.cropPosition.y1) * scaleY;
    const cropX = (this.cropPosition.x1 - (containerRect.width - imgRect.width) / 2) * scaleX;
    const cropY = (this.cropPosition.y1 - (containerRect.height - imgRect.height) / 2) * scaleY;

    canvas.width = cropWidth;
    canvas.height = cropHeight;

    ctx.drawImage(
      img,
      Math.max(0, cropX),
      Math.max(0, cropY),
      cropWidth,
      cropHeight,
      0,
      0,
      cropWidth,
      cropHeight,
    );

    this.croppedImageData = canvas.toDataURL('image/png');

    // Show crop info
    this.showCropInfo(cropWidth, cropHeight);
  }

  showCropInfo(width: number, height: number) {
    const img = this.sourceImage.nativeElement;
    const originalWidth = img.naturalWidth;
    const originalHeight = img.naturalHeight;

    // Estimate file size (rough approximation)
    const estimatedSize = Math.round(((this.croppedImageData?.length || 0) * 0.75) / 1024);

    this.cropInfo = {
      originalWidth,
      originalHeight,
      croppedWidth: Math.round(width),
      croppedHeight: Math.round(height),
      aspectRatio: (width / height).toFixed(2),
      estimatedSize,
    };
  }

  resetCrop() {
    if (this.sourceImage) {
      this.onImageLoad();
    }
  }

  downloadImage() {
    if (this.croppedImageData) {
      const link = document.createElement('a');
      link.download = `cropped-image-${Date.now()}.png`;
      link.href = this.croppedImageData;
      link.click();
    }
  }
}
