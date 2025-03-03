import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  template: `
    <div class="menu-container flex h-14 items-center px-4">
      <nav class="flex items-center space-x-4 lg:space-x-6">
        @for (item of menuItems; track item; let i = $index) {
          <button
            class="menu-item text-sm font-medium transition-colors hover:text-primary"
            [class.text-muted-foreground]="!item.active"
            (click)="setActive(i)"
          >
            {{ item.label }}
          </button>
        }
      </nav>
      <div class="ml-auto flex items-center space-x-4">
        <button class="search-button">
          <i class="search-icon"></i>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  menuItems = [
    { label: 'Listen Now', active: true },
    { label: 'Browse', active: false },
    { label: 'Radio', active: false },
  ];

  setActive(index: number): void {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
  }
}
