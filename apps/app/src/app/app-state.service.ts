import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  readonly mobileMenu = signal(false);
}
