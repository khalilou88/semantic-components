import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-combobox-page',
  imports: [ScCombobox],
  template: `
    <sc-combobox
      [options]="users"
      (optionSelected)="onUserSelected($event)"
      (search)="onSearch($event)"
      label="Select a user"
      placeholder="Search users..."
      labelKey="name"
    />

    <br />
    <br />
    <br />
    <br />
    <sc-combobox [options]="users" [optionTemplate]="customOption" />

    <ng-template #customOption let-user>
      <div class="flex items-center">
        <img class="mr-2 size-8 rounded-full" [src]="user.avatar" alt="" />
        <div>
          <div class="font-medium">{{ user.name }}</div>
          <div class="text-sm text-gray-500">{{ user.email }}</div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComboboxPage {
  users = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://gravatar.com/avatar/760d491a74b67e88540d7066f5ff59c5?s=400&d=robohash&r=x',
      email: '',
      label: 'label 1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://gravatar.com/avatar/760d491a74b67e88540d7066f5ff59c5?s=400&d=robohash&r=x',
      email: '',
      label: 'label 2',
    },
    // ...
  ];

  onUserSelected(user: any) {
    console.log('Selected user:', user);
  }

  onSearch(query: string) {
    console.log('Search query:', query);
    // You can implement API calls here
  }
}
