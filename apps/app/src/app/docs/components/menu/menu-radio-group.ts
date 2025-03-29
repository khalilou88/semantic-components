import { CdkMenuModule } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScButton,
  ScMenu,
  ScMenuLabel,
  ScMenuRadioGroup,
  ScMenuRadioItem,
  ScMenuSeparator,
  ScMenuTriggerFor,
} from '@semantic-components/ui';

@Component({
  selector: 'app-menu-radio-group',
  imports: [
    ScMenuLabel,
    ScMenuSeparator,
    ScMenuRadioItem,
    ScMenuRadioGroup,
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
        <sc-menu-label>Panel Position</sc-menu-label>
        <hr sc-menu-separator />
        <div sc-menu-radio-group value="position">
          <button sc-menu-radio-item value="top">Top</button>
          <button sc-menu-radio-item value="bottom">Bottom</button>
          <button sc-menu-radio-item value="right">Right</button>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuRadioGroup {}
