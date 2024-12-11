import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScSidebarState {
  open = signal<boolean>(false);
}
