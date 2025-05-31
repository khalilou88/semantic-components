import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { breadcrumb: 'Dashboard' },
  },
  {
    path: 'products',
    data: { breadcrumb: 'Products' },
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'category/:categoryId',
        component: CategoryComponent,
        data: { breadcrumb: 'Category' },
      },
      {
        path: ':productId',
        component: ProductDetailComponent,
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
        component: UserListComponent,
      },
      {
        path: ':userId',
        component: UserProfileComponent,
        data: { breadcrumb: 'User Profile' },
        children: [
          {
            path: 'settings',
            component: UserSettingsComponent,
            data: { breadcrumb: 'Settings' },
          },
        ],
      },
    ],
  },
];
