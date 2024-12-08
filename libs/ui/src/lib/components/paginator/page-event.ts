/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
export interface ScPageEvent {
  /** The current page index. */
  page: number;

  /** The current page size. */
  pageSize: number;
}
