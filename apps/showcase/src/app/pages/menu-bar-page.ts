import { CdkMenuModule } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScTab, ScTabContent, ScTabLabel, ScTabs } from '@semantic-components/experimental';
import {
  ScBreadcrumb,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
  ScCard,
  ScCardContent,
  ScCodeHighlighter,
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
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
} from '@semantic-components/ui';
import { SiChevronRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-menu-bar-page',
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
    ScBreadcrumb,
    ScBreadcrumbList,
    ScBreadcrumbItem,
    ScBreadcrumbLink,
    ScBreadcrumbPage,
    ScBreadcrumbSeparator,
    ScPageTitle,
    ScPageSubtitle,
    ScPageDescription,
    ScTabs,
    ScTab,
    ScTabLabel,
    ScTabContent,
    ScCard,
    ScCodeHighlighter,
    ScCardContent,
    RouterLink,
  ],
  template: `
    <div class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] px-4">
      <div class="mx-auto w-full max-w-3xl">
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item><a sc-breadcrumb-link>Components</a></li>

            <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Menu Bar</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Menu Bar</h1>

        <p sc-page-description>
          A visually persistent menu common in desktop applications that provides quick access to a
          consistent set of commands.
        </p>

        <section class="my-10">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                    <div class="w-full" sc-menu-bar>
                      <button [scMenuTriggerFor]="file2" sc-menu-bar-item>File</button>

                      <ng-template #file2>
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

                      <button [scMenuTriggerFor]="edit2" sc-menu-bar-item>Edit</button>
                      <ng-template #edit2>
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
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>

            <sc-tab>
              <sc-tab-label>Code</sc-tab-label>
              <sc-tab-content>
                <sc-code-highlighter [code]="templateCodeSnippet" language="angular-html" />
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="importCodeSnippet" language="angular-ts" />

        <sc-code-highlighter class="mt-2" [code]="templateCodeSnippet" language="angular-html" />

        <h2 class="mb-5" id="examples" sc-page-subtitle>Examples</h2>

        <section class="my-10" id="example">
          <h3 class="mb-2" sc-heading level="3">Another example</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
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
                          <svg class="ml-auto" si-chevron-right-icon></svg>
                        </button>
                        <button sc-menu-item>Open</button>
                        <button sc-menu-item>Make a Copy</button>
                        <hr sc-menu-separator />
                        <button [scMenuTriggerFor]="download" sc-menu-item>
                          Download
                          <svg class="ml-auto" si-chevron-right-icon></svg>
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
                </div>
              </sc-tab-content>
            </sc-tab>

            <sc-tab>
              <sc-tab-label>Code</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <p>Coming soon</p>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>
      </div>

      <div class="hidden text-sm xl:block">
        <div class="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div class="no-scrollbar h-full overflow-auto pb-10">
            <div class="space-y-2">
              <p class="font-medium">On This Page</p>
              <ul class="m-0 list-none">
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    routerLink="."
                    fragment="usage"
                  >
                    Usage
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenubarPage {
  class = signal<string>('block w-full');

  importCodeSnippet = `import {
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
} from '@semantic-components/ui';`;

  templateCodeSnippet = `<div class="w-full" sc-menu-bar>
  <button [scMenuTriggerFor]="file2" sc-menu-bar-item>File</button>

  <ng-template #file2>
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

  <button [scMenuTriggerFor]="edit2" sc-menu-bar-item>Edit</button>
  <ng-template #edit2>
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
</div>`;
}
