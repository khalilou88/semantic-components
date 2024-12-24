import {
  AfterContentInit,
  Directive,
  ElementRef,
  booleanAttribute,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[scAutoFocus]',
})
export class ScAutoFocus implements AfterContentInit {
  private readonly el = inject(ElementRef);

  scAutoFocus = input<boolean, unknown>(false, { transform: booleanAttribute });

  public ngAfterContentInit() {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 100);
  }
}
