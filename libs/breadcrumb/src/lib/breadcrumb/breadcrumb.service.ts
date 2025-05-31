import { Injectable, computed, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';

export interface BreadcrumbItem {
  label: string;
  url: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private readonly routeDataSignal = signal<any[]>([]);

  // Computed signal that transforms route data into breadcrumb items
  breadcrumbs = computed(() => {
    const routeData = this.routeDataSignal();
    const items: BreadcrumbItem[] = [];
    let url = '';

    routeData.forEach((data, index) => {
      if (data.breadcrumb) {
        url += `/${data.path}`;
        items.push({
          label: data.breadcrumb,
          url: url,
          isActive: index === routeData.length - 1,
        });
      }
    });

    return items;
  });

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.buildRouteData(this.activatedRoute.root)),
      )
      .subscribe((routeData) => {
        this.routeDataSignal.set(routeData);
      });
  }

  private buildRouteData(route: ActivatedRoute): any[] {
    const data: any[] = [];

    const buildPath = (currentRoute: ActivatedRoute, path = ''): void => {
      const routeSnapshot = currentRoute.snapshot;

      if (routeSnapshot.routeConfig?.path) {
        const fullPath = path + '/' + routeSnapshot.routeConfig.path;

        // Replace route parameters with actual values
        let resolvedPath = routeSnapshot.routeConfig.path;
        Object.keys(routeSnapshot.params).forEach((key) => {
          resolvedPath = resolvedPath.replace(`:${key}`, routeSnapshot.params[key]);
        });

        data.push({
          path: resolvedPath,
          breadcrumb: routeSnapshot.data['breadcrumb'] ?? this.formatLabel(resolvedPath),
          params: routeSnapshot.params,
          queryParams: routeSnapshot.queryParams,
        });
      }

      if (currentRoute.firstChild) {
        buildPath(currentRoute.firstChild, path + '/' + (routeSnapshot.routeConfig?.path ?? ''));
      }
    };

    buildPath(route);
    return data.filter((item) => item.breadcrumb);
  }

  private formatLabel(path: string): string {
    return path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
