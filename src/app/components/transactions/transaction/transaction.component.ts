import { CurrencyPipe, DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BalanceColorDirective } from '@app/directives/balance-color.directive';
import { ITransaction } from '@app/models/transaction.model';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [NgOptimizedImage, CurrencyPipe, DatePipe, BalanceColorDirective],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent {
  @Input({ required: true }) tx!: ITransaction;
}
