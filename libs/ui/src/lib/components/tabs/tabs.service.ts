import { Injectable, signal } from '@angular/core';

@Injectable()
export class ScTabsService {
  readonly activeTabId = signal<string>('');
}
