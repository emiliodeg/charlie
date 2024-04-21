import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionComponent {
  @Input() style: 'primary' | 'secondary' = 'primary';
  @Input() link: string[] = [];
  @Input() label: string = '';
}
