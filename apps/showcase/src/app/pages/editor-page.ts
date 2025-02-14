import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
  ScEditor,
  ScEditorBlockquote,
  ScEditorBold,
  ScEditorBulletList,
  ScEditorCode,
  ScEditorGroup,
  ScEditorHighlight,
  ScEditorHorizontalRule,
  ScEditorItalic,
  ScEditorOrderedList,
  ScEditorParagraph,
  ScEditorRedo,
  ScEditorStrike,
  ScEditorTextAlignCenter,
  ScEditorTextAlignLeft,
  ScEditorTextAlignRight,
  ScEditorToolbar,
  ScEditorUnderline,
  ScEditorUndo,
  ScEditorUnsetLink,
  ScExtensionColor,
  ScExtensionFontFamily,
  ScExtensionHeading,
  ScExtensionImage,
  ScExtensionLink,
  ScExtensionTable,
  ScExtensionTextStyle,
  ScExtensionYoutube,
  ScHeading,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
  ScSeparator,
  ScTab,
  ScTabContent,
  ScTabLabel,
  ScTabs,
} from '@semantic-components/ui';
import { SiChevronRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-editor-page',
  imports: [
    ScEditor,
    ReactiveFormsModule,
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
    ScHeading,
    ScCodeHighlighter,
    ScCardContent,
    RouterLink,
    ScEditorUndo,
    ScEditorRedo,
    ScEditorHighlight,
    ScExtensionColor,
    ScEditorBold,
    ScEditorUnderline,
    ScExtensionYoutube,
    ScExtensionImage,
    ScExtensionFontFamily,
    ScExtensionLink,
    ScEditorItalic,
    ScEditorBlockquote,
    ScEditorBulletList,
    ScEditorOrderedList,
    ScExtensionTextStyle,
    ScEditorParagraph,
    ScSeparator,
    ScEditorGroup,
    ScEditorStrike,
    ScEditorHorizontalRule,
    ScEditorCode,
    ScExtensionHeading,
    ScExtensionTable,
    ScEditorToolbar,
    ScEditorUnsetLink,
    ScEditorTextAlignRight,
    ScEditorTextAlignLeft,
    ScEditorTextAlignCenter,
  ],
  template: `
    <div class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] px-4">
      <div class="mx-auto w-full max-w-3xl">
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item><a sc-breadcrumb-link>Components</a></li>

            <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Editor</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Editor</h1>

        <p sc-page-description>Editor.</p>

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="codeSnippet1" language="typescript" />

        <sc-code-highlighter class="mt-2" [code]="codeSnippet2" />

        <h2 class="mb-5" id="examples" sc-page-subtitle>Examples</h2>

        <section class="my-10" id="small-buttons">
          <h3 class="mb-2" sc-heading level="3">Editor</h3>

          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <form [formGroup]="editorForm">
                      <sc-editor formControlName="content">
                        <sc-editor-toolbar>
                          <sc-editor-group>
                            <sc-editor-undo />
                            <sc-editor-redo />
                            <sc-separator class="h-5" orientation="vertical" />
                            <sc-editor-bold />
                            <sc-editor-italic />
                            <sc-editor-underline />
                            <sc-editor-highlight />
                            <sc-extension-text-style />
                            <sc-extension-color />
                            <sc-extension-font-family />
                            <sc-extension-link />
                            <sc-editor-unset-link />
                            <sc-separator class="h-5" orientation="vertical" />
                            <sc-editor-text-align-left />
                            <sc-editor-text-align-center />
                            <sc-editor-text-align-right />
                          </sc-editor-group>

                          <sc-editor-group>
                            <sc-extension-heading />
                            <sc-editor-paragraph />
                            <sc-separator class="h-5" orientation="vertical" />
                            <sc-extension-image />
                            <sc-extension-youtube />
                            <sc-editor-bullet-list />
                            <sc-editor-ordered-list />
                            <sc-editor-blockquote />
                            <sc-separator class="h-5" orientation="vertical" />
                            <sc-editor-strike />
                            <sc-editor-horizontal-rule />
                            <sc-editor-code />
                          </sc-editor-group>

                          <sc-editor-group>
                            <sc-extension-table />
                          </sc-editor-group>
                        </sc-editor-toolbar>
                      </sc-editor>
                    </form>
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
                <!--li class="mt-0 pt-2">
                  <a
                    class="inline-block font-medium text-foreground no-underline transition-colors hover:text-foreground"
                    href="#installation"
                  >
                    Installation
                  </a>
                </li-->
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    routerLink="."
                    fragment="usage"
                  >
                    Usage
                  </a>
                </li>
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    routerLink="."
                    fragment="examples"
                  >
                    Examples
                  </a>
                  <ul class="m-0 list-none pl-4">
                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="variants"
                      >
                        Variants
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="small-buttons"
                      >
                        Small buttons
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="large-buttons"
                      >
                        Large buttons
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="disabled-buttons"
                      >
                        Disabled buttons
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="buttons-with-icons"
                      >
                        Buttons with icons
                      </a>
                    </li>

                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        routerLink="."
                        fragment="button-with-loading-state"
                      >
                        Button with loading state
                      </a>
                    </li>
                  </ul>
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
export default class EditorPage {
  editorForm = new FormGroup({
    content: new FormControl(`  
      <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  `),
  });

  class = signal<string>('block w-full');

  codeSnippet1 = `import { ScButton } from '@semantic-components/ui';`;

  codeSnippet2 = `<button sc-button type="button">Primary</button>`;

  codeSnippet = `<button sc-button type="button">Primary</button>
    <button sc-button variant="secondary" type="button">Secondary</button>
    <button sc-button variant="destructive" type="button">Destructive</button>
    <button sc-button variant="outline" type="button">Outline</button>
    <button sc-button variant="ghost" type="button">Ghost</button>
    <button sc-button variant="link" type="button">Link</button>`;
}
