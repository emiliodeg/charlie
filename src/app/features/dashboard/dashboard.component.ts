import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardsService } from '@app/services/cards.service';
import { TransactionsService } from '@app/services/transactions.service';
import { combineLatest } from 'rxjs';
import { SliderComponent } from '../../components/slider/slider.component';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '@app/components/card/card.component';
import { ControlsComponent } from '@app/components/controls/controls.component';
import { TransactionsComponent } from '@app/components/transactions/transactions.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SliderComponent,
    AsyncPipe,
    CardComponent,
    ControlsComponent,
    TransactionsComponent,
  ],
})
export class DashboardComponent {
  #cardsSrv = inject(CardsService);
  #transactionsSrv = inject(TransactionsService);

  vm$ = combineLatest({
    cards: this.#cardsSrv.fetchCards$,
    transactions: this.#transactionsSrv.fetchTransactions$,
  });
}
