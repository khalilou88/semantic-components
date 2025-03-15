import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScScrollBar } from './scroll-bar';

@Component({
  selector: 'sc-scroll-area',
  imports: [ScScrollBar, CommonModule],
  template: `
    <div class="relative overflow-hidden" [class]="class()">
      <div class="h-full w-full rounded-[inherit]" #viewport>
        <ng-content></ng-content>
      </div>

      <sc-scroll-bar [orientation]="'vertical'" [viewportEl]="viewportEl"></sc-scroll-bar>
      <sc-scroll-bar [orientation]="'horizontal'" [viewportEl]="viewportEl"></sc-scroll-bar>

      <div class="absolute bottom-0 right-0 h-2.5 w-2.5"></div>
      <!-- Corner element -->
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScScrollArea {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  @ViewChild('viewport') viewportEl!: ElementRef<HTMLDivElement>;
}
