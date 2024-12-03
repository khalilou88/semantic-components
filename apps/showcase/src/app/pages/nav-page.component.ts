import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavComponent, SelectComponent, SelectOptionComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-nav-page',
  imports: [CommonModule, NavComponent, SelectComponent, SelectOptionComponent, FormsModule],
  template: `
    <sc-nav />

    <div class="">
      <sc-select id="test-id" [(ngModel)]="testModel" label="Label" placeholder="Placeholder text">
        <sc-select-option [value]="{ value: 'select option', letter: 'a' }">
          A select option
        </sc-select-option>
        <sc-select-option value="Iconic options">
          <span class="" style="color:green">face</span>
          Iconic options
        </sc-select-option>
        <sc-select-option [disabled]="true" value="Disabled option">
          Disabled option
        </sc-select-option>
        <sc-select-option value="Even more">Even more options</sc-select-option>
        <sc-select-option [disabled]="true" value="More disabled">
          More disabled options
        </sc-select-option>
        <sc-select-option value="More after that">More options after that</sc-select-option>
        <sc-select-option value="Tons">Tons of options</sc-select-option>
        <sc-select-option value="Too many">Tons many to pick from</sc-select-option>
        <sc-select-option value="Totally filled">Totally filled with options</sc-select-option>
      </sc-select>

      <div>Selected: {{ testModel }}</div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavPageComponent {
  public testModel!: any;
}
