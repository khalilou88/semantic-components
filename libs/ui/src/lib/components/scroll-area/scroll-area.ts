import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'div[sc-scroll-area]',
  imports: [CommonModule],
  template: `
    <div class="relative">
      <div
        class="overflow-auto scroll-smooth"
        [ngClass]="[
          height,
          width,
          rounded ? 'rounded-md' : '',
          bordered ? 'border border-gray-200 dark:border-gray-800' : '',
          scrollbarClasses,
        ]"
      >
        <div class="h-full w-full">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: `
    .scrollbar-fancy::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    .scrollbar-fancy::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .scrollbar-fancy::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    .scrollbar-fancy::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.3);
    }

    .dark .scrollbar-fancy::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
    }

    .dark .scrollbar-fancy::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
    }

    .dark .scrollbar-fancy::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .scrollbar-hidden::-webkit-scrollbar {
      display: none;
    }

    .scrollbar-hidden {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScScrollArea {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block', this.classInput()));

  @Input() height = 'h-64';
  @Input() width = 'w-full';
  @Input() rounded = true;
  @Input() bordered = true;
  @Input() scrollbarStyle: 'default' | 'fancy' | 'hidden' = 'default';

  get scrollbarClasses(): string {
    switch (this.scrollbarStyle) {
      case 'fancy':
        return 'scrollbar-fancy';
      case 'hidden':
        return 'scrollbar-hidden';
      default:
        return '';
    }
  }
}
