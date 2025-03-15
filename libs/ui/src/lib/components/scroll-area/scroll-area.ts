import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScScrollBar } from './scroll-bar';

@Component({
  selector: 'div[sc-scroll-area]',
  imports: [ScScrollBar, CommonModule],
  template: `
    <div class="h-full w-full rounded-[inherit]" #viewport>
      <ng-content></ng-content>
    </div>

    <sc-scroll-bar [viewportElement]="viewport" orientation="vertical"></sc-scroll-bar>

    <sc-scroll-bar [viewportElement]="viewport" orientation="horizontal"></sc-scroll-bar>

    <div class="absolute bottom-0 right-0 h-2.5 w-2.5"></div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScScrollArea implements AfterViewInit {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('relative overflow-hidden', this.classInput()));

  @ViewChild('viewport') viewport!: ElementRef<HTMLDivElement>;

  show = signal(false);

  ngAfterViewInit() {
    this.show.set(true);
    console.log(this.viewport);
  }
}
