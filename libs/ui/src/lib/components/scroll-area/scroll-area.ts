import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { NgScrollbarModule, ScrollbarVisibility } from 'ngx-scrollbar';

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
  private host = inject(ElementRef);

  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  visibility = input<ScrollbarVisibility>('native');

  //TODO remove use of ngAfterViewInit
  ngAfterViewInit() {
    const height = this.host.nativeElement.scrollHeight;

    console.log(height);
  }
}
