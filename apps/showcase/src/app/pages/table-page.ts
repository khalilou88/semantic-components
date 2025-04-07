import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScTab, ScTabContent, ScTabLabel, ScTabs } from '@semantic-components/experimental';
import {
  ScBreadcrumb,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
  ScCard,
  ScCardContent,
  ScCodeHighlighter,
  ScPageDescription,
  ScPageSubtitle,
  ScPageTitle,
  ScTable,
  ScTableBody,
  ScTableCaption,
  ScTableCell,
  ScTableContainer,
  ScTableFooter,
  ScTableHeader,
  ScTableHeaderGroup,
  ScTableRow,
} from '@semantic-components/ui';
import { SiChevronRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-table-page',
  imports: [
    ScTableContainer,
    ScTable,
    ScTableCaption,
    ScTableRow,
    ScTableHeaderGroup,
    ScTableHeader,
    ScTableBody,
    ScTableFooter,
    ScTableCell,
    SiChevronRightIcon,
    ScBreadcrumb,
    ScBreadcrumbList,
    ScBreadcrumbItem,
    ScBreadcrumbLink,
    ScBreadcrumbPage,
    ScBreadcrumbSeparator,
    ScPageTitle,
    ScPageSubtitle,
    ScPageDescription,
    ScTabs,
    ScTab,
    ScTabLabel,
    ScTabContent,
    ScCard,
    ScCodeHighlighter,
    ScCardContent,
    RouterLink,
  ],
  template: `
    <div class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] px-4">
      <div class="mx-auto w-full max-w-3xl">
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item><a sc-breadcrumb-link>Components</a></li>

            <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Table</span>
            </li>
          </ol>
        </nav>

        <h1 sc-page-title>Table</h1>

        <p sc-page-description>A responsive table component.</p>

        <section class="my-10" id="button-with-loading-state">
          <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
            <sc-tab>
              <sc-tab-label>Preview</sc-tab-label>
              <sc-tab-content>
                <div class="overflow-auto" sc-card>
                  <div class="m-10 flex gap-2 p-0" sc-card-content>
                    <div sc-table-container>
                      <table sc-table>
                        <caption sc-table-caption>A list of your recent invoices.</caption>
                        <thead sc-table-header-group>
                          <tr sc-table-row>
                            <th class="w-[100px]" sc-table-header>Invoice</th>
                            <th sc-table-header>Status</th>
                            <th sc-table-header>Method</th>
                            <th class="text-right" sc-table-header>Amount</th>
                          </tr>
                        </thead>
                        <tbody sc-table-body>
                          @for (item of invoices; track $index) {
                            <tr sc-table-row>
                              <td class="font-medium" sc-table-cell>{{ item.invoice }}</td>
                              <td sc-table-cell>{{ item.paymentStatus }}</td>
                              <td sc-table-cell>{{ item.paymentMethod }}</td>
                              <td class="text-right" sc-table-cell>{{ item.totalAmount }}</td>
                            </tr>
                          }
                        </tbody>
                        <tfoot sc-table-footer>
                          <tr sc-table-row>
                            <td sc-table-cell colspan="3">Total</td>
                            <td class="text-right" sc-table-cell>$2,500.00</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </sc-tab-content>
            </sc-tab>

            <sc-tab>
              <sc-tab-label>Code</sc-tab-label>
              <sc-tab-content>
                <sc-code-highlighter [code]="templateCodeSnippet" language="angular-html" />
              </sc-tab-content>
            </sc-tab>
          </sc-tabs>
        </section>

        <h2 id="usage" sc-page-subtitle>Usage</h2>

        <sc-code-highlighter class="mt-2" [code]="importCodeSnippet" language="angular-ts" />

        <sc-code-highlighter class="mt-2" [code]="templateCodeSnippet" language="angular-html" />
      </div>

      <div class="hidden text-sm xl:block">
        <div class="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div class="no-scrollbar h-full overflow-auto pb-10">
            <div class="space-y-2">
              <p class="font-medium">On This Page</p>
              <ul class="m-0 list-none">
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    routerLink="."
                    fragment="usage"
                  >
                    Usage
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablePage {
  invoices = [
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      totalAmount: '$250.00',
      paymentMethod: 'Credit Card',
    },
    {
      invoice: 'INV002',
      paymentStatus: 'Pending',
      totalAmount: '$150.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      totalAmount: '$350.00',
      paymentMethod: 'Bank Transfer',
    },
    {
      invoice: 'INV004',
      paymentStatus: 'Paid',
      totalAmount: '$450.00',
      paymentMethod: 'Credit Card',
    },
    {
      invoice: 'INV005',
      paymentStatus: 'Paid',
      totalAmount: '$550.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV006',
      paymentStatus: 'Pending',
      totalAmount: '$200.00',
      paymentMethod: 'Bank Transfer',
    },
    {
      invoice: 'INV007',
      paymentStatus: 'Unpaid',
      totalAmount: '$300.00',
      paymentMethod: 'Credit Card',
    },
  ];

  class = signal<string>('block w-full');

  importCodeSnippet = `import {
  ScTable,
  ScTableBody,
  ScTableCaption,
  ScTableCell,
  ScTableContainer,
  ScTableFooter,
  ScTableHeader,
  ScTableHeaderGroup,
  ScTableRow,
} from '@semantic-components/ui';`;

  templateCodeSnippet = `<table sc-table>
  <caption sc-table-caption>A list of your recent invoices.</caption>
  <thead sc-table-header-group>
    <tr sc-table-row>
      <th class="w-[100px]" sc-table-header>Invoice</th>
      <th sc-table-header>Status</th>
      <th sc-table-header>Method</th>
      <th class="text-right" sc-table-header>Amount</th>
    </tr>
  </thead>
  <tbody sc-table-body>
    @for (item of invoices; track $index) {
      <tr sc-table-row>
        <td class="font-medium" sc-table-cell>{{ item.invoice }}</td>
        <td sc-table-cell>{{ item.paymentStatus }}</td>
        <td sc-table-cell>{{ item.paymentMethod }}</td>
        <td class="text-right" sc-table-cell>{{ item.totalAmount }}</td>
      </tr>
    }
  </tbody>
  <tfoot sc-table-footer>
    <tr sc-table-row>
      <td sc-table-cell colspan="3">Total</td>
      <td class="text-right" sc-table-cell>$2,500.00</td>
    </tr>
  </tfoot>
</table>`;
}
