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
var AddComponent = (function () {
    function AddComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AddComponent.prototype, "newFood", void 0);
    AddComponent = __decorate([
        core_1.Component({
            selector: 'addFood',
            template: "\n    <div *ngFor=\"let currentFood  of newFood\">\n\n      <h3>{{ currentFood.name }}</h3>\n      <button (click)=\"showDetails(clickedFood)\" {{selectedFood.}}><h3>\n\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
;
//# sourceMappingURL=add.component.js.map