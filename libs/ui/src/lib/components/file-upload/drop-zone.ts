import { Directive, computed, input, signal } from '@angular/core';

import { cn } from '@semantic-components/utils';

@Directive({
  selector: '[scDropZone]',
  exportAs: 'scDropZone',
  host: {
    '[class]': '_class()',
    '(dragover)': 'handleDragOver($event)',
    '(dragleave)': 'handleDragLeave($event)',
  },
})
export class ScDropZone {
  readonly isDragActive = signal(false);

  readonly isDisabled = input(false);

  readonly class = input<string>('');

  protected readonly _class = computed(() =>
    cn(
      'group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25',
      'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.isDragActive() && 'border-muted-foreground/50',
      this.isDisabled() && 'pointer-events-none opacity-60',
      this.class(),
    ),
  );

  handleDragOver(event: DragEvent) {
    if (this.isDisabled()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.isDragActive.set(true);
    }
  }

  handleDragLeave(event: DragEvent) {
    if (this.isDisabled()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.isDragActive.set(false);
    }
  }
}
