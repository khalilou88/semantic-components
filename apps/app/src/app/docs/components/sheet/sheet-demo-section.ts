import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { SheetDemo } from './sheet-demo';

@Component({
  selector: 'app-sheet-demo-section',
  imports: [SheetDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-sheet-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  inject,
  viewChild,
} from '@angular/core';

import {
  ScButton,
  ScCardDescription,
  ScCardFooter,
  ScCardHeader,
  ScCardTitle,
  ScInput,
  ScLabel,
  ScSheet,
  ScSheetClose,
  ScSheetConfig,
  ScSheetManager,
} from '@semantic-components/ui';
import { SiXIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-sheet-demo',
  imports: [
    ScButton,
    ScSheet,
    ScCardHeader,
    ScCardFooter,
    ScInput,
    ScLabel,
    ScCardTitle,
    ScCardDescription,
    ScSheetClose,
    SiXIcon,
  ],
  template: \`
    <div class="flex items-center justify-center">
      <button (click)="openSheet()" sc-button variant="outline">Open</button>
    </div>

    <ng-template #sheet>
      <div sc-sheet>
        <button sc-sheet-close>
          <svg class="size-4" si-x-icon></svg>
          <span class="sr-only">Close</span>
        </button>

        <div sc-card-header>
          <h2 sc-card-title>Edit profile</h2>
          <p sc-card-description>Make changes to your profile here. Click save when you're done.</p>
        </div>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <label class="text-right" sc-label for="name">Name</label>
            <input class="col-span-3" id="name" sc-input value="Pedro Duarte" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <label class="text-right" sc-label for="username">Username</label>
            <input class="col-span-3" id="username" sc-input value="@peduarte" />
          </div>
        </div>
        <div sc-card-footer>
          <button sc-button type="submit">Save changes</button>
        </div>
      </div>
    </ng-template>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetDemo {
  private readonly scSheetManager = inject(ScSheetManager);

  private readonly sheetRef = viewChild.required<TemplateRef<unknown>>('sheet');

  openSheet() {
    const config = new ScSheetConfig();
    config.side = 'right';
    config.width = '300';

    this.scSheetManager.open(this.sheetRef(), config);
  }
}`;
}
