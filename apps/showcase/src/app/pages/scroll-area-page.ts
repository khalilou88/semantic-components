import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-scroll-area-page',
  imports: [],
  template: `
    <div
      class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
    >
      <aside
        class="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-border/40 dark:border-border md:sticky md:block"
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
                  class="group flex w-full items-center px-2 py-1 font-normal text-foreground underline-offset-2 hover:underline underline"
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
      <div class="mx-auto w-full min-w-0 max-w-3xl">
        <div class="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div class="truncate">Docs</div>
          <div class="text-foreground">Scroll-area</div>
        </div>
        <div class="space-y-2">
          <h1 class="scroll-m-20 text-3xl font-bold tracking-tight">Scroll-area</h1>
          <p class="text-base text-muted-foreground">
            <span
              style="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 523px;"
              data-br=":r17f:"
              data-brr="1"
            >
              Augments native scroll functionality for custom, cross-browser styling.
            </span>
          </p>
        </div>
        <div class="flex items-center space-x-2 pt-4">
          <a
            class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-1"
            href="https://www.radix-ui.com/docs/primitives/components/scroll-area"
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </a>
          <a
            class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-1"
            href="https://www.radix-ui.com/docs/primitives/components/scroll-area#api-reference"
            target="_blank"
            rel="noreferrer"
          >
            API Reference
          </a>
        </div>
        <div class="pb-12 pt-8">
          <div class="mdx">
            <div class="group relative my-4 flex flex-col space-y-2">
              <div class="relative mr-auto w-full" dir="ltr" data-orientation="horizontal">
                <div class="flex items-center justify-between pb-3">
                  <div
                    class="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0"
                    style="outline: none;"
                    tabindex="0"
                    data-orientation="horizontal"
                  >
                    <button
                      class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      id="radix-:r17g:-trigger-preview"
                      tabindex="-1"
                      type="button"
                      data-state="active"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Preview
                    </button>
                    <button
                      class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      id="radix-:r17g:-trigger-code"
                      tabindex="-1"
                      type="button"
                      data-state="inactive"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Code
                    </button>
                  </div>
                </div>
                <div
                  class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                  id="radix-:r17g:-content-preview"
                  style="animation-duration: 0s;"
                  tabindex="0"
                  data-state="active"
                  data-orientation="horizontal"
                >
                  <div class="flex items-center justify-between p-4">
                    <button
                      class="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                      dir="ltr"
                      type="button"
                      data-state="closed"
                    >
                      <span class="text-muted-foreground">Style:</span>
                      <span style="pointer-events: none;">Default</span>
                    </button>
                    <div class="flex items-center gap-2">
                      <form
                        action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you're trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                      >
                        <button
                          class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow py-2 z-50 h-[calc(theme(spacing.7)_-_1px)] gap-1 rounded-[6px] bg-black px-3 text-xs text-white hover:bg-black hover:text-white dark:bg-white dark:text-black"
                        >
                          Open in
                        </button>
                      </form>
                      <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm relative z-10 h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&amp;_svg]:h-3.5 [&amp;_svg]:w-3.5"
                      >
                        <span class="sr-only">Copy</span>
                      </button>
                    </div>
                  </div>
                  <div class="theme-zinc w-full" style="--radius: 0.5rem;">
                    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
                      <div
                        class="relative overflow-hidden h-72 w-48 rounded-md border"
                        dir="ltr"
                        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                      >
                        <div
                          class="h-full w-full rounded-[inherit]"
                          style="overflow: hidden scroll;"
                          data-radix-scroll-area-viewport=""
                        >
                          <div style="min-width: 100%; display: table;">
                            <div class="p-4">
                              <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
                              <div class="text-sm">v1.2.0-beta.50</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.49</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.48</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.47</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.46</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.45</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.44</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.43</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.42</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.41</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.40</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.39</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.38</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.37</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.36</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.35</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.34</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.33</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.32</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.31</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.30</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.29</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.28</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.27</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.26</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.25</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.24</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.23</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.22</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.21</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.20</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.19</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.18</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.17</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.16</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.15</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.14</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.13</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.12</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.11</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.10</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.9</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.8</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.7</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.6</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.5</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.4</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.3</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.2</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.1</div>
                              <div
                                class="shrink-0 bg-border h-[1px] w-full my-2"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  id="radix-:r17g:-content-code"
                  tabindex="0"
                  hidden=""
                  data-state="inactive"
                  data-orientation="horizontal"
                >
                  &nbsp;
                </div>
              </div>
            </div>
            <h2
              class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="installation"
            >
              Installation
            </h2>
            <div class="relative mt-6 w-full" dir="ltr" data-orientation="horizontal">
              <div
                class="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0"
                style="outline: none;"
                tabindex="0"
                data-orientation="horizontal"
              >
                <button
                  class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                  id="radix-:r17k:-trigger-cli"
                  tabindex="-1"
                  type="button"
                  data-state="active"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  CLI
                </button>
                <button
                  class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                  id="radix-:r17k:-trigger-manual"
                  tabindex="-1"
                  type="button"
                  data-state="inactive"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Manual
                </button>
              </div>
              <div
                class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative [&amp;_h3.font-heading]:text-base [&amp;_h3.font-heading]:font-semibold"
                id="radix-:r17k:-content-cli"
                style="animation-duration: 0s;"
                tabindex="0"
                data-state="active"
                data-orientation="horizontal"
              >
                <div data-rehype-pretty-code-fragment="">
                  <pre
                    class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                    data-language="bash"
                    data-theme="default"
                  ><code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" data-language="bash" data-theme="default"><span class="line"><span style="color: #b392f0;">npx</span><span style="color: #9ecbff;"> shadcn latest</span><span style="color: #9ecbff;"> add</span><span style="color: #9ecbff;"> scroll-area</span></span></code></pre>
                  <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
                    id="radix-:r17n:"
                    type="button"
                    data-state="closed"
                  >
                    <span class="sr-only">Copy</span>
                  </button>
                </div>
              </div>
              <div
                class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative [&amp;_h3.font-heading]:text-base [&amp;_h3.font-heading]:font-semibold"
                id="radix-:r17k:-content-manual"
                tabindex="0"
                hidden=""
                data-state="inactive"
                data-orientation="horizontal"
              >
                &nbsp;
              </div>
            </div>
            <h2
              class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="usage"
            >
              Usage
            </h2>
            <div data-rehype-pretty-code-fragment="">
              <pre
                class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="tsx"
                data-theme="default"
              ><code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" data-language="tsx" data-theme="default"><span class="line"><span style="color: #f97583;">import</span><span style="color: #e1e4e8;"> ScrollArea  </span><span style="color: #f97583;">from</span><span style="color: #9ecbff;"> "components/ui/scroll-area"</span></span></code></pre>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&amp;_svg]:h-3 [&amp;_svg]:w-3 absolute right-4 top-4"
              >
                <span class="sr-only">Copy</span>
              </button>
            </div>
            <div data-rehype-pretty-code-fragment="">
              <pre
                class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="tsx"
                data-theme="default"
              ><code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" data-language="tsx" data-theme="default"><span class="line"><span style="color: #e1e4e8;">&lt;</span><span style="color: #79b8ff;">ScrollArea</span><span style="color: #b392f0;"> className</span><span style="color: #f97583;">=</span><span style="color: #9ecbff;">"h-[200px] w-[350px] rounded-md border p-4"</span><span style="color: #e1e4e8;">&gt;</span></span>
<span class="line"><span style="color: #e1e4e8;"> Jokester began sneaking into the castle in the middle of the night and leaving</span></span>
<span class="line"><span style="color: #e1e4e8;"> jokes all over the place: under the king's pillow, in his soup, even in the</span></span>
<span class="line"><span style="color: #e1e4e8;"> royal toilet. The king was furious, but he couldn't seem to stop Jokester. And</span></span>
<span class="line"><span style="color: #e1e4e8;"> then, one day, the people of the kingdom discovered that the jokes left by</span></span>
<span class="line"><span style="color: #e1e4e8;"> Jokester were so funny that they couldn't help but laugh. And once they</span></span>
<span class="line"><span style="color: #e1e4e8;"> started laughing, they couldn't stop.</span></span>
<span class="line"><span style="color: #e1e4e8;">&lt;/</span><span style="color: #79b8ff;">ScrollArea</span><span style="color: #e1e4e8;">&gt;</span></span></code></pre>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&amp;_svg]:h-3 [&amp;_svg]:w-3 absolute right-4 top-4"
              >
                <span class="sr-only">Copy</span>
              </button>
            </div>
            <h2
              class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="examples"
            >
              Examples
            </h2>
            <h3
              class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="horizontal-scrolling"
            >
              Horizontal Scrolling
            </h3>
            <div class="group relative my-4 flex flex-col space-y-2">
              <div class="relative mr-auto w-full" dir="ltr" data-orientation="horizontal">
                <div class="flex items-center justify-between pb-3">
                  <div
                    class="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0"
                    style="outline: none;"
                    tabindex="0"
                    data-orientation="horizontal"
                  >
                    <button
                      class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      id="radix-:r17p:-trigger-preview"
                      tabindex="-1"
                      type="button"
                      data-state="active"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Preview
                    </button>
                    <button
                      class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      id="radix-:r17p:-trigger-code"
                      tabindex="-1"
                      type="button"
                      data-state="inactive"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Code
                    </button>
                  </div>
                </div>
                <div
                  class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                  id="radix-:r17p:-content-preview"
                  style="animation-duration: 0s;"
                  tabindex="0"
                  data-state="active"
                  data-orientation="horizontal"
                >
                  <div class="flex items-center justify-between p-4">
                    <button
                      class="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                      dir="ltr"
                      type="button"
                      data-state="closed"
                    >
                      <span class="text-muted-foreground">Style:</span>
                      <span style="pointer-events: none;">Default</span>
                    </button>
                    <div class="flex items-center gap-2">
                      <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm relative z-10 h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&amp;_svg]:h-3.5 [&amp;_svg]:w-3.5"
                      >
                        <span class="sr-only">Copy</span>
                      </button>
                    </div>
                  </div>
                  <div class="theme-zinc w-full" style="--radius: 0.5rem;">
                    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
                      <div
                        class="relative overflow-hidden w-96 whitespace-nowrap rounded-md border"
                        dir="ltr"
                        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                      >
                        <div
                          class="h-full w-full rounded-[inherit]"
                          style="overflow: scroll;"
                          data-radix-scroll-area-viewport=""
                        >
                          <div style="min-width: 100%; display: table;">
                            <div class="flex w-max space-x-4 p-4">
                              <figure class="shrink-0">
                                <div class="overflow-hidden rounded-md">
                                  <img
                                    class="aspect-[3/4] h-fit w-fit object-cover"
                                    style="color: transparent;"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1465869185982-5a1a7522cbcb%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75"
                                    srcset="
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1465869185982-5a1a7522cbcb%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=384&amp;q=75 1x,
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1465869185982-5a1a7522cbcb%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75 2x
                                    "
                                    alt="Photo by Ornella Binni"
                                    width="300"
                                    height="400"
                                    data-nimg="1"
                                  />
                                </div>
                                <figcaption class="pt-2 text-xs text-muted-foreground">
                                  Photo by
                                  <span class="font-semibold text-foreground">Ornella Binni</span>
                                </figcaption>
                              </figure>
                              <figure class="shrink-0">
                                <div class="overflow-hidden rounded-md">
                                  <img
                                    class="aspect-[3/4] h-fit w-fit object-cover"
                                    style="color: transparent;"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1548516173-3cabfa4607e9%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75"
                                    srcset="
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1548516173-3cabfa4607e9%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=384&amp;q=75 1x,
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1548516173-3cabfa4607e9%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75 2x
                                    "
                                    alt="Photo by Tom Byrom"
                                    width="300"
                                    height="400"
                                    data-nimg="1"
                                  />
                                </div>
                                <figcaption class="pt-2 text-xs text-muted-foreground">
                                  Photo by
                                  <span class="font-semibold text-foreground">Tom Byrom</span>
                                </figcaption>
                              </figure>
                              <figure class="shrink-0">
                                <div class="overflow-hidden rounded-md">
                                  <img
                                    class="aspect-[3/4] h-fit w-fit object-cover"
                                    style="color: transparent;"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494337480532-3725c85fd2ab%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75"
                                    srcset="
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494337480532-3725c85fd2ab%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=384&amp;q=75 1x,
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494337480532-3725c85fd2ab%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75 2x
                                    "
                                    alt="Photo by Vladimir Malyavko"
                                    width="300"
                                    height="400"
                                    data-nimg="1"
                                  />
                                </div>
                                <figcaption class="pt-2 text-xs text-muted-foreground">
                                  Photo by
                                  <span class="font-semibold text-foreground">
                                    Vladimir Malyavko
                                  </span>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  id="radix-:r17p:-content-code"
                  tabindex="0"
                  hidden=""
                  data-state="inactive"
                  data-orientation="horizontal"
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center justify-between">
          <a
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            href="/docs/components/resizable"
          >
            Resizable
          </a>
          <a
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
            href="/docs/components/select"
          >
            Select
          </a>
        </div>
      </div>
      <div class="hidden text-sm xl:block">
        <div class="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div class="no-scrollbar h-full overflow-auto pb-10">
            <div class="space-y-2">
              <p class="font-medium">On This Page</p>
              <ul class="m-0 list-none">
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block no-underline transition-colors hover:text-foreground font-medium text-foreground"
                    href="#installation"
                  >
                    Installation
                  </a>
                </li>
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    href="#usage"
                  >
                    Usage
                  </a>
                </li>
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    href="#examples"
                  >
                    Examples
                  </a>
                  <ul class="m-0 list-none pl-4">
                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                        href="#horizontal-scrolling"
                      >
                        Horizontal Scrolling
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              class="group relative flex flex-col gap-2 rounded-lg border p-4 text-sm mt-6 max-w-[80%]"
            >
              <div class="text-balance text-lg font-semibold leading-tight group-hover:underline">
                Bring your app built with shadcn to life on Vercel
              </div>
              <div>Trusted by OpenAI, Sonos, Chick-fil-A, and more.</div>
              <div>
                Vercel provides tools and infrastructure to deploy apps and features at scale.
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs mt-2 w-fit"
              >
                Deploy Now
              </button>
              <a
                class="absolute inset-0"
                href="https://vercel.com/new?utm_source=shadcn_site&amp;utm_medium=web&amp;utm_campaign=docs_cta_deploy_now_callout"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only">Deploy to Vercel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScrollAreaPage {}
