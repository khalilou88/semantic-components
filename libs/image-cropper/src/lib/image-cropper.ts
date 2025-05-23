import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { CropperOptions, CropperPosition, CropperResult } from './image-cropper.interface';
import { ImageCropperService } from './image-cropper.service';

@Component({
  selector: 'ng-image-cropper',
  template: `
    <div class="image-cropper-container" [ngStyle]="containerStyle">
      <div class="cropper-canvas" #cropperCanvas [ngClass]="{ 'cropping-active': isCropping }">
        <img
          class="source-image"
          #sourceImage
          [src]="imageUrl"
          (load)="onImageLoad()"
          alt="Source image"
        />
        <div class="crop-overlay" *ngIf="showOverlay">
          <div
            class="crop-area"
            #cropArea
            [ngStyle]="getCropAreaStyle()"
            (mousedown)="onCropAreaMouseDown($event)"
            (touchstart)="onCropAreaTouchStart($event)"
          >
            <div
              class="resize-handle tl"
              *ngIf="options.resizable"
              (mousedown)="onResizeHandleMouseDown($event, 'tl')"
              (touchstart)="onResizeHandleTouchStart($event, 'tl')"
            ></div>
            <div
              class="resize-handle tr"
              *ngIf="options.resizable"
              (mousedown)="onResizeHandleMouseDown($event, 'tr')"
              (touchstart)="onResizeHandleTouchStart($event, 'tr')"
            ></div>
            <div
              class="resize-handle bl"
              *ngIf="options.resizable"
              (mousedown)="onResizeHandleMouseDown($event, 'bl')"
              (touchstart)="onResizeHandleTouchStart($event, 'bl')"
            ></div>
            <div
              class="resize-handle br"
              *ngIf="options.resizable"
              (mousedown)="onResizeHandleMouseDown($event, 'br')"
              (touchstart)="onResizeHandleTouchStart($event, 'br')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .image-cropper-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        min-height: 200px;
        background-color: #f5f5f5;
        user-select: none;
      }

      .cropper-canvas {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .source-image {
        max-width: 100%;
        max-height: 100%;
        display: block;
        margin: 0 auto;
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
        border: 1px solid white;
        box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
        cursor: move;
      }

      .resize-handle {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: white;
        border: 1px solid #333;
      }

      .resize-handle.tl {
        top: -5px;
        left: -5px;
        cursor: nwse-resize;
      }

      .resize-handle.tr {
        top: -5px;
        right: -5px;
        cursor: nesw-resize;
      }

      .resize-handle.bl {
        bottom: -5px;
        left: -5px;
        cursor: nesw-resize;
      }

      .resize-handle.br {
        bottom: -5px;
        right: -5px;
        cursor: nwse-resize;
      }

      .cropping-active {
        cursor: crosshair;
      }
    `,
  ],
})
export class ScImageCropper implements OnInit, OnChanges, OnDestroy {
  @Input() imageUrl: string = '';
  @Input() options: CropperOptions = {
    aspectRatio: 1,
    resizable: true,
    movable: true,
    minWidth: 50,
    minHeight: 50,
    viewMode: 1,
    responsive: true,
    guides: true,
    center: true,
    highlight: true,
    background: true,
    autoCrop: true,
    autoCropArea: 0.8,
    dragMode: 'crop',
    cropBoxMovable: true,
    cropBoxResizable: true,
    zoomable: true,
    zoomOnTouch: true,
    zoomOnWheel: true,
  };

  @Output() cropStart = new EventEmitter<void>();
  @Output() cropMove = new EventEmitter<CropperPosition>();
  @Output() cropEnd = new EventEmitter<CropperResult>();
  @Output() ready = new EventEmitter<void>();

  @ViewChild('sourceImage', { static: false }) sourceImage!: ElementRef;
  @ViewChild('cropperCanvas', { static: false }) cropperCanvas!: ElementRef;
  @ViewChild('cropArea', { static: false }) cropArea!: ElementRef;

  containerStyle: any = {};
  showOverlay = false;
  isCropping = false;

  private imageWidth = 0;
  private imageHeight = 0;
  private cropPosition: CropperPosition = { x1: 0, y1: 0, x2: 0, y2: 0 };
  private startPosition = { x: 0, y: 0 };
  private moveType: 'crop' | 'resize' = 'crop';
  private resizeHandle: 'tl' | 'tr' | 'bl' | 'br' | null = null;
  private mouseMoveListener: () => void = () => {};
  private mouseUpListener: () => void = () => {};
  private touchMoveListener: () => void = () => {};
  private touchEndListener: () => void = () => {};

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    private cropperService: ImageCropperService,
  ) {}

  ngOnInit(): void {
    if (this.options.responsive) {
      this.containerStyle = {
        width: '100%',
        height: '100%',
      };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imageUrl'] && this.imageUrl) {
      // Reset cropper when image changes
      this.showOverlay = false;
      this.isCropping = false;
      this.cropPosition = { x1: 0, y1: 0, x2: 0, y2: 0 };
    }
  }

  ngOnDestroy(): void {
    this.removeEventListeners();
  }

  onImageLoad(): void {
    const img = this.sourceImage.nativeElement;
    this.imageWidth = img.naturalWidth;
    this.imageHeight = img.naturalHeight;

    // Set initial crop area
    if (this.options.autoCrop) {
      const canvas = this.cropperCanvas.nativeElement;
      const canvasRect = canvas.getBoundingClientRect();
      const canvasWidth = canvasRect.width;
      const canvasHeight = canvasRect.height;

      const scale = Math.min(canvasWidth / this.imageWidth, canvasHeight / this.imageHeight);
      const scaledWidth = this.imageWidth * scale;
      const scaledHeight = this.imageHeight * scale;

      const autoCropArea = this.options.autoCropArea || 0.8;
      const cropWidth = scaledWidth * autoCropArea;
      const cropHeight = this.options.aspectRatio
        ? cropWidth / this.options.aspectRatio
        : scaledHeight * autoCropArea;

      const x1 = (canvasWidth - cropWidth) / 2;
      const y1 = (canvasHeight - cropHeight) / 2;

      this.cropPosition = {
        x1,
        y1,
        x2: x1 + cropWidth,
        y2: y1 + cropHeight,
      };

      this.showOverlay = true;
    }

    this.ready.emit();
  }

  getCropAreaStyle(): any {
    const width = this.cropPosition.x2 - this.cropPosition.x1;
    const height = this.cropPosition.y2 - this.cropPosition.y1;

    return {
      left: `${this.cropPosition.x1}px`,
      top: `${this.cropPosition.y1}px`,
      width: `${width}px`,
      height: `${height}px`,
    };
  }

  onCropAreaMouseDown(event: MouseEvent): void {
    if (!this.options.movable) return;

    event.preventDefault();
    event.stopPropagation();

    this.startCropping(event.clientX, event.clientY, 'crop');

    this.mouseMoveListener = this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
      this.onCropAreaMouseMove(e);
    });

    this.mouseUpListener = this.renderer.listen('document', 'mouseup', () => {
      this.onCropAreaMouseUp();
    });
  }

  onCropAreaTouchStart(event: TouchEvent): void {
    if (!this.options.movable) return;

    event.preventDefault();
    event.stopPropagation();

    const touch = event.touches[0];
    this.startCropping(touch.clientX, touch.clientY, 'crop');

    this.touchMoveListener = this.renderer.listen('document', 'touchmove', (e: TouchEvent) => {
      const touchMove = e.touches[0];
      this.onCropAreaMove(touchMove.clientX, touchMove.clientY);
    });

    this.touchEndListener = this.renderer.listen('document', 'touchend', () => {
      this.onCropAreaEnd();
    });
  }

  onResizeHandleMouseDown(event: MouseEvent, handle: 'tl' | 'tr' | 'bl' | 'br'): void {
    if (!this.options.resizable) return;

    event.preventDefault();
    event.stopPropagation();

    this.startCropping(event.clientX, event.clientY, 'resize', handle);

    this.mouseMoveListener = this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
      this.onResizeHandleMouseMove(e);
    });

    this.mouseUpListener = this.renderer.listen('document', 'mouseup', () => {
      this.onResizeHandleMouseUp();
    });
  }

  onResizeHandleTouchStart(event: TouchEvent, handle: 'tl' | 'tr' | 'bl' | 'br'): void {
    if (!this.options.resizable) return;

    event.preventDefault();
    event.stopPropagation();

    const touch = event.touches[0];
    this.startCropping(touch.clientX, touch.clientY, 'resize', handle);

    this.touchMoveListener = this.renderer.listen('document', 'touchmove', (e: TouchEvent) => {
      const touchMove = e.touches[0];
      this.onResizeHandleMove(touchMove.clientX, touchMove.clientY);
    });

    this.touchEndListener = this.renderer.listen('document', 'touchend', () => {
      this.onResizeHandleEnd();
    });
  }

  private startCropping(
    clientX: number,
    clientY: number,
    moveType: 'crop' | 'resize',
    handle: 'tl' | 'tr' | 'bl' | 'br' | null = null,
  ): void {
    this.moveType = moveType;
    this.resizeHandle = handle;
    this.startPosition = { x: clientX, y: clientY };
    this.isCropping = true;
    this.cropStart.emit();
  }

  onCropAreaMouseMove(event: MouseEvent): void {
    event.preventDefault();
    this.onCropAreaMove(event.clientX, event.clientY);
  }

  onCropAreaMove(clientX: number, clientY: number): void {
    if (!this.isCropping || this.moveType !== 'crop') return;

    const deltaX = clientX - this.startPosition.x;
    const deltaY = clientY - this.startPosition.y;

    // Update start position for next move
    this.startPosition = { x: clientX, y: clientY };

    // Update crop position
    const newX1 = this.cropPosition.x1 + deltaX;
    const newY1 = this.cropPosition.y1 + deltaY;
    const width = this.cropPosition.x2 - this.cropPosition.x1;
    const height = this.cropPosition.y2 - this.cropPosition.y1;

    // Ensure crop area stays within canvas
    const canvas = this.cropperCanvas.nativeElement;
    const canvasRect = canvas.getBoundingClientRect();

    let x1 = Math.max(0, newX1);
    let y1 = Math.max(0, newY1);

    if (x1 + width > canvasRect.width) {
      x1 = canvasRect.width - width;
    }

    if (y1 + height > canvasRect.height) {
      y1 = canvasRect.height - height;
    }

    this.cropPosition = {
      x1,
      y1,
      x2: x1 + width,
      y2: y1 + height,
    };

    this.cropMove.emit(this.cropPosition);
  }

  onCropAreaMouseUp(): void {
    this.onCropAreaEnd();
    this.removeEventListeners();
  }

  onCropAreaEnd(): void {
    if (!this.isCropping) return;

    this.isCropping = false;
    this.publishCropData();
    this.cropEnd.emit(this.getCropperResult());
  }

  onResizeHandleMouseMove(event: MouseEvent): void {
    event.preventDefault();
    this.onResizeHandleMove(event.clientX, event.clientY);
  }

  onResizeHandleMove(clientX: number, clientY: number): void {
    if (!this.isCropping || this.moveType !== 'resize' || !this.resizeHandle) return;

    const deltaX = clientX - this.startPosition.x;
    const deltaY = clientY - this.startPosition.y;

    // Update start position for next move
    this.startPosition = { x: clientX, y: clientY };

    const canvas = this.cropperCanvas.nativeElement;
    const canvasRect = canvas.getBoundingClientRect();

    let { x1, y1, x2, y2 } = this.cropPosition;

    // Apply resize based on handle
    switch (this.resizeHandle) {
      case 'tl':
        x1 = Math.min(x1 + deltaX, x2 - (this.options.minWidth || 50));
        y1 = Math.min(y1 + deltaY, y2 - (this.options.minHeight || 50));
        break;
      case 'tr':
        x2 = Math.max(x2 + deltaX, x1 + (this.options.minWidth || 50));
        y1 = Math.min(y1 + deltaY, y2 - (this.options.minHeight || 50));
        break;
      case 'bl':
        x1 = Math.min(x1 + deltaX, x2 - (this.options.minWidth || 50));
        y2 = Math.max(y2 + deltaY, y1 + (this.options.minHeight || 50));
        break;
      case 'br':
        x2 = Math.max(x2 + deltaX, x1 + (this.options.minWidth || 50));
        y2 = Math.max(y2 + deltaY, y1 + (this.options.minHeight || 50));
        break;
    }

    // Ensure x1 <= x2 and y1 <= y2
    if (x1 > x2) [x1, x2] = [x2, x1];
    if (y1 > y2) [y1, y2] = [y2, y1];

    // Ensure min/max width/height
    const width = x2 - x1;
    const height = y2 - y1;

    if (this.options.minWidth && width < this.options.minWidth) {
      if (this.resizeHandle === 'tl' || this.resizeHandle === 'bl') {
        x1 = x2 - this.options.minWidth;
      } else {
        x2 = x1 + this.options.minWidth;
      }
    }

    if (this.options.minHeight && height < this.options.minHeight) {
      if (this.resizeHandle === 'tl' || this.resizeHandle === 'tr') {
        y1 = y2 - this.options.minHeight;
      } else {
        y2 = y1 + this.options.minHeight;
      }
    }

    if (this.options.maxWidth && width > this.options.maxWidth) {
      if (this.resizeHandle === 'tl' || this.resizeHandle === 'bl') {
        x1 = x2 - this.options.maxWidth;
      } else {
        x2 = x1 + this.options.maxWidth;
      }
    }

    if (this.options.maxHeight && height > this.options.maxHeight) {
      if (this.resizeHandle === 'tl' || this.resizeHandle === 'tr') {
        y1 = y2 - this.options.maxHeight;
      } else {
        y2 = y1 + this.options.maxHeight;
      }
    }

    // Maintain aspect ratio if needed
    if (this.options.aspectRatio) {
      const aspectRatio = this.options.aspectRatio;
      const newWidth = x2 - x1;
      const newHeight = y2 - y1;

      if (newWidth / newHeight !== aspectRatio) {
        // Adjust based on which handle is being dragged
        switch (this.resizeHandle) {
          case 'tl':
            y1 = y2 - newWidth / aspectRatio;
            break;
          case 'tr':
            y1 = y2 - newWidth / aspectRatio;
            break;
          case 'bl':
            y2 = y1 + newWidth / aspectRatio;
            break;
          case 'br':
            y2 = y1 + newWidth / aspectRatio;
            break;
        }
      }
    }

    // Ensure crop area stays within canvas
    x1 = Math.max(0, x1);
    y1 = Math.max(0, y1);
    x2 = Math.min(canvasRect.width, x2);
    y2 = Math.min(canvasRect.height, y2);

    this.cropPosition = { x1, y1, x2, y2 };
    this.cropMove.emit(this.cropPosition);
  }

  onResizeHandleMouseUp(): void {
    this.onResizeHandleEnd();
    this.removeEventListeners();
  }

  onResizeHandleEnd(): void {
    if (!this.isCropping) return;

    this.isCropping = false;
    this.resizeHandle = null;
    this.publishCropData();
    this.cropEnd.emit(this.getCropperResult());
  }

  private removeEventListeners(): void {
    if (this.mouseMoveListener) this.mouseMoveListener();
    if (this.mouseUpListener) this.mouseUpListener();
    if (this.touchMoveListener) this.touchMoveListener();
    if (this.touchEndListener) this.touchEndListener();
  }

  private publishCropData(): void {
    const result = this.getCropperResult();
    this.cropperService.publishCropperResult(result);
  }

  private getCropperResult(): CropperResult {
    const canvas = this.cropperCanvas.nativeElement;
    const canvasRect = canvas.getBoundingClientRect();
    const img = this.sourceImage.nativeElement;

    const scaleX = this.imageWidth / img.width;
    const scaleY = this.imageHeight / img.height;

    const width = this.cropPosition.x2 - this.cropPosition.x1;
    const height = this.cropPosition.y2 - this.cropPosition.y1;

    // Get crop data in original image coordinates
    const cropData = {
      x: this.cropPosition.x1 * scaleX,
      y: this.cropPosition.y1 * scaleY,
      width: width * scaleX,
      height: height * scaleY,
      rotate: 0,
      scaleX: 1,
      scaleY: 1,
    };

    // Create canvas for cropped image
    const cropCanvas = document.createElement('canvas');
    cropCanvas.width = cropData.width;
    cropCanvas.height = cropData.height;

    const ctx = cropCanvas.getContext('2d');

    if (ctx) {
      ctx.drawImage(
        img,
        cropData.x,
        cropData.y,
        cropData.width,
        cropData.height,
        0,
        0,
        cropData.width,
        cropData.height,
      );
    }

    // Generate blob and data URL
    let blob: Blob | undefined;
    let dataUrl: string | undefined;

    try {
      dataUrl = cropCanvas.toDataURL('image/png');

      cropCanvas.toBlob((b) => {
        if (b) blob = b;
      }, 'image/png');
    } catch (error) {
      console.error('Error generating crop data', error);
    }

    return {
      imageData: {
        left: 0,
        top: 0,
        width: this.imageWidth,
        height: this.imageHeight,
        naturalWidth: this.imageWidth,
        naturalHeight: this.imageHeight,
        aspectRatio: this.imageWidth / this.imageHeight,
        rotate: 0,
        scaleX: 1,
        scaleY: 1,
      },
      cropBoxData: {
        left: this.cropPosition.x1,
        top: this.cropPosition.y1,
        width: width,
        height: height,
      },
      canvasData: {
        left: 0,
        top: 0,
        width: canvasRect.width,
        height: canvasRect.height,
        naturalWidth: this.imageWidth,
        naturalHeight: this.imageHeight,
      },
      cropData,
      blob,
      dataUrl,
    };
  }
}
