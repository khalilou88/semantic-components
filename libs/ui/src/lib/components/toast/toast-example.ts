import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiXIcon } from '@semantic-icons/lucide-icons';

import { ScToast } from './toast';
import { ScToastAction } from './toast-action';
import { ScToastClose } from './toast-close';
import { ScToastContent } from './toast-content';
import { ScToastDescription } from './toast-description';
import { ScToastTitle } from './toast-title';

@Component({
  selector: 'sc-toast-example',
  imports: [
    ScToastClose,
    SiXIcon,
    ScToastAction,
    ScToastDescription,
    ScToastTitle,
    ScToast,
    ScToastContent,
  ],
  template: `
    <!--
    <ol
      class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
      tabindex="-1"
    >

    -->
    <li
      sc-toast
      role="status"
      aria-live="off"
      aria-atomic="true"
      tabindex="0"
      data-state="open"
      data-swipe-direction="right"
      data-radix-collection-item=""
      style="user-select: none; touch-action: none;"
    >
      <div sc-toast-content>
        <h2 sc-toast-title>Scheduled: Catch up</h2>
        <p sc-toast-description>Friday, February 10, 2023 at 5:57 PM</p>
      </div>
      <button sc-toast-action type="button">Undo</button>
      <button type="button" sc-toast-close>
        <svg class="size-4" si-x-icon></svg>
        <span class="sr-only">Close</span>
      </button>
    </li>

    <!--
    </ol>

-->
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScToastExample {}
