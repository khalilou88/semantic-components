import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  booleanAttribute,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: 'button[sc-cursor], a[sc-cursor]',
})
export class ScCursor implements OnInit {
  private readonly isPlatformBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly hostRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  ngOnInit() {
    if (this.isPlatformBrowser) {
      if (!this.disabled()) {
        this.renderer.addClass(this.hostRef.nativeElement, 'cursor-pointer');
      }
    }
  }
}
