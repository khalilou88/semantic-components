import { DIALOG_DATA } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgXIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScDialogClose } from './dialog-close';
import { ScDialogContent } from './dialog-content';
import { ScDialogDescription } from './dialog-description';
import { ScDialogFooter } from './dialog-footer';
import { ScDialogHeader } from './dialog-header';
import { ScDialogTitle } from './dialog-title';

@Component({
  selector: 'sc-dialog',
  imports: [
    ScDialogHeader,
    ScDialogTitle,
    ScDialogDescription,
    ScDialogFooter,
    ScDialogClose,
    SvgXIcon,
    ScDialogContent,
    ScButton,
  ],
  template: `
    <div sc-dialog-content>
      <button sc-dialog-close>
        <svg-x-icon class="size-4" />
        <span class="sr-only">Close</span>
      </button>

      <div sc-dialog-header>
        <h2 sc-dialog-title>Edit profile</h2>

        <p sc-dialog-description>Make changes to your profile here. Click save when you're done.</p>
      </div>

      <div sc-dialog-footer>
        <button sc-button type="submit">Save changes</button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDialog {
  data = inject(DIALOG_DATA);
}
