import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AnimatedOverlayService } from './service';

@Component({
  selector: 'lib-overlay-example',
  imports: [CommonModule],
  template: `
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
      (click)="openDialog()"
    >
      Open Dialog with overlay
    </button>

    <div class="mt-4 p-4 bg-gray-100 rounded" *ngIf="result !== null">
      Result: {{ result ? 'Confirmed' : 'Cancelled' }}
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayExample {
  result: boolean | null = null;

  constructor(private readonly animatedOverlay: AnimatedOverlayService) {}

  async openDialog() {
    this.result = await this.animatedOverlay.open({
      title: 'Confirm Action',
      content: 'Are you sure you want to proceed with this action?',
    });
  }
}
