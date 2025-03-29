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
import { SiChevronRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-menu-bar-demo',
  imports: [
    CdkMenuModule,
    ScMenuBar,
    ScMenuItem,
    ScMenuBarItem,
    ScMenu,
    SiChevronRightIcon,
    ScMenuSeparator,
    ScMenuTriggerFor,
    ScMenuCheckboxItem,
    ScMenuRadioGroup,
    ScMenuRadioItem,
    ScMenuCheckboxGroup,
    SiChevronRightIcon,
  ],
  template: `
    <div class="w-full" sc-menu-bar>
      <button [scMenuTriggerFor]="file" sc-menu-bar-item>File</button>

      <ng-template #file>
        <div sc-menu>
          <button sc-menu-item>
            New Tab
            <span sc-menu-shortcut>⌘T</span>
          </button>
          <button sc-menu-item>
            New Window
            <span sc-menu-shortcut>⌘N</span>
          </button>
          <button sc-menu-item disabled>New Incognito Window</button>
          <hr sc-menu-separator />
          <button sc-menu-item>
            <button [scMenuTriggerFor]="share" sc-menu-item>
              Share
              <svg class="ml-auto" si-chevron-right-icon></svg>
            </button>
            <ng-template #share>
              <div sc-menu>
                <button sc-menu-item>Email link</button>
                <button sc-menu-item>Messages</button>
                <button sc-menu-item>Notes</button>
              </div>
            </ng-template>
          </button>

          <hr sc-menu-separator />
          <button sc-menu-item>
            Print...
            <span sc-menu-shortcut>⌘P</span>
          </button>
        </div>
      </ng-template>

      <button [scMenuTriggerFor]="edit" sc-menu-bar-item>Edit</button>
      <ng-template #edit>
        <div sc-menu>
          <button sc-menu-item>
            Undo
            <span sc-menu-shortcut>⌘Z</span>
          </button>
          <button sc-menu-item>
            Redo
            <span sc-menu-shortcut>⇧⌘Z</span>
          </button>
          <hr sc-menu-separator />
          <button sc-menu-item>
            <button [scMenuTriggerFor]="find" sc-menu-item>
              Find
              <svg class="ml-auto" si-chevron-right-icon></svg>
            </button>
            <ng-template #find>
              <div sc-menu>
                <button sc-menu-item>Search the web</button>
                <hr sc-menu-separator />
                <button sc-menu-item>Find...</button>
                <button sc-menu-item>Find Next</button>
                <button sc-menu-item>Find Previous</button>
              </div>
            </ng-template>
          </button>
          <hr sc-menu-separator />
          <button sc-menu-item>Cut</button>
          <button sc-menu-item>Copy</button>
          <button sc-menu-item>Paste</button>
        </div>
      </ng-template>

      <button [scMenuTriggerFor]="view" sc-menu-bar-item>View</button>
      <ng-template #view>
        <div sc-menu>
          <div sc-menu-checkbox-group>
            <button sc-menu-checkbox-item>Always Show Bookmarks Bar</button>
            <button sc-menu-checkbox-item checked>Always Show Full URLs</button>
          </div>

          <hr sc-menu-separator />
          <button sc-menu-item inset>
            Reload
            <span sc-menu-shortcut>⌘R</span>
          </button>
          <button sc-menu-item disabled inset>
            Force Reload
            <span sc-menu-shortcut>⇧⌘R</span>
          </button>
          <hr sc-menu-separator />
          <button sc-menu-item inset>Toggle Fullscreen</button>
          <hr sc-menu-separator />
          <button sc-menu-item inset>Hide Sidebar</button>
        </div>
      </ng-template>

      <button [scMenuTriggerFor]="profiles" sc-menu-bar-item>Profiles</button>
      <ng-template #profiles>
        <div sc-menu>
          <div sc-menu-radio-group value="benoit">
            <button sc-menu-radio-item value="andy">Andy</button>
            <button sc-menu-radio-item value="benoit">Benoit</button>
            <button sc-menu-radio-item value="Luis">Luis</button>
          </div>

          <hr sc-menu-separator />
          <button sc-menu-item inset>Edit...</button>
          <hr sc-menu-separator />
          <button sc-menu-item inset>Add Profile...</button>
        </div>
      </ng-template>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarDemo {}
