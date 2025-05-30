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
  ScSheetClose,
  ScSheetConfig,
  ScSheetManager,
} from '@semantic-components/ui';
import { SiXIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-sheet-side',
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
  template: `
    <div class="grid grid-cols-2 gap-2">
      @for (side of SHEET_SIDES; track $index) {
        <button (click)="openSheet(side)" sc-button variant="outline">
          {{ side }}
        </button>
      }
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
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetSide {
  private readonly scSheetManager = inject(ScSheetManager);

  private readonly sheetRef = viewChild.required<TemplateRef<unknown>>('sheet');

  readonly SHEET_SIDES: ('top' | 'bottom' | 'left' | 'right')[] = [
    'top',
    'right',
    'bottom',
    'left',
  ];

  openSheet(side: 'top' | 'bottom' | 'left' | 'right') {
    const config = new ScSheetConfig();
    config.side = side;

    if (side === 'left' || side === 'right') {
      config.width = '300';
    }

    if (side === 'top' || side === 'bottom') {
      config.height = '300';
    }

    this.scSheetManager.open(this.sheetRef(), config);
  }
}
