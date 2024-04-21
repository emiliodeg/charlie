import { Injectable } from '@angular/core';
import { IResponsePaginated } from '@app/models/response.modal';
import { ITransaction } from '@app/models/transaction.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  // #http = inject(HttpClient);

  //fetchCards$ = this.#http.get<IResponsePaginated<ICard>>(`${environment.apiUrl}/cards`)

  // ? mocked data for testing proposal
  fetchTransactions$ = of<IResponsePaginated<ITransaction>>({
    data: [
      {
        id: '00000000-0000-4000-8000-000000000000',
        description: `Netflix`,
        amount: -100,
        date: new Date('2024-01-01 12:37:44'),
        picture: 'assets/pictures/netflix.png',
      },
      {
        id: '00000000-0000-4000-8000-000000000001',
        description: `Ruby`,
        amount: 45.99,
        date: new Date('2024-01-02 12:37:44'),
        picture: 'assets/pictures/random.png',
      },
      {
        id: '00000000-0000-4000-8000-000000000002',
        description: `Oliver`,
        amount: 6.32,
        date: new Date('2024-01-03 16:15:44'),
        picture: 'assets/pictures/netflix.png',
      },
      {
        id: '00000000-0000-4000-8000-000000000003',
        description: `Emma`,
        amount: 41.2,
        date: new Date('2024-01-03 02:37:44'),
        picture: 'assets/pictures/netflix.png',
      },
      {
        id: '00000000-0000-4000-8000-000000000004',
        description: `Charlie`,
        amount: 10.03,
        date: new Date('2024-01-07 12:37:44'),
        picture: 'assets/pictures/netflix.png',
      },
      {
        id: '00000000-0000-4000-8000-000000000005',
        description: `Starbucks`,
        amount: -15.32,
        date: new Date('2024-01-07 12:37:44'),
        picture: 'assets/pictures/starbucks.png',
      },
      {
        id: '00000000-0000-4000-8000-000000000006',
        description: `Spotify`,
        amount: -45.99,
        date: new Date('2024-01-07 12:37:44'),
        picture: 'assets/pictures/netflix.png',
      },
      {
        id: '00000000-0000-4000-8000-000000000007',
        description: `Bagelshop`,
        amount: -42.78,
        date: new Date('2024-01-07 12:37:44'),
        picture: 'assets/pictures/netflix.png',
      },
      {
        id: '00000000-0000-4000-8000-000000000008',
        description: `Passive income`,
        amount: 74,
        date: new Date('2024-01-09 12:37:44'),
        picture: 'assets/pictures/random.png',
      },
      {
        id: '00000000-0000-4000-8000-000000000009',
        description: `Cloth shop`,
        amount: -456.99,
        date: new Date('2024-01-09 12:37:44'),
        picture: 'assets/pictures/starbucks.png',
      },
    ],
    total: 50,
    page: 1,
    error: '',
  });
}
