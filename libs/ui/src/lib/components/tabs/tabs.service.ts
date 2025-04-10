import { Injectable, linkedSignal, signal } from '@angular/core';

import { ScTab } from './tab';

@Injectable()
export class ScTabsService {
  readonly activeTabId = signal<string>('');

  readonly focusTabId = linkedSignal(() => this.activeTabId());

  readonly tabs = signal<readonly ScTab[]>([]);
}
