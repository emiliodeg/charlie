import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActionComponent } from '../action/action.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, ActionComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
