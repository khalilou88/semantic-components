import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'div[sc-scroll-area]',
  imports: [CommonModule],
  template: `
    <div class="h-full w-full">
      <ng-content />
    </div>
  `,
  host: {
    '[class]': 'class()',
    '(mouseover)': 'mouseover()',
    '(mouseout)': 'mouseout()',
  },
  styles: `
    .scrollbar-custom::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    .scrollbar-custom::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .scrollbar-custom::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    .scrollbar-custom::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.3);
    }

    .dark .scrollbar-custom::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
    }

    .dark .scrollbar-custom::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
    }

    .dark .scrollbar-custom::-webkit-scrollbar-thumb:hover {
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

  protected readonly class = computed(() =>
    cn(
      'relative',
      'overflow-auto scroll-smooth',
      this.state() === 'visible' && 'scrollbar-custom',
      this.state() === 'hidden' && 'scrollbar-hidden',
      this.classInput(),
    ),
  );

  private readonly state = signal<'visible' | 'hidden'>('hidden');

  protected mouseover() {
    this.state.set('visible');
  }

  protected mouseout() {
    this.state.set('hidden');
  }
}
