import { CdkMenuModule } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScMenu,
  ScMenuBar,
  ScMenuBarItem,
  ScMenuCheckboxGroup,
  ScMenuCheckboxItem,
  ScMenuItem,
  ScMenuRadioGroup,
  ScMenuRadioItem,
  ScMenuSeparator,
  ScMenuTriggerFor,
} from '@semantic-components/ui';
import { SvgChevronRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-menu-bar-page',
  imports: [
    CdkMenuModule,
    ScMenuBar,
    ScMenuItem,
    ScMenuBarItem,
    ScMenu,
    SvgChevronRightIcon,
    ScMenuSeparator,
    ScMenuTriggerFor,
    ScMenuCheckboxItem,
    ScMenuRadioGroup,
    ScMenuRadioItem,
    ScMenuCheckboxGroup,
  ],
  template: `
    <div class="m-10">
      <div sc-menu-bar>
        <button [scMenuTriggerFor]="file" sc-menu-bar-item>File</button>
        <button [scMenuTriggerFor]="edit" sc-menu-bar-item>Edit</button>
        <button [scMenuTriggerFor]="format" sc-menu-bar-item>Format</button>
      </div>

      <ng-template #file>
        <div sc-menu>
          <button sc-menu-item>Share</button>
          <hr sc-menu-separator />
          <button [scMenuTriggerFor]="new_doc" sc-menu-item>
            New
            <svg-chevron-right-icon class="ml-auto" />
          </button>
          <button sc-menu-item>Open</button>
          <button sc-menu-item>Make a Copy</button>
          <hr sc-menu-separator />
          <button [scMenuTriggerFor]="download" sc-menu-item>
            Download
            <svg-chevron-right-icon class="ml-auto" />
          </button>
        </div>
      </ng-template>

      <ng-template #edit>
        <div sc-menu>
          <button sc-menu-item>Undo</button>
          <button sc-menu-item>Redo</button>
          <hr sc-menu-separator />
          <button sc-menu-item>Cut</button>
          <button sc-menu-item>Copy</button>
          <button sc-menu-item>Paste</button>
        </div>
      </ng-template>

      <ng-template #format>
        <div sc-menu>
          <div sc-menu-checkbox-group>
            <button sc-menu-checkbox-item>Bold</button>
            <button sc-menu-checkbox-item>Italic</button>
          </div>
          <hr sc-menu-separator />
          <div sc-menu-radio-group>
            <button sc-menu-radio-item>Small</button>
            <button sc-menu-radio-item>Normal</button>
            <button sc-menu-radio-item>Big</button>
          </div>
        </div>
      </ng-template>

      <ng-template #new_doc>
        <div sc-menu>
          <button sc-menu-item>Document</button>
          <button sc-menu-item>From template</button>
          <hr sc-menu-separator />
          <button sc-menu-item>Spreadsheet</button>
          <button sc-menu-item>Presentation</button>
          <button sc-menu-item>Form</button>
        </div>
      </ng-template>

      <ng-template #download>
        <div sc-menu>
          <button sc-menu-item>Microsoft Word</button>
          <button sc-menu-item>PDF</button>
          <button sc-menu-item>Plain text</button>
        </div>
      </ng-template>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenubarPage {}
