import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CropperOptions, CropperResult, ScImageCropper } from '@semantic-components/image-cropper';
import { ScScrollToTop } from '@semantic-components/ui';

@Component({
  imports: [RouterOutlet, ScImageCropper, CommonModule],
  selector: 'app-root',
  template: `
    <sc-image-cropper
      [imageUrl]="imageUrl"
      [options]="cropperOptions"
      (cropEnd)="onCropEnd($event)"
      (ready)="onCropperReady()"
    ></sc-image-cropper>

    <div *ngIf="croppedImage">
      <h3>Cropped Image</h3>
      <img [src]="croppedImage" alt="Cropped image" />
    </div>

    <router-outlet />
  `,

  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  private readonly scrollToTop = inject(ScScrollToTop);

  private readonly document = inject<Document>(DOCUMENT);

  private readonly classList = signal([
    // 'min-h-screen',
    'bg-background',
    'font-sans',
    'antialiased',
  ]);

  ngOnInit() {
    this.document.body.classList.add(...this.classList());
    this.scrollToTop.init();
  }

  imageUrl = 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80';

  croppedImage: string | undefined;

  cropperOptions: CropperOptions = {
    aspectRatio: 1, // 1:1 ratio
    resizable: true,
    movable: true,
    minWidth: 100,
    minHeight: 100,
    autoCrop: true,
    autoCropArea: 0.8,
    responsive: true,
    guides: true,
  };

  onCropEnd(result: CropperResult): void {
    this.croppedImage = result.dataUrl;
    // You can also use result.blob for further processing
  }

  onCropperReady(): void {
    console.log('Cropper is ready');
  }
}
