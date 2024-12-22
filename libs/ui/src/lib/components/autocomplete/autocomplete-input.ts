import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { SvgSearchIcon } from '@semantic-icons/lucide-icons';
import { debounceTime } from 'rxjs';

import { cn } from '../../utils';

@Component({
  selector: 'sc-autocomplete-input',
  imports: [SvgSearchIcon, ReactiveFormsModule],
  template: `
    <svg-search-icon class="mr-2 size-4 shrink-0 opacity-50" />
    <input
      class="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      [placeholder]="placeholder()"
      [formControl]="searchControl"
    />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAutocompleteInput implements OnInit {
  destroyRef = inject(DestroyRef);

  class = input<string>('');

  classes = computed(() => cn('flex items-center border-b px-3', this.class()));

  placeholder = input('');

  searchControl = new FormControl();

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
      .subscribe((term) => this.search(term));
  }

  search(value: string) {
    console.log(value);
    // this.options = this.originalOptions.filter(
    //   option => option[this.labelKey].includes(value)
    // );
  }
}
