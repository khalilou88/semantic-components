import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-podcast-empty-placeholder',
  imports: [],
  template: `
    <div
      class="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed"
    >
      <div class="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <i class="podcast-icon h-10 w-10 text-muted-foreground"></i>
        <h3 class="mt-4 text-lg font-semibold">No episodes added</h3>
        <p class="mb-4 mt-2 text-sm text-muted-foreground">
          You have not added any podcasts. Add one below.
        </p>
        <button
          class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <i class="plus-circle-icon mr-2"></i>
          Add Podcast
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PodcastEmptyPlaceholder {}
