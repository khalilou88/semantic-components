import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Inject,
  ViewEncapsulation,
} from '@angular/core';

import { TOAST_DATA, ToastData } from './toast.model';

@Component({
  selector: 'sc-toast2',
  imports: [CommonModule, OverlayModule, PortalModule],
  template: `
    <div
      class="toast-container px-4 py-3 rounded-lg shadow-lg max-w-xs"
      [ngClass]="{
        'bg-green-500 text-white': data.type === 'success',
        'bg-red-500 text-white': data.type === 'error',
        'bg-yellow-500 text-white': data.type === 'warning',
        'bg-blue-500 text-white': data.type === 'info',
      }"
    >
      <div class="flex items-center">
        <div class="mr-2" *ngIf="data.type === 'success'">
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div class="mr-2" *ngIf="data.type === 'error'">
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div class="mr-2" *ngIf="data.type === 'warning'">
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div class="mr-2" *ngIf="data.type === 'info'">
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p>{{ data.message }}</p>
        <button class="ml-auto text-white" (click)="close()">
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      @keyframes toast-in {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes toast-out {
        from {
          transform: translateY(0);
          opacity: 1;
        }
        to {
          transform: translateY(-20px);
          opacity: 0;
        }
      }

      :host {
        display: block;
        margin-bottom: 8px;
      }

      :host.toast-enter .toast-container {
        animation: toast-in 300ms ease-out forwards;
      }

      :host.toast-exit .toast-container {
        animation: toast-out 200ms ease-in forwards;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast2 {
  @HostBinding('class') animationClass = 'toast-enter';

  constructor(@Inject(TOAST_DATA) public data: ToastData) {}

  close(): void {
    // This will be hooked up by the service
  }

  startExitAnimation(): Promise<void> {
    return new Promise((resolve) => {
      this.animationClass = 'toast-exit';
      // Wait for animation to complete before resolving
      setTimeout(() => {
        resolve();
      }, 200); // Match the duration of the exit animation
    });
  }
}
