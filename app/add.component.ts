import { Component, EventEmitter, Input } from '@angular/core';
import { Food } from './addFood.model';

@Component({
  selector: 'addFood',
  template: `

      <h3>{{ currentFood.name }}</h3>
      <button (click)="showDetails(clickedFood)" {{selectedFood.}}><h3>
    
  `
})

export class AddComponent {
  @Input() newFood: Food[];

};
