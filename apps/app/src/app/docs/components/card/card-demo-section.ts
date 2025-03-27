import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { CardDemo } from './card-demo';

@Component({
  selector: 'app-card-demo-section',
  imports: [PreviewCodeTabs, CardDemo],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-card-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import {
  ScButton,
  ScCard,
  ScCardContent,
  ScCardDescription,
  ScCardFooter,
  ScCardHeader,
  ScCardTitle,
  ScInput,
  ScLabel,
  ScOption,
  ScSelect,
} from '@semantic-components/ui';

@Component({
  selector: 'app-card-demo',
  imports: [
    ScCard,
    ScCardHeader,
    ScCardTitle,
    ScCardDescription,
    ScCardContent,
    ScCardFooter,
    ScButton,
    ScLabel,
    ScInput,
    ScSelect,
    ScOption,
  ],
  template: \`
    <div class="w-[350px]" sc-card>
      <div sc-card-header>
        <h2 sc-card-title>Create project</h2>
        <p sc-card-description>Deploy your new project in one-click.</p>
      </div>
      <div sc-card-content>
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <label sc-label for="name">Name</label>
              <input id="name" sc-input placeholder="Name of your project" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <label sc-label for="framework">Framework</label>
              <sc-select id="framework" placeholder="Select">
                <sc-option value="next">Next.js</sc-option>
                <sc-option value="sveltekit">SvelteKit</sc-option>
                <sc-option value="astro">Astro</sc-option>
                <sc-option value="nuxt">Nuxt.js</sc-option>
              </sc-select>
            </div>
          </div>
        </form>
      </div>
      <div class="flex justify-between" sc-card-footer>
        <button sc-button variant="outline">Cancel</button>
        <button sc-button>Deploy</button>
      </div>
    </div>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDemo {}`;
}
