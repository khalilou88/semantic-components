import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { AnimatedOverlayService } from './service';

@Component({
  selector: 'lib-overlay-example',
  imports: [],
  template: `
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
      (click)="openDialog()"
    >
      Open Dialog with overlay
    </button>

    @if (result !== null) {
      <div class="mt-4 p-4 bg-gray-100 rounded">
        Result: {{ result ? 'Confirmed' : 'Cancelled' }}
      </div>
    }
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayExample {
  private readonly animatedOverlay = inject(AnimatedOverlayService);

  result: boolean | null = null;

  async openDialog() {
    this.result = await this.animatedOverlay.open({
      title: 'Confirm Action',
      content: 'Are you sure you want to proceed with this action?',
    });
  }
}
