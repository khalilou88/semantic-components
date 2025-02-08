import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  PLATFORM_ID,
  Renderer2,
  booleanAttribute,
  effect,
  inject,
  input,
} from '@angular/core';

@Directive()
export class ScCursorPointer {
  private readonly isPlatformBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly hostRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  constructor() {
    effect(() => {
      if (this.isPlatformBrowser) {
        if (this.disabled()) {
          if (this.hostRef.nativeElement.classList.contains('cursor-pointer')) {
            this.renderer.removeClass(this.hostRef.nativeElement, 'cursor-pointer');
          }
        } else {
          this.renderer.addClass(this.hostRef.nativeElement, 'cursor-pointer');
        }
      }
    });
  }
}
