import { Injectable, computed, signal } from '@angular/core';

@Injectable()
export class ScSidebarState {
  open = signal(true);
  openMobile = signal(false);
  isMobile = signal(false);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  state = computed(() => (this.open() ? 'expanded' : 'collapsed'));

  // Helper to toggle the sidebar.
  toggleSidebar() {
    return this.isMobile()
      ? this.openMobile.update((open) => !open)
      : this.open.update((open) => !open);
  }
}
