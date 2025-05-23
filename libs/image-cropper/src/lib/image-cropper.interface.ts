export interface CropperOptions {
  aspectRatio?: number; // width / height
  resizable?: boolean;
  movable?: boolean;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  viewMode?: number; // 0, 1, 2, 3
  responsive?: boolean;
  guides?: boolean;
  center?: boolean;
  highlight?: boolean;
  background?: boolean;
  autoCrop?: boolean;
  autoCropArea?: number; // 0-1
  dragMode?: 'crop' | 'move' | 'none';
  cropBoxMovable?: boolean;
  cropBoxResizable?: boolean;
  zoomable?: boolean;
  zoomOnTouch?: boolean;
  zoomOnWheel?: boolean;
}

export interface CropperResult {
  imageData: {
    left: number;
    top: number;
    width: number;
    height: number;
    naturalWidth: number;
    naturalHeight: number;
    aspectRatio: number;
    rotate: number;
    scaleX: number;
    scaleY: number;
  };
  cropBoxData: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  canvasData: {
    left: number;
    top: number;
    width: number;
    height: number;
    naturalWidth: number;
    naturalHeight: number;
  };
  cropData: {
    x: number;
    y: number;
    width: number;
    height: number;
    rotate: number;
    scaleX: number;
    scaleY: number;
  };
  blob?: Blob;
  dataUrl?: string;
}

export interface CropperPosition {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
