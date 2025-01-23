import { Component, Input, OnChanges } from '@angular/core';

import { ImagePlaceholderService } from './image-placeholder.service';

@Component({
  selector: 'sc-image-placeholder',
  template: `
    <img
      class="object-cover"
      [src]="placeholderSrc"
      [width]="width"
      [height]="height"
      [alt]="alt || 'Placeholder'"
    />
  `,
})
export class ScImagePlaceholder implements OnChanges {
  @Input() width = 300;
  @Input() height = 200;
  @Input() alt = '';
  @Input() text = '';

  placeholderSrc: string;

  constructor(private readonly placeholderService: ImagePlaceholderService) {
    this.placeholderSrc = this.placeholderService.generatePlaceholder(this.width, this.height);
  }

  ngOnChanges() {
    this.placeholderSrc = this.placeholderService.generatePlaceholder(
      this.width,
      this.height,
      this.text,
    );
  }
}
