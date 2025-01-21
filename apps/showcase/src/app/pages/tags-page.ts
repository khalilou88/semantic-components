import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScTags } from '@semantic-components/ui';

@Component({
  selector: 'app-tags-page',
  imports: [ScTags],
  template: `
    <div class="max-w-md mx-auto p-4">
      <sc-tags
        [(tags)]="myTags"
        [maxTags]="5"
        [minLength]="2"
        [maxLength]="15"
        placeholder="Enter tags..."
        helperText="Press enter or comma to add tags"
      ></sc-tags>

      <div class="mt-4">Selected tags: {{ myTags.join(', ') }}</div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TagsPage {
  myTags: string[] = ['angular', 'tailwind'];
}
