//https://blog.logrocket.com/handling-date-strings-typescript/

type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type zeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * Years
 */
type YYYY = `19${zeroToNine}${zeroToNine}` | `20${zeroToNine}${zeroToNine}`;
/**
 * Months
 */
type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;
/**
 * Days
 */
type DD = `${0}${oneToNine}` | `${1 | 2}${zeroToNine}` | `3${0 | 1}`;
/**
 * YYYYMMDD
 */
type RawDateString = `${YYYY}${MM}${DD}`;
