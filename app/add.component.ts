import { Component, EventEmitter } from '@angular/core';
import { Food } from './addFood.model';

@Component({
  selector: 'addFood',
  template: `
    <div *ngFor="let currentTask of childTaskList">

      <h3>{{ currentTask.description }}</h3>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class AddComponent {

};
