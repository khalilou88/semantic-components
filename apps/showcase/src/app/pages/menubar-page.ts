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
        <button [cdkMenuTriggerFor]="file" sc-menu-bar-item cdkMenuItem>File</button>
        <button [cdkMenuTriggerFor]="edit" sc-menu-bar-item cdkMenuItem>Edit</button>
        <button [cdkMenuTriggerFor]="format" sc-menu-bar-item cdkMenuItem>Format</button>
      </div>

      <ng-template #file>
        <div class="example-menu" cdkMenu>
          <button class="example-menu-item" cdkMenuItem>Share</button>
          <hr />
          <button class="example-menu-item" [cdkMenuTriggerFor]="new_doc" cdkMenuItem>
            New
            <span>&#10148;</span>
          </button>
          <button class="example-menu-item" cdkMenuItem>Open</button>
          <button class="example-menu-item" cdkMenuItem>Make a Copy</button>
          <hr />
          <button class="example-menu-item" [cdkMenuTriggerFor]="download" cdkMenuItem>
            Download
            <span>&#10148;</span>
          </button>
        </div>
      </ng-template>

      <ng-template #edit>
        <div class="example-menu" cdkMenu>
          <button class="example-menu-item" cdkMenuItem>Undo</button>
          <button class="example-menu-item" cdkMenuItem>Redo</button>
          <hr />
          <button class="example-menu-item" cdkMenuItem>Cut</button>
          <button class="example-menu-item" cdkMenuItem>Copy</button>
          <button class="example-menu-item" cdkMenuItem>Paste</button>
        </div>
      </ng-template>

      <ng-template #format>
        <div class="example-menu" cdkMenu>
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
        <div class="example-menu" cdkMenu>
          <button class="example-menu-item" cdkMenuItem>Document</button>
          <button class="example-menu-item" cdkMenuItem>From template</button>
          <hr />
          <button class="example-menu-item" cdkMenuItem>Spreadsheet</button>
          <button class="example-menu-item" cdkMenuItem>Presentation</button>
          <button class="example-menu-item" cdkMenuItem>Form</button>
        </div>
      </ng-template>

      <ng-template #download>
        <div class="example-menu" cdkMenu>
          <button class="example-menu-item" cdkMenuItem>Microsoft Word</button>
          <button class="example-menu-item" cdkMenuItem>PDF</button>
          <button class="example-menu-item" cdkMenuItem>Plain text</button>
        </div>
      </ng-template>

      <br />
      <br />
      <br />
      <br />
      <div sc-menu-bar>
        <button sc-menubar-item>
          <sc-menubar-trigger [scMenubarTriggerFor]="file2">File</sc-menubar-trigger>

          <ng-template #file2>
            <sc-menu>
              <sc-menu-item>
                New Tab
                <span sc-menu-shortcut>⌘T</span>
              </sc-menu-item>
              <sc-menu-item>
                New Window
                <span sc-menu-shortcut>⌘N</span>
              </sc-menu-item>
              <sc-menu-item disabled>New Incognito Window</sc-menu-item>
              <sc-menu-separator />
              <sc-menu-item>
                <sc-menu-sub-trigger [scMenuSubTriggerFor]="share">Share</sc-menu-sub-trigger>
                <ng-template #share>
                  <sc-menu-sub>
                    <sc-menu-item>Email link</sc-menu-item>
                    <sc-menu-item>Messages</sc-menu-item>
                    <sc-menu-item>Notes</sc-menu-item>
                  </sc-menu-sub>
                </ng-template>
              </sc-menu-item>

              <sc-menu-separator />
              <sc-menu-item>
                Print...
                <span sc-menu-shortcut>⌘P</span>
              </sc-menu-item>
            </sc-menu>
          </ng-template>
        </button>

        <button sc-menubar-item>
          <sc-menubar-trigger [scMenubarTriggerFor]="edit2">Edit</sc-menubar-trigger>
          <ng-template #edit2>
            <sc-menu>
              <sc-menu-item>
                Undo
                <span sc-menu-shortcut>⌘Z</span>
              </sc-menu-item>
              <sc-menu-item>
                Redo
                <span sc-menu-shortcut>⇧⌘Z</span>
              </sc-menu-item>
              <sc-menu-separator />
              <sc-menu-item>
                <sc-menu-sub-trigger [scMenuSubTriggerFor]="find2">Find</sc-menu-sub-trigger>
                <ng-template #find2>
                  <sc-menu-sub>
                    <sc-menu-item>Search the web</sc-menu-item>
                    <sc-menu-separator />
                    <sc-menu-item>Find...</sc-menu-item>
                    <sc-menu-item>Find Next</sc-menu-item>
                    <sc-menu-item>Find Previous</sc-menu-item>
                  </sc-menu-sub>
                </ng-template>
              </sc-menu-item>
              <sc-menu-separator />
              <sc-menu-item>Cut</sc-menu-item>
              <sc-menu-item>Copy</sc-menu-item>
              <sc-menu-item>Paste</sc-menu-item>
            </sc-menu>
          </ng-template>
        </button>

        <button sc-menubar-item>
          <sc-menubar-trigger [scMenubarTriggerFor]="view2">View</sc-menubar-trigger>
          <ng-template #view2>
            <sc-menu>
              <sc-menu-checkbox-item>Always Show Bookmarks Bar</sc-menu-checkbox-item>
              <sc-menu-checkbox-item checked>Always Show Full URLs</sc-menu-checkbox-item>
              <sc-menu-separator />
              <sc-menu-item inset>
                Reload
                <span sc-menu-shortcut>⌘R</span>
              </sc-menu-item>
              <sc-menu-item disabled inset>
                Force Reload
                <span sc-menu-shortcut>⇧⌘R</span>
              </sc-menu-item>
              <sc-menu-separator />
              <sc-menu-item inset>Toggle Fullscreen</sc-menu-item>
              <sc-menu-separator />
              <sc-menu-item inset>Hide Sidebar</sc-menu-item>
            </sc-menu>
          </ng-template>
        </button>

        <button sc-menubar-item>
          <sc-menubar-trigger [scMenubarTriggerFor]="profiles2">Profiles</sc-menubar-trigger>
          <ng-template #profiles2>
            <sc-menu>
              <sc-menu-radio-group value="benoit">
                <sc-menu-radio-item value="andy">Andy</sc-menu-radio-item>
                <sc-menu-radio-item value="benoit">Benoit</sc-menu-radio-item>
                <sc-menu-radio-item value="Luis">Luis</sc-menu-radio-item>
              </sc-menu-radio-group>
              <sc-menu-separator />
              <sc-menu-item inset>Edit...</sc-menu-item>
              <sc-menu-separator />
              <sc-menu-item inset>Add Profile...</sc-menu-item>
            </sc-menu>
          </ng-template>
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenubarPage {}
