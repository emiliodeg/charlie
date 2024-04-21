import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICard } from '@app/models/card.model';
import { IResponsePaginated } from '@app/models/response.modal';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  // #http = inject(HttpClient);

  //fetchCards$ = this.#http.get<IResponsePaginated<ICard>>(`${environment.apiUrl}/cards`)

  // ? mocked data for testing proposal
  fetchCards$ = of<IResponsePaginated<ICard>>({
    data: [
      {
        id: '00000000-0000-4000-8000-000000000000',
        name: 'MasterCard',
        number: '1234567890123456',
        balance: 123.45,
        colors: ['#000000', '#ffffff'],
        picture: './assets/icons/mastercard.svg',
      },
      {
        id: '00000000-0000-4000-8000-000000000001',
        name: 'Visa',
        number: '5678901234512346',
        balance: 784.56,
        colors: ['#000000', '#ffffff'],
        picture: './assets/icons/visa.svg',
      },
    ],
    total: 2,
    page: 1,
    error: '',
  });
}
