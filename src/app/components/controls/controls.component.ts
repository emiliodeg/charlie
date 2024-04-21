import { Component } from '@angular/core';
import { ActionComponent } from '../action/action.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [ActionComponent, NgOptimizedImage],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss',
})
export class ControlsComponent {
  // ? INFO: this account controls depends on the user, their permissions, and preferences
}
