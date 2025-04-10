import { Injectable, signal } from '@angular/core';

import { ScTab } from './tab';

export interface ScActiveTab {
  id: string;
  focus?: boolean;
}

@Injectable()
export class ScTabsService {
  readonly tabs = signal<readonly ScTab[]>([]);
  readonly activeTab = signal<ScActiveTab | null>(null);
}
