import { Component } from '@angular/core';
import { Food }from './addFood.model';

@Component({
  selector: 'my-foodie',
  template: `
  <h1>MY FOOD DIARY</h1>
    <addfood
    [newFood] = "foodList"
    ></addfood>
  `
})




export class AppComponent {
  public foodList : Food [] =[

  new Food ("Ugali", "Brown sorghum Ugali", 250),
  new Food ("Managu", "Steamed green veggies", 129 ),
  new Food ("Beef", "Fried half kilo", 400),
  new Food ("Chips", "Deep fried potatoes", 330),
  new Food ("Kebab", "Deep fried snack", 312),
  new Food ("Spaghetti", "Boiled carbs", 250),
];
selectedFood: Food = this.foodList[0];
showDetails(clickedFood: Food) {
  this.selectedFood = clickedFood;
}
}
