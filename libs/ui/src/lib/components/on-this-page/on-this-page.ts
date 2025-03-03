import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-on-this-page',
  imports: [],
  template: `
    <div
      class="sticky top-8 self-start w-48 max-h-[90vh] overflow-y-auto p-3 bg-gray-50 rounded-lg shadow-sm"
    >
      <h4 class="text-sm font-medium text-gray-500 uppercase mb-3">On This Page</h4>
      <!-- Rest of the implementation -->
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOnThisPage {}
