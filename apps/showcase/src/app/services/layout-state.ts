import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutState {
  screenHeight = signal<number>(0);

  headerHeight = signal<number>(0);

  sidebarHeight = computed<number>(() => {
    return this.screenHeight() - this.headerHeight();
  });
}
