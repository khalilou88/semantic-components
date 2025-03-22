import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

export interface TocItem {
  id: string;
  level: number;
  text: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TocService {
  private readonly items$ = new BehaviorSubject<TocItem[]>([]);
  private readonly activeId$ = new BehaviorSubject<string | null>(null);

  // Public observables that components can subscribe to
  public tocItems: Observable<TocItem[]> = this.items$.asObservable();
  public activeItemId: Observable<string | null> = this.activeId$.asObservable();

  /**
   * Register a heading element with the TOC service
   */
  registerHeading(id: string, level: number, text: string): void {
    const currentItems = this.items$.value;
    const existingItemIndex = currentItems.findIndex((item) => item.id === id);

    if (existingItemIndex === -1) {
      // Add new item
      const newItem: TocItem = {
        id,
        level,
        text,
        isActive: false,
      };

      // Sort by document order (we'll assume elements are registered in order they appear)
      this.items$.next([...currentItems, newItem]);
    } else {
      // Update existing item
      const updatedItems = [...currentItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        text,
        level,
      };
      this.items$.next(updatedItems);
    }
  }

  /**
   * Unregister a heading from the TOC service
   */
  unregisterHeading(id: string): void {
    const currentItems = this.items$.value;
    const filteredItems = currentItems.filter((item) => item.id !== id);
    this.items$.next(filteredItems);
  }

  /**
   * Set the active heading ID
   */
  setActiveItem(id: string | null): void {
    if (this.activeId$.value !== id) {
      this.activeId$.next(id);

      const updatedItems = this.items$.value.map((item) => ({
        ...item,
        isActive: item.id === id,
      }));

      this.items$.next(updatedItems);
    }
  }

  /**
   * Scroll to a specific heading
   */
  scrollToHeading(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset to account for fixed headers
      const offset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      this.setActiveItem(id);
    }
  }
}
