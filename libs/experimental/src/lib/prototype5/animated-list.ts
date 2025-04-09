import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

interface AnimatedItem {
  id: number;
  text: string;
  state: 'entering' | 'visible' | 'exiting';
}

@Component({
  selector: 'lib-animated-list',
  imports: [],
  template: `
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-xl font-bold mb-4">Animated List</h2>

      <div class="mb-4 space-y-2">
        @for (item of visibleItems; track trackById($index, item)) {
          <div
            [class]="
              'transform transition-all duration-300 ease-in-out overflow-hidden ' +
              (item.state === 'entering'
                ? 'opacity-0 -translate-x-4 max-h-0'
                : item.state === 'visible'
                  ? 'opacity-100 translate-x-0 max-h-20'
                  : item.state === 'exiting'
                    ? 'opacity-0 translate-x-4 max-h-0'
                    : '')
            "
            (transitionend)="onTransitionEnd(item)"
          >
            <div class="flex justify-between items-center p-3 bg-white rounded shadow">
              <span>{{ item.text }}</span>
              <button
                class="ml-4 p-1 text-red-500 hover:text-red-700 transition-colors"
                (click)="removeItem(item.id)"
              >
                Remove
              </button>
            </div>
          </div>
        }
      </div>

      <div class="flex space-x-3">
        <button
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          (click)="addItem()"
        >
          Add Item
        </button>
        <button
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          [disabled]="visibleItems.length === 0"
          (click)="removeAll()"
        >
          Remove All
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedList implements OnInit {
  allItems: AnimatedItem[] = [];
  visibleItems: AnimatedItem[] = [];
  nextId = 1;

  ngOnInit() {
    // Initialize with some items
    for (let i = 0; i < 3; i++) {
      this.addItem();
    }
  }

  addItem() {
    const newItem: AnimatedItem = {
      id: this.nextId++,
      text: `Item ${this.nextId - 1}`,
      state: 'entering',
    };

    this.allItems.push(newItem);
    this.visibleItems.push(newItem);

    // Start enter animation after a brief delay
    setTimeout(() => {
      newItem.state = 'visible';
    }, 50);
  }

  removeItem(id: number) {
    const item = this.allItems.find((item) => item.id === id);
    if (item) {
      item.state = 'exiting';
    }
  }

  removeAll() {
    this.visibleItems.forEach((item) => {
      item.state = 'exiting';
    });
  }

  onTransitionEnd(item: AnimatedItem) {
    if (item.state === 'exiting') {
      this.visibleItems = this.visibleItems.filter((i) => i.id !== item.id);
    }
  }

  trackById(index: number, item: AnimatedItem) {
    return item.id;
  }
}
