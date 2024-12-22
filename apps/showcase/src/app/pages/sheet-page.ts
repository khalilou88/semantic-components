import {
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
  ScSheetConfig,
  ScSheetTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sheet-page',
  imports: [
    ScButton,
    ScSheet,
    ScCardHeader,
    ScCardFooter,
    ScInput,
    ScLabel,
    ScCardTitle,
    ScCardDescription,
  ],
  template: `
    <ng-template>
      <div sc-sheet>
        <div sc-card-header>
          <h2 sc-card-title>Edit profile</h2>
          <p sc-card-description>
            Make changes to your profile here. Click save when you're done.
          </p>
        <div>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <label sc-label for="name" class="text-right">Name</label>
            <input sc-input id="name" value="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <label sc-label for="username" class="text-right">Username</label>
            <input sc-input id="username" value="@peduarte" class="col-span-3" />
          </div>
        </div>
        <div sc-card-footer>
            <button sc-button type="submit">Save changes</button>
        </div>
      </div>
    </ng-template>

    <div class="m-10">
      <div class="grid grid-cols-2 gap-2">
        @for (side of SHEET_SIDES; track $index) {
          <button (click)="openSheet(side)" sc-button variant="outline">{{ side }}</button>
        }
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SheetPage {
  scSheetTrigger = inject(ScSheetTrigger);

  sheetRef = viewChild.required<TemplateRef<unknown>>('sheet');

  SHEET_SIDES: ('top' | 'bottom' | 'left' | 'right')[] = ['top', 'right', 'bottom', 'left'];

  openSheet(side: 'top' | 'bottom' | 'left' | 'right') {
    const config = new ScSheetConfig();
    config.side = side;

    if (side === 'left' || side === 'right') {
      config.width = '300';
      this.scSheetTrigger.open(this.sheetRef(), config);
    }

    if (side === 'top' || side === 'bottom') {
      config.height = '300';
      this.scSheetTrigger.open(this.sheetRef(), config);
    }
  }
}
