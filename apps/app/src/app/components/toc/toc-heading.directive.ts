import { Directive, ElementRef, Input } from '@angular/core';

import { TocService } from './toc.service';

@Directive({
  selector: '[tocHeading]',
})
export class TocHeadingDirective {
  @Input() tocLevel?: number;

  constructor(
    private readonly el: ElementRef,
    private readonly tocService: TocService,
  ) {}

  get element(): HTMLElement {
    return this.el.nativeElement;
  }

  get level(): number {
    if (this.tocLevel !== undefined) {
      return this.tocLevel;
    }
    return parseInt(this.element.tagName.substr(1), 10);
  }

  get text(): string {
    return this.element.textContent?.trim() || '';
  }

  get id(): string {
    return this.element.id;
  }
}
