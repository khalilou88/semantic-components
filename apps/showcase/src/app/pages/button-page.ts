import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton } from '@semantic-components/ui';
import {
  SvgChevronRightIcon,
  SvgLoaderCircleIcon,
  SvgLoaderIcon,
} from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-buttons-page',
  imports: [ScButton, SvgChevronRightIcon, SvgLoaderCircleIcon],
  template: `
    <button sc-button type="button">Primary</button>
    <button sc-button variant="secondary" type="button">Secondary</button>
    <button sc-button variant="destructive" type="button">Destructive</button>
    <button sc-button variant="outline" type="button">Outline</button>
    <button sc-button variant="ghost" type="button">Ghost</button>
    <button sc-button variant="link" type="button">Link</button>

    <h1>Sm</h1>
    <button sc-button type="button" size="sm">Primary</button>
    <button sc-button variant="secondary" type="button" size="sm">Secondary</button>
    <button sc-button variant="destructive" type="button" size="sm">Destructive</button>
    <button sc-button variant="outline" type="button" size="sm">Outline</button>
    <button sc-button variant="ghost" type="button" size="sm">Ghost</button>
    <button sc-button variant="link" type="button" size="sm">Link</button>

    <h1>Lg</h1>
    <button sc-button type="button" size="lg">Primary</button>
    <button sc-button variant="secondary" type="button" size="lg">Secondary</button>
    <button sc-button variant="destructive" type="button" size="lg">Destructive</button>
    <button sc-button variant="outline" type="button" size="lg">Outline</button>
    <button sc-button variant="ghost" type="button" size="lg">Ghost</button>
    <button sc-button variant="link" type="button" size="lg">Link</button>

    <h1>Disabled</h1>
    <button sc-button type="button" disabled>Primary</button>
    <button sc-button variant="secondary" type="button" disabled>Secondary</button>
    <button sc-button variant="destructive" type="button" disabled>Destructive</button>
    <button sc-button variant="outline" type="button" disabled>Outline</button>
    <button sc-button variant="ghost" type="button" disabled>Ghost</button>
    <button sc-button variant="link" type="button" disabled>Link</button>

    <h1>Disabled Links</h1>
    <a sc-button type="button" disabled>Primary</a>
    <a sc-button variant="secondary" type="button" disabled>Secondary</a>
    <a sc-button variant="destructive" type="button" disabled>Destructive</a>
    <a sc-button variant="outline" type="button" disabled>Outline</a>
    <a sc-button variant="ghost" type="button" disabled>Ghost</a>
    <a sc-button variant="link" type="button" disabled>Link</a>

    <h1>Icon</h1>
    <button sc-button type="button" size="icon">
      <svg-chevron-right-icon />
    </button>
    <button sc-button variant="secondary" type="button" size="icon">
      <svg-chevron-right-icon />
    </button>
    <button sc-button variant="destructive" type="button" size="icon">
      <svg-chevron-right-icon />
    </button>
    <button class="size-20" sc-button variant="outline" type="button" size="icon">
      <svg-chevron-right-icon />
    </button>
    <button sc-button variant="ghost" type="button" size="icon"><svg-chevron-right-icon /></button>
    <button sc-button variant="link" type="button" size="icon"><svg-chevron-right-icon /></button>

    <br />
    <br />
    <br />

    <button sc-button disabled>
      <svg-loader-circle-icon class="animate-spin" />
      Please wait
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonPage {}
