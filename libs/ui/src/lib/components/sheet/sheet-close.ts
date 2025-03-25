import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScSheetManager } from './sheet-manager';

@Component({
  selector: 'button[sc-sheet-close]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    '[attr.data-state]': 'state()',
    '(click)': 'close()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSheetClose {
  private readonly scSheetManager = inject(ScSheetManager);

  readonly state = computed<'open' | 'closed'>(() => {
    return this.scSheetManager.state();
  });

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
      this.classInput(),
    ),
  );

  protected close() {
    this.scSheetManager.state.set('closed');
  }
}
