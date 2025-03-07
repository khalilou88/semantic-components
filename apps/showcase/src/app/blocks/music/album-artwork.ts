import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-album-artwork',
  imports: [CommonModule],
  template: `
    <div class="space-y-3" [ngClass]="class()">
      <div class="overflow-hidden rounded-md">
        <img
          class="object-cover transition-all hover:scale-105 aspect-{{ aspectRatio() }}"
          [src]="album().cover"
          [alt]="album().name"
          [width]="width()"
          [height]="height()"
        />
      </div>
      <div class="space-y-1 text-sm">
        <h3 class="font-medium leading-none">{{ album().name }}</h3>
        <p class="text-xs text-muted-foreground">{{ album().artist }}</p>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumArtwork {
  readonly album = input<any>();
  readonly aspectRatio = input<'portrait' | 'square'>('portrait');
  readonly width = input(250);
  readonly height = input(330);
  readonly class = input('');
}
