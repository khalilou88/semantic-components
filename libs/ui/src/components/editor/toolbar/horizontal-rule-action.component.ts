import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ExtensionsService } from '../extensions.service';

@Component({
  selector: 'sc-horizontal-rule-action',
  imports: [ScTooltip],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      (click)="setHorizontalRule()"
      type="button"
      smaTooltip="Toggle Horizontal Rule"
    >
      <svg
        class="size-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 12h14" />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          d="M6 9.5h12m-12 9h12M6 7.5h12m-12 9h12M6 5.5h12m-12 9h12"
        />
      </svg>
      <span class="sr-only">Toggle Horizontal Rule</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalRuleActionComponent {
  private readonly parent = inject(ScEditor, { host: true });

  extensionsService = inject(ExtensionsService);

  constructor() {
    this.extensionsService.horizontalRule.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  setHorizontalRule() {
    this.editor.chain().focus().setHorizontalRule().run();
  }
}
