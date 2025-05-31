# breadcrumb

I've created a comprehensive breadcrumb component for Angular that leverages signals for reactive state management. Here are the key features:
Key Components:

BreadcrumbService: Uses Angular signals to track route changes and compute breadcrumb items
BreadcrumbComponent: A standalone component that displays the breadcrumbs with full customization options
Route Configuration: Example showing how to configure routes with breadcrumb data

Features:

Signal-based reactivity: Uses signal() and computed() for efficient state management
Automatic route tracking: Listens to router events and builds breadcrumbs automatically
Customizable: Options for home link, navigation enable/disable, labels, and styling
Accessibility: Full ARIA support and keyboard navigation
Responsive design: Adapts to different screen sizes
Parameter handling: Resolves route parameters in breadcrumb URLs
Nested routes: Supports complex nested route structures

Usage:

Add breadcrumb data to your routes:

typescript{
path: 'products/:productId',
component: ProductComponent,
data: { breadcrumb: 'Product Details' }
}

Include the component in your template:

html<app-breadcrumb
[showHome]="true"
[enableNavigation]="true"
homeLabel="Dashboard">
</app-breadcrumb>
The component automatically generates breadcrumbs like: Home > Products > Category > Product Details with proper navigation links and current page indication.
