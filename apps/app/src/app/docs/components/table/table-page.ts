import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCodeHighlighter } from '@semantic-components/ui';

import { TableDemoSection } from './table-demo-section';

@Component({
  selector: 'app-table-page',
  imports: [ScCodeHighlighter, TableDemoSection],
  template: `
    <app-table-demo-section />

    <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight my-10">Usage</h2>

    <sc-code-highlighter [code]="imports" language="angular-ts" />

    <sc-code-highlighter class="mt-4" [code]="templateHtml" language="angular-html" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TablePage {
  imports = `import {
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

  templateHtml = `<div sc-table-container>
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
</div>`;
}
