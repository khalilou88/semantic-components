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
        <div class="p-4 data-[state=inactive]:hidden" data-state="active" data-tab-content="tab1">
          <p>This is the Account tab content.</p>
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
