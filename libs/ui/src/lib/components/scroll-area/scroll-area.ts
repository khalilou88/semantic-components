import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { NgScrollbarModule, ScrollbarVisibility } from 'ngx-scrollbar';

import { cn } from '../../utils';

@Component({
  selector: 'div[sc-scroll-area]',
  imports: [NgScrollbarModule],
  template: `
    <ng-scrollbar
      [visibility]="visibility()"
      [style]="{
        '--scrollbar-border-radius': '100px',
        '--scrollbar-padding': '1px',
        '--scrollbar-thumb-color': 'hsl(var(--border))',
        '--scrollbar-thumb-hover-color': 'hsl(var(--border))',
        '--scrollbar-size': '7px',
      }"
    >
      <ng-content />
    </ng-scrollbar>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScScrollArea implements AfterViewInit {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  visibility = input<ScrollbarVisibility>('native');

  constructor(private host: ElementRef) {}

  ngAfterViewInit() {
    const height = this.host.nativeElement.scrollHeight;

    console.log(height);
  }
}
