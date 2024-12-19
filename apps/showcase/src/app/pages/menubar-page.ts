import {
  CdkMenu,
  CdkMenuBar,
  CdkMenuGroup,
  CdkMenuItem,
  CdkMenuItemCheckbox,
  CdkMenuItemRadio,
  CdkMenuModule,
  CdkMenuTrigger,
} from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScMenu,
  ScMenuBar,
  ScMenuBarItem,
  ScMenuCheckboxItem,
  ScMenuItem,
  ScMenuRadioGroup,
  ScMenuRadioItem,
  ScMenuSeparator,
  ScMenuShortcut,
  ScMenuSub,
  ScMenuSubTrigger,
  ScMenubarTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-menubar-page',
  imports: [
    CdkMenuBar,
    CdkMenuItem,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuGroup,
    CdkMenuItemCheckbox,
    CdkMenuItemRadio,
    CdkMenuModule,
    ScMenuBar,
    ScMenuSeparator,
    ScMenubarTrigger,
    ScMenuShortcut,
    ScMenuItem,
    ScMenuSubTrigger,
    ScMenuCheckboxItem,
    ScMenuRadioGroup,
    ScMenuRadioItem,
    ScMenuSub,
    ScMenuBarItem,
    ScMenu,
    ScMenuSub,
  ],
  template: `
    <div class="m-10">
      <div sc-menu-bar>
        <button [cdkMenuTriggerFor]="file" sc-menu-bar-item>File</button>
        <button [cdkMenuTriggerFor]="edit" sc-menu-bar-item>Edit</button>
        <button [cdkMenuTriggerFor]="format" sc-menu-bar-item>Format</button>
      </div>

      <ng-template #file>
        <div sc-menu>
          <button sc-menu-item>Share</button>
          <hr />
          <button [cdkMenuTriggerFor]="new_doc" sc-menu-item>
            New
            <span>&#10148;</span>
          </button>
          <button sc-menu-item>Open</button>
          <button sc-menu-item>Make a Copy</button>
          <hr />
          <button [cdkMenuTriggerFor]="download" sc-menu-item>
            Download
            <span>&#10148;</span>
          </button>
        </div>
      </ng-template>

      <ng-template #edit>
        <div sc-menu>
          <button sc-menu-item>Undo</button>
          <button sc-menu-item>Redo</button>
          <hr />
          <button sc-menu-item>Cut</button>
          <button sc-menu-item>Copy</button>
          <button sc-menu-item>Paste</button>
        </div>
      </ng-template>

      <ng-template #format>
        <div sc-menu>
          <div class="example-menu-group" cdkMenuGroup>
            <button class="example-menu-item" cdkMenuItemCheckbox cdkMenuItemChecked>Bold</button>
            <button class="example-menu-item" cdkMenuItemCheckbox>Italic</button>
          </div>
          <hr />
          <div class="example-menu-group" cdkMenuGroup>
            <button class="example-menu-item" cdkMenuItemRadio>Small</button>
            <button class="example-menu-item" cdkMenuItemRadio cdkMenuItemChecked>Normal</button>
            <button class="example-menu-item" cdkMenuItemRadio>Big</button>
          </div>
        </div>
      </ng-template>

      <ng-template #new_doc>
        <div sc-menu>
          <button sc-menu-item>Document</button>
          <button sc-menu-item>From template</button>
          <hr />
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
