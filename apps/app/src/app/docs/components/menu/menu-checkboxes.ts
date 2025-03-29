import { CdkMenuModule } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScButton,
  ScMenu,
  ScMenuCheckboxItem,
  ScMenuLabel,
  ScMenuSeparator,
  ScMenuTriggerFor,
} from '@semantic-components/ui';

@Component({
  selector: 'app-menu-checkboxes',
  imports: [
    ScMenuLabel,
    ScMenuSeparator,
    ScMenuCheckboxItem,
    ScMenuTriggerFor,
    CdkMenuModule,
    ScMenu,
    ScButton,
    ScButton,
  ],
  template: `
    <button [scMenuTriggerFor]="menu" sc-button variant="outline">Open</button>

    <ng-template #menu>
      <div sc-menu>
        <sc-menu-label>Appearance</sc-menu-label>
        <hr sc-menu-separator />
        <button sc-menu-checkbox-item checked>Status Bar</button>
        <button sc-menu-checkbox-item checked disabled>Activity Bar</button>
        <button sc-menu-checkbox-item checked>Panel</button>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCheckboxes {}
