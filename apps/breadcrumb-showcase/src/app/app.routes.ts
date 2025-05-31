import { Route } from '@angular/router';

import { Category } from './category';
import { Dashboard } from './dashboard';
import { ProductDetail } from './product-detail';
import { ProductList } from './product-list';
import { UserList } from './user-list';
import { UserProfile } from './user-profile';
import { UserSettings } from './user-settings';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: Dashboard,
    data: { breadcrumb: 'Dashboard' },
  },
  {
    path: 'products',
    data: { breadcrumb: 'Products' },
    children: [
      {
        path: '',
        component: ProductList,
      },
      {
        path: 'category/:categoryId',
        component: Category,
        data: { breadcrumb: 'Category' },
      },
      {
        path: ':productId',
        component: ProductDetail,
        data: { breadcrumb: 'Product Details' },
      },
    ],
  },
  {
    path: 'users',
    data: { breadcrumb: 'Users' },
    children: [
      {
        path: '',
        component: UserList,
      },
      {
        path: ':userId',
        component: UserProfile,
        data: { breadcrumb: 'User Profile' },
        children: [
          {
            path: 'settings',
            component: UserSettings,
            data: { breadcrumb: 'Settings' },
          },
        ],
      },
    ],
  },
];
