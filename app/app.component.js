"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var addFood_model_1 = require('./addFood.model');
var AppComponent = (function () {
    function AppComponent() {
        this.foodList = [
            new addFood_model_1.Food("Ugali", "Brown sorghum Ugali", 250),
            new addFood_model_1.Food("Managu", "Steamed green veggies", 129),
            new addFood_model_1.Food("Beef", "Fried half kilo", 400),
            new addFood_model_1.Food("Chips", "Deep fried potatoes", 330),
            new addFood_model_1.Food("Kebab", "Deep fried snack", 312),
            new addFood_model_1.Food("Spaghetti", "Boiled carbs", 250),
        ];
        this.selectedFood = this.foodList[0];
    }
    AppComponent.prototype.showDetails = function (clickedFood) {
        this.selectedFood = clickedFood;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-foodie',
            template: "\n  <h1>MY FOOD DIARY</h1>\n    <addfood\n    [newFood] = \"foodList\"\n    ></addfood>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map