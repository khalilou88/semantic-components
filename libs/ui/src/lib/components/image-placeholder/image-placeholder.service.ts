// image-placeholder.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagePlaceholderService {
  generatePlaceholder(width: number, height: number, text?: string): string {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Background
      ctx.fillStyle = '#E0E0E0';
      ctx.fillRect(0, 0, width, height);

      // Text
      ctx.fillStyle = '#888';
      ctx.font = `${Math.min(width, height) / 10}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const displayText = text ?? `${width}x${height}`;
      ctx.fillText(displayText, width / 2, height / 2);
    }

    return canvas.toDataURL();
  }
}
