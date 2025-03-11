export interface WeekDayName {
  narrow: string;
  short: string;
  long: string;
}

export function getFirstDayOfWeek(localeId: string): number {
  const locale = new Intl.Locale(localeId);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (locale as any).getWeekInfo().firstDay;
}

export function getWeekInfo(localeId: string) {
  const locale = new Intl.Locale(localeId);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (locale as any).getWeekInfo();
}
