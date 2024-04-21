import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITransaction } from '@app/models/transaction.model';
import { sortAndGroupBy } from '@app/utils/sort-group-transactions.function';
import { TransactionComponent } from './transaction/transaction.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [DatePipe, TransactionComponent, NgOptimizedImage],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent {
  @Input({ required: true, transform: sortAndGroupBy })
  transactions: Map<string, ITransaction[]> = new Map();
}
