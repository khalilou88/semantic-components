import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sc-sidebar-content',
  imports: [RouterModule],
  template: `
    <div class="w-full pl-5">
      <div class="pb-4">
        <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Getting Started</h4>
        <div class="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs"
          >
            Introduction
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/installation"
          >
            Installation
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components-json"
          >
            components.json
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/theming"
          >
            Theming
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/dark-mode"
          >
            Dark mode
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/cli"
          >
            CLI
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/react-19"
          >
            Next.js 15 + React 19
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/typography"
          >
            Typography
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/v0"
          >
            Open in v0
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/figma"
          >
            Figma
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/changelog"
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
            target=""
            rel=""
            href="/docs/installation/next"
          >
            Next.js
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/installation/vite"
          >
            Vite
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/installation/remix"
          >
            Remix
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/installation/astro"
          >
            Astro
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/installation/laravel"
          >
            Laravel
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/installation/gatsby"
          >
            Gatsby
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/installation/manual"
          >
            Manual
          </a>
        </div>
      </div>
      <div class="pb-4">
        <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
        <div class="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline underline-offset-2 hover:underline"
            routerLink="/editor"
          >
            Editor
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline underline-offset-2 hover:underline"
            routerLink="/theme-toggler"
          >
            Theme toggler
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline underline-offset-2 hover:underline"
            routerLink="/dropdown"
          >
            Dropdown
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/sidebar"
          >
            Sidebar
            <span
              class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
            >
              New
            </span>
          </a>

          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/accordion"
          >
            Accordion
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/alert"
          >
            Alert
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/alert-dialog"
          >
            Alert Dialog
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/aspect-ratio"
          >
            Aspect Ratio
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/avatar"
          >
            Avatar
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/badge"
          >
            Badge
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            routerLink="/breadcrumb"
          >
            Breadcrumb
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            routerLink="/button"
          >
            Button
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            routerLink="/date-picker"
          >
            Calendar
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/card"
          >
            Card
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/carousel"
          >
            Carousel
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/chart"
          >
            Chart
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/checkbox"
          >
            Checkbox
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/collapsible"
          >
            Collapsible
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/combobox"
          >
            Combobox
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/command"
          >
            Command
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/context-menu"
          >
            Context Menu
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/data-table"
          >
            Data Table
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            routerLink="/date-picker"
          >
            Date Picker
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/dialog"
          >
            Dialog
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/drawer"
          >
            Drawer
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/dropdown-menu"
          >
            Dropdown Menu
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/form"
          >
            Form
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/hover-card"
          >
            Hover Card
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/input"
          >
            Input
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/input-otp"
          >
            Input OTP
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/label"
          >
            Label
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/menubar"
          >
            Menubar
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            routerLink="/nav"
          >
            Navigation Menu
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            routerLink="/paginator"
          >
            Pagination
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/popover"
          >
            Popover
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            routerLink="/progress"
          >
            Progress
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/radio-group"
          >
            Radio Group
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/resizable"
          >
            Resizable
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/scroll-area"
          >
            Scroll Area
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            routerLink="/select"
          >
            Select
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/separator"
          >
            Separator
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/sheet"
          >
            Sheet
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/skeleton"
          >
            Skeleton
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/slider"
          >
            Slider
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/sonner"
          >
            Sonner
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/switch"
          >
            Switch
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/table"
          >
            Table
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/tabs"
          >
            Tabs
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/textarea"
          >
            Textarea
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/toast"
          >
            Toast
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/toggle"
          >
            Toggle
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            target=""
            rel=""
            href="/docs/components/toggle-group"
          >
            Toggle Group
          </a>
          <a
            class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline"
            routerLink="/tooltip"
          >
            Tooltip
          </a>
        </div>
      </div>
    </div>
  `,
  styles: `
    sc-sidebar-content {
      @apply flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarContent {}
