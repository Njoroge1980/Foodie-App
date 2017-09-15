import { Component } from '@angular/core';
import { AddComponent }from './add.component';
@Component({
  selector: 'my-foodie',
  template: `
  <h1>MY FOOD DIARY</h1>
<addfood>
[]
</addfood>
  `
})




export class AppComponent {
  public foodList : Food [] =
  new Food (Ugali, Brown sorghum Ugali, 250Cal)
  new Food (Managu, Steamed green veggies, 129Cal )
}
