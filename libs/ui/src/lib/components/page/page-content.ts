import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-page-content',
  imports: [],
  template: `
    <div class="rdp rounded-md border p-3">
      <div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div class="rdp-caption_start rdp-caption_end space-y-4">
          <div class="relative flex items-center justify-center pt-1">
            <div
              class="text-sm font-medium"
              id="react-day-picker-3"
              aria-live="polite"
              role="presentation"
            >
              December 2024
            </div>
            <div class="flex items-center space-x-1">
              <button
                class="rdp-button_reset rdp-button absolute left-1 inline-flex size-7 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-transparent p-0 text-sm font-medium opacity-50 ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                name="previous-month"
                aria-label="Go to previous month"
                type="button"
              >
                <svg
                  class="lucide lucide-chevron-left size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button
                class="rdp-button_reset rdp-button absolute right-1 inline-flex size-7 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-transparent p-0 text-sm font-medium opacity-50 ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                name="next-month"
                aria-label="Go to next month"
                type="button"
              >
                <svg
                  class="lucide lucide-chevron-right size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
          <table
            class="w-full border-collapse space-y-1"
            role="grid"
            aria-labelledby="react-day-picker-3"
          >
            <thead class="rdp-head">
              <tr class="flex">
                <th
                  class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
                  scope="col"
                  aria-label="Sunday"
                >
                  Su
                </th>
                <th
                  class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
                  scope="col"
                  aria-label="Monday"
                >
                  Mo
                </th>
                <th
                  class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
                  scope="col"
                  aria-label="Tuesday"
                >
                  Tu
                </th>
                <th
                  class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
                  scope="col"
                  aria-label="Wednesday"
                >
                  We
                </th>
                <th
                  class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
                  scope="col"
                  aria-label="Thursday"
                >
                  Th
                </th>
                <th
                  class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
                  scope="col"
                  aria-label="Friday"
                >
                  Fr
                </th>
                <th
                  class="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
                  scope="col"
                  aria-label="Saturday"
                >
                  Sa
                </th>
              </tr>
            </thead>
            <tbody class="rdp-tbody" role="rowgroup">
              <tr class="mt-2 flex w-full">
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    1
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    2
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    3
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    4
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    5
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    6
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    7
                  </button>
                </td>
              </tr>
              <tr class="mt-2 flex w-full">
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    8
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-accent  p-0 text-sm font-normal text-accent-foreground  ring-offset-background transition-colors hover:bg-accent  hover:text-accent-foreground focus:bg-primary focus:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    aria-selected="true"
                    tabindex="-1"
                    type="button"
                  >
                    9
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    10
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="0"
                    type="button"
                  >
                    11
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    12
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    13
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    14
                  </button>
                </td>
              </tr>
              <tr class="mt-2 flex w-full">
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    15
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    16
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    17
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    18
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    19
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    20
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    21
                  </button>
                </td>
              </tr>
              <tr class="mt-2 flex w-full">
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    22
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    23
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    24
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    25
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    26
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    27
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    28
                  </button>
                </td>
              </tr>
              <tr class="mt-2 flex w-full">
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    29
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    30
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    31
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button day-outside inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal text-muted-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    1
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button day-outside inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal text-muted-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    2
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button day-outside inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal text-muted-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    3
                  </button>
                </td>
                <td
                  class="relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
                  role="presentation"
                >
                  <button
                    class="rdp-button_reset rdp-button day-outside inline-flex size-9 items-center justify-center gap-2 whitespace-nowrap rounded-md p-0 text-sm font-normal text-muted-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    name="day"
                    role="gridcell"
                    tabindex="-1"
                    type="button"
                  >
                    4
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContent {}
