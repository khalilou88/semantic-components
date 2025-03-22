import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

import { ScCodeHighlighter } from '@semantic-components/ui';

@Component({
  selector: 'app-preview-code-tabs',
  imports: [ScCodeHighlighter],
  template: `
    <div class="space-y-4">
      @if (title()) {
        <h2 class="text-lg font-semibold">{{ title() }}</h2>
      }
      <div class="w-full">
        <div class="flex border-b border-border">
          <button
            class="px-4 py-2 text-sm font-medium transition-all border-b-2 border-primary data-[state=inactive]:border-transparent data-[state=inactive]:text-muted-foreground"
            [attr.data-state]="activeTab() === 'tab1' ? 'active' : 'inactive'"
            (click)="activeTab.set('tab1')"
            data-tab="tab1"
          >
            Preview
          </button>
          <button
            class="px-4 py-2 text-sm font-medium transition-all border-b-2 border-transparent data-[state=active]:border-primary text-muted-foreground data-[state=active]:text-foreground"
            [attr.data-state]="activeTab() === 'tab2' ? 'active' : 'inactive'"
            (click)="activeTab.set('tab2')"
            data-tab="tab2"
          >
            Code
          </button>
        </div>
        <div
          class="py-4 data-[state=inactive]:hidden"
          [attr.data-state]="activeTab() === 'tab1' ? 'active' : 'inactive'"
          data-tab-content="tab1"
        >
          <div class="bg-card text-card-foreground rounded-lg border border-border shadow-sm p-6">
            <ng-content />
          </div>
        </div>
        <div
          class="py-4 data-[state=inactive]:hidden"
          [attr.data-state]="activeTab() === 'tab2' ? 'active' : 'inactive'"
          data-tab-content="tab2"
        >
          <div class="relative">
            <div
              class="bg-card text-card-foreground rounded-lg border border-border shadow-sm p-6 overflow-x-auto"
            >
              <sc-code-highlighter [code]="code()" language="angular-ts" />
            </div>
            <button
              class="absolute top-2 right-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-secondary-foreground h-6 w-6"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewCodeTabs {
  readonly title = input<string>('');

  readonly code = input<string>('');

  readonly activeTab = signal<'tab1' | 'tab2'>('tab1');
}
