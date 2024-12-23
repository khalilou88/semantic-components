import { AfterContentInit, Directive, ElementRef, booleanAttribute, input } from '@angular/core';

@Directive({
  selector: '[scAutoFocus]',
})
export class ScAutoFocus implements AfterContentInit {
  scAutoFocus = input<boolean, unknown>(false, { transform: booleanAttribute });

  public constructor(private el: ElementRef) {}

  public ngAfterContentInit() {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 100);
  }
}
