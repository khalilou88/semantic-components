import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScMenuCheckboxItem,
  ScMenuItem,
  ScMenuRadioGroup,
  ScMenuRadioItem,
  ScMenuSeparator,
  ScMenuShortcut,
  ScMenuSub,
  ScMenuSubTrigger,
  ScMenubar,
  ScMenubarItem,
  ScMenubarTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-menubar-page',
  imports: [
    ScMenubar,
    ScMenuSeparator,
    ScMenubarTrigger,
    ScMenuShortcut,
    ScMenuItem,
    ScMenuSubTrigger,
    ScMenuCheckboxItem,
    ScMenuRadioGroup,
    ScMenuRadioItem,
    ScMenuSub,
    ScMenubarItem,
  ],
  template: `
    <div class="m-10">
      <sc-menubar>
        <sc-menubar-item>
          <sc-menubar-trigger>File</sc-menubar-trigger>

          <ng-template>
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
            <sc-menu-sub>
              <sc-menu-sub-trigger>Share</sc-menu-sub-trigger>
              <ng-template>
                <sc-menu-item>Email link</sc-menu-item>
                <sc-menu-item>Messages</sc-menu-item>
                <sc-menu-item>Notes</sc-menu-item>
              </ng-template>
            </sc-menu-sub>
            <sc-menu-separator />
            <sc-menu-item>
              Print...
              <span sc-menu-shortcut>⌘P</span>
            </sc-menu-item>
          </ng-template>
        </sc-menubar-item>

        <sc-menubar-item>
          <sc-menubar-trigger>Edit</sc-menubar-trigger>
          <ng-template>
            <sc-menu-item>
              Undo
              <span sc-menu-shortcut>⌘Z</span>
            </sc-menu-item>
            <sc-menu-item>
              Redo
              <span sc-menu-shortcut>⇧⌘Z</span>
            </sc-menu-item>
            <sc-menu-separator />
            <sc-menu-sub>
              <sc-menu-sub-trigger>Find</sc-menu-sub-trigger>
              <ng-template>
                <sc-menu-item>Search the web</sc-menu-item>
                <sc-menu-separator />
                <sc-menu-item>Find...</sc-menu-item>
                <sc-menu-item>Find Next</sc-menu-item>
                <sc-menu-item>Find Previous</sc-menu-item>
              </ng-template>
            </sc-menu-sub>
            <sc-menu-separator />
            <sc-menu-item>Cut</sc-menu-item>
            <sc-menu-item>Copy</sc-menu-item>
            <sc-menu-item>Paste</sc-menu-item>
          </ng-template>
        </sc-menubar-item>

        <sc-menubar-item>
          <sc-menubar-trigger>View</sc-menubar-trigger>
          <ng-template>
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
          </ng-template>
        </sc-menubar-item>

        <sc-menubar-item>
          <sc-menubar-trigger>Profiles</sc-menubar-trigger>
          <ng-template>
            <sc-menu-radio-group value="benoit">
              <sc-menu-radio-item value="andy">Andy</sc-menu-radio-item>
              <sc-menu-radio-item value="benoit">Benoit</sc-menu-radio-item>
              <sc-menu-radio-item value="Luis">Luis</sc-menu-radio-item>
            </sc-menu-radio-group>
            <sc-menu-separator />
            <sc-menu-item inset>Edit...</sc-menu-item>
            <sc-menu-separator />
            <sc-menu-item inset>Add Profile...</sc-menu-item>
          </ng-template>
        </sc-menubar-item>
      </sc-menubar>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenubarPage {}
