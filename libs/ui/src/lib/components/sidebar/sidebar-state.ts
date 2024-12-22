import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScSidebarState {
  open = signal(true);
  openMobile = signal(false);
  isMobile = signal(false);

  // Helper to toggle the sidebar.
  toggleSidebar() {
    return this.isMobile()
      ? this.openMobile.update((open) => !open)
      : this.open.update((open) => !open);
  }
}
