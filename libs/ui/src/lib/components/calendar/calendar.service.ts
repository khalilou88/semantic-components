import { Injectable, signal } from '@angular/core';

@Injectable()
export class CalendarService {
  readonly firstYear = signal(0);

  readonly lastYear = signal(0);
}
