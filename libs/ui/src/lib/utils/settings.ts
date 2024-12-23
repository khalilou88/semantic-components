import { Injectable, LOCALE_ID, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Settings {
  dateFormatPattern = signal<string>('');

  private readonly localeId = inject(LOCALE_ID);

  constructor() {
    this.dateFormatPattern.set(this.getDateFormatPattern(this.localeId));
  }

  getDateFormatPattern(localeId: string) {
    const getPatternForPart = (part: Intl.DateTimeFormatPart) => {
      switch (part.type) {
        case 'day':
          return 'd'.repeat(part.value.length);
        case 'month':
          return 'M'.repeat(part.value.length);
        case 'year':
          return 'y'.repeat(part.value.length);
        case 'literal':
          return part.value;
        default:
          throw new Error('no default');
      }
    };

    return new Intl.DateTimeFormat(localeId)
      .formatToParts(new Date('2022-01-01'))
      .map(getPatternForPart)
      .join('')
      .toLowerCase();
  }
}
