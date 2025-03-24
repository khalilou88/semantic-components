import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  TemplateRef,
  ViewEncapsulation,
  computed,
  contentChild,
  inject,
  input,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { cn } from '@semantic-components/utils';
import { filter, fromEvent, map, of, switchMap } from 'rxjs';

import { ScCollapsibleState } from './collapsible-state';

@Component({
  selector: 'sc-collapsible-content',
  imports: [],
  template: `
    @if (contentShown()) {
      <!-- We need to constrain the size of the child to the size of the grid row to ensure the height animation works correctly  -->
      <div class="overflow-hidden">
        @if (template(); as lazy) {
          <ng-container *ngTemplateOutlet="lazy" />
        }
        <ng-content />
      </div>
    }
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCollapsibleContent {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] ease-[ease-in-out] duration-[var(--duration,300ms)]',
      this.open() && 'grid-rows-[1fr] opacity-100',
      this.classInput(),
    ),
  );

  private readonly el = inject(ElementRef).nativeElement;

  readonly template = contentChild<TemplateRef<unknown>>('collapsibleContent');

  private readonly state = inject(ScCollapsibleState);

  readonly open = computed(() => this.state.open());

  readonly contentShown = toSignal(
    toObservable(this.open).pipe(
      switchMap((open) =>
        open
          ? of(true)
          : fromEvent<TransitionEvent>(this.el, 'transitionend').pipe(
              filter(
                (e) => e.target === e.currentTarget && e.propertyName === 'grid-template-rows',
              ),
              map(() => false),
            ),
      ),
    ),
  );
}
