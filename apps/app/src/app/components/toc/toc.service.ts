// toc.service.ts
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

export interface TocItem {
  id: string;
  level: number;
  text: string;
  children: TocItem[];
}

@Injectable({
  providedIn: 'root',
})
export class TocService {
  private readonly tocItemsSubject = new BehaviorSubject<TocItem[]>([]);
  tocItems$: Observable<TocItem[]> = this.tocItemsSubject.asObservable();

  updateTocItems(items: TocItem[]): void {
    this.tocItemsSubject.next(items);
  }

  scrollToHeading(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
