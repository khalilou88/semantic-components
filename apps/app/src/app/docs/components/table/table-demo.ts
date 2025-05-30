import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
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

@Component({
  selector: 'app-table-demo',
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
  ],
  template: `
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
  `,
  host: {
    class: 'block w-full',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDemo {
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
}
