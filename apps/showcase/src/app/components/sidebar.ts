import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/ui';

import { LayoutState } from '../services/layout-state';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
    <aside
      class="hidden w-full shrink-0 border-r border-border/40 md:sticky md:block dark:border-border"
    >
      <div class="no-scrollbar h-full overflow-auto py-6 pr-6 lg:py-8">
        <div class="w-full">
          <div class="pb-4">
            <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Getting Started</h4>
            <div class="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs"
                target=""
                rel=""
              >
                Introduction
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/installation"
                target=""
                rel=""
              >
                Installation
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components-json"
                target=""
                rel=""
              >
                components.json
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/theming"
                target=""
                rel=""
              >
                Theming
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/dark-mode"
                target=""
                rel=""
              >
                Dark mode
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/cli"
                target=""
                rel=""
              >
                CLI
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/react-19"
                target=""
                rel=""
              >
                Next.js 15 + React 19
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/typography"
                target=""
                rel=""
              >
                Typography
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/v0"
                target=""
                rel=""
              >
                Open in v0
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/figma"
                target=""
                rel=""
              >
                Figma
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/changelog"
                target=""
                rel=""
              >
                Changelog
              </a>
            </div>
          </div>
          <div class="pb-4">
            <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Installation</h4>
            <div class="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/installation/next"
                target=""
                rel=""
              >
                Next.js
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/installation/vite"
                target=""
                rel=""
              >
                Vite
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/installation/remix"
                target=""
                rel=""
              >
                Remix
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/installation/astro"
                target=""
                rel=""
              >
                Astro
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/installation/laravel"
                target=""
                rel=""
              >
                Laravel
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/installation/gatsby"
                target=""
                rel=""
              >
                Gatsby
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/installation/manual"
                target=""
                rel=""
              >
                Manual
              </a>
            </div>
          </div>
          <div class="pb-4">
            <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
            <div class="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/sidebar"
                target=""
                rel=""
              >
                Sidebar
                <span
                  class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
                >
                  New
                </span>
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/accordion"
                target=""
                rel=""
              >
                Accordion
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/alert"
                target=""
                rel=""
              >
                Alert
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/alert-dialog"
                target=""
                rel=""
              >
                Alert Dialog
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/aspect-ratio"
                target=""
                rel=""
              >
                Aspect Ratio
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/avatar"
                target=""
                rel=""
              >
                Avatar
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/badge"
                target=""
                rel=""
              >
                Badge
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/breadcrumb"
                target=""
                rel=""
              >
                Breadcrumb
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/button"
                target=""
                rel=""
              >
                Button
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/calendar"
                target=""
                rel=""
              >
                Calendar
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/card"
                target=""
                rel=""
              >
                Card
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/carousel"
                target=""
                rel=""
              >
                Carousel
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/chart"
                target=""
                rel=""
              >
                Chart
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/checkbox"
                target=""
                rel=""
              >
                Checkbox
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/collapsible"
                target=""
                rel=""
              >
                Collapsible
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/combobox"
                target=""
                rel=""
              >
                Combobox
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/command"
                target=""
                rel=""
              >
                Command
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/context-menu"
                target=""
                rel=""
              >
                Context Menu
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/data-table"
                target=""
                rel=""
              >
                Data Table
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/date-picker"
                target=""
                rel=""
              >
                Date Picker
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/dialog"
                target=""
                rel=""
              >
                Dialog
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/drawer"
                target=""
                rel=""
              >
                Drawer
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/dropdown-menu"
                target=""
                rel=""
              >
                Dropdown Menu
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/form"
                target=""
                rel=""
              >
                Form
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/hover-card"
                target=""
                rel=""
              >
                Hover Card
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/input"
                target=""
                rel=""
              >
                Input
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/input-otp"
                target=""
                rel=""
              >
                Input OTP
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/label"
                target=""
                rel=""
              >
                Label
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/menubar"
                target=""
                rel=""
              >
                Menubar
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/navigation-menu"
                target=""
                rel=""
              >
                Navigation Menu
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/pagination"
                target=""
                rel=""
              >
                Pagination
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/popover"
                target=""
                rel=""
              >
                Popover
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/progress"
                target=""
                rel=""
              >
                Progress
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/radio-group"
                target=""
                rel=""
              >
                Radio Group
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/resizable"
                target=""
                rel=""
              >
                Resizable
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline underline-offset-2 hover:underline"
                href="/docs/components/scroll-area"
                target=""
                rel=""
              >
                Scroll Area
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/select"
                target=""
                rel=""
              >
                Select
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/separator"
                target=""
                rel=""
              >
                Separator
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/sheet"
                target=""
                rel=""
              >
                Sheet
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/skeleton"
                target=""
                rel=""
              >
                Skeleton
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/slider"
                target=""
                rel=""
              >
                Slider
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/sonner"
                target=""
                rel=""
              >
                Sonner
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/switch"
                target=""
                rel=""
              >
                Switch
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/table"
                target=""
                rel=""
              >
                Table
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/tabs"
                target=""
                rel=""
              >
                Tabs
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/textarea"
                target=""
                rel=""
              >
                Textarea
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/toast"
                target=""
                rel=""
              >
                Toast
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/toggle"
                target=""
                rel=""
              >
                Toggle
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/toggle-group"
                target=""
                rel=""
              >
                Toggle Group
              </a>
              <a
                class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
                href="/docs/components/tooltip"
                target=""
                rel=""
              >
                Tooltip
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  layoutState = inject(LayoutState);

  class = input<string>('');

  classes = computed(() =>
    cn(
      'sticky top-16 h-[calc(100vh-theme(spacing.16))] w-40 overflow-y-auto bg-green-200',
      this.class(),
    ),
  );
}
