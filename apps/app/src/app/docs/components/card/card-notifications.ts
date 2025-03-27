import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScButton,
  ScCard,
  ScCardContent,
  ScCardDescription,
  ScCardFooter,
  ScCardHeader,
  ScCardTitle,
  ScSwitch,
} from '@semantic-components/ui';
import { SiBellRingIcon, SiCheckIcon } from '@semantic-icons/lucide-icons';

interface Notification {
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-notifications',
  imports: [
    ScCard,
    ScCardHeader,
    ScCardTitle,
    ScCardDescription,
    ScCardContent,
    ScCardFooter,
    ScButton,
    SiCheckIcon,
    SiBellRingIcon,
    ScSwitch,
  ],
  template: `
    <div class="w-[380px]" sc-card>
      <div sc-card-header>
        <h2 sc-card-title>Notifications</h2>
        <p sc-card-description>You have 3 unread messages.</p>
      </div>
      <div class="grid gap-4" sc-card-content>
        <div class=" flex items-center space-x-4 rounded-md border p-4">
          <svg si-bell-ring-icon></svg>
          <div class="flex-1 space-y-1">
            <p class="text-sm font-medium leading-none">Push Notifications</p>
            <p class="text-sm text-muted-foreground">Send notifications to device.</p>
          </div>
          <input (change)="toggleNotifications()" sc-switch />
        </div>
        <div>
          @for (notification of notifications; track $index) {
            <div class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
              <div class="space-y-1">
                <p class="text-sm font-medium leading-none">
                  {{ notification.title }}
                </p>
                <p class="text-sm text-muted-foreground">
                  {{ notification.description }}
                </p>
              </div>
            </div>
          }
        </div>
      </div>
      <div sc-card-footer>
        <button class="w-full" (click)="markAllAsRead()" sc-button>
          <svg si-check-icon></svg>
          Mark all as read
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardNotifications {
  notifications: Notification[] = [
    {
      title: 'Your call has been confirmed.',
      description: '1 hour ago',
    },
    {
      title: 'You have a new message!',
      description: '1 hour ago',
    },
    {
      title: 'Your subscription is expiring soon!',
      description: '2 hours ago',
    },
  ];

  toggleNotifications() {
    // Implement notification toggle logic
    console.log('Notifications toggled');
  }

  markAllAsRead() {
    // Implement mark all as read logic
    console.log('All notifications marked as read');
  }
}
