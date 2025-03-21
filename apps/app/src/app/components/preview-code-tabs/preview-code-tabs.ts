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
          <div class="bg-card text-card-foreground rounded-md border border-border p-6 h-full">
            <ng-content />
          </div>
        </div>
        <div
          class="py-4 data-[state=inactive]:hidden"
          [attr.data-state]="activeTab() === 'tab2' ? 'active' : 'inactive'"
          data-tab-content="tab2"
        >
          <sc-code-highlighter [code]="code()" language="angular-ts" />
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

  protected readonly activeTab = signal<'tab1' | 'tab2'>('tab1');
}
