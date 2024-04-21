import { CurrencyPipe, NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICard } from '@app/models/card.model';
import { HideCardNumberPipe } from '../../pipes/hide-card-number.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [CurrencyPipe, NgStyle, HideCardNumberPipe, NgOptimizedImage],
})
export class CardComponent {
  @Input({ required: true }) card!: ICard;
}
