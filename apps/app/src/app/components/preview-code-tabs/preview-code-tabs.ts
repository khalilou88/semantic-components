import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-preview-code-tabs',
  imports: [],
  template: `
    <div class="space-y-4">
      <h2 class="text-lg font-semibold">Tabs</h2>
      <div class="w-full">
        <div class="flex border-b border-border">
          <button
            class="px-4 py-2 text-sm font-medium transition-all border-b-2 border-primary data-[state=inactive]:border-transparent data-[state=inactive]:text-muted-foreground"
            data-state="active"
            data-tab="tab1"
          >
            Preview
          </button>
          <button
            class="px-4 py-2 text-sm font-medium transition-all border-b-2 border-transparent data-[state=active]:border-primary text-muted-foreground data-[state=active]:text-foreground"
            data-state="inactive"
            data-tab="tab2"
          >
            Code
          </button>
        </div>
        <div class="py-4 data-[state=inactive]:hidden" data-state="active" data-tab-content="tab1">
          <div class="relative">
            <pre
              class="text-sm overflow-x-auto rounded-lg border bg-background px-4 py-3 font-mono text-card-foreground whitespace-pre-wrap break-words"
            >
            <ng-content />
          </pre>
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
        <div class="p-4 data-[state=inactive]:hidden" data-state="inactive" data-tab-content="tab2">
          <p>This is the Password tab content.</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewCodeTabs {}
