import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
    <div class="w-full py-6 px-4">
      <div class="mb-4">
        <h3 class="px-2 mb-2 text-lg font-semibold">Getting Started</h3>
        <div class="space-y-1">
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium bg-accent text-accent-foreground"
            href="#"
          >
            Introduction
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Installation
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Typography
          </a>
        </div>
      </div>
      <div class="mb-4">
        <h3 class="px-2 mb-2 text-lg font-semibold">Components</h3>
        <div class="space-y-1">
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Accordion
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Alert
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Button
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Card
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Dialog
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Dropdown Menu
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Form
          </a>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {}
