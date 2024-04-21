import {
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appBalanceColor]',
  standalone: true,
})
export class BalanceColorDirective implements OnInit {
  @Input({ required: true }) appBalanceColor!: number;

  #container = inject(ViewContainerRef);

  ngOnInit(): void {
    const balanceColor =
      this.appBalanceColor < 0 ? 'balance-negative' : 'balance-positive';

    this.#container.element.nativeElement.classList.add(balanceColor);
  }
}
