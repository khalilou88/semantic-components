import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-inline-animation',
  imports: [CommonModule],
  template: `
    <div class="space-y-4">
      <div
        *ngFor="let item of items; let i = index"
        [class]="getItemClasses(i)"
        (transitionend)="onTransitionEnd(i)"
      >
        <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow">
          <span>{{ item.text }}</span>
          <button
            class="ml-4 p-2 text-red-500 hover:text-red-700 transition-colors"
            (click)="removeItem(i)"
          >
            Remove
          </button>
        </div>
      </div>
      <button
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        (click)="addItem()"
      >
        Add Item
      </button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineAnimation {
  items: { text: string; exiting: boolean }[] = [
    { text: 'Item 1', exiting: false },
    { text: 'Item 2', exiting: false },
    { text: 'Item 3', exiting: false },
  ];

  pendingRemovals: number[] = [];

  getItemClasses(index: number) {
    return this.items[index].exiting
      ? 'transform transition-all duration-300 ease-in-out opacity-0 -translate-x-full h-0 overflow-hidden'
      : 'transform transition-all duration-300 ease-in-out opacity-100 translate-x-0';
  }

  addItem() {
    this.items.push({ text: `Item ${this.items.length + 1}`, exiting: false });
  }

  removeItem(index: number) {
    this.items[index].exiting = true;
    this.pendingRemovals.push(index);
  }

  onTransitionEnd(index: number) {
    if (this.pendingRemovals.includes(index)) {
      this.items = this.items.filter((_, i) => i !== index);
      this.pendingRemovals = this.pendingRemovals.filter((i) => i !== index);

      // Adjust indices of pending removals greater than the removed index
      this.pendingRemovals = this.pendingRemovals.map((i) => (i > index ? i - 1 : i));
    }
  }
}
