import {Component} from 'angular2/core';

import {TupperwareComponent} from "./recipe-book/tupperware.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {ShoppingListComponent} from "./shoping-list/shopping-list.componet";

@Component({
    selector: 'my-app',
    template: `
            <header>
            <nav>
                <ul>
                    <li ><a [routerLink]="['Tupperware']">Recipe</a></li>
                    <li ><a [routerLink]="['ShoppingList']">Shopping</a></li>
                </ul>
            </nav>
            </header>
                <div class="main">
                <router-outlet></router-outlet>
                </div>
            
    `,directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/recipe',name:'Tupperware',component:TupperwareComponent,useAsDefault:true},
    {path:'/shopping-list',name:'ShoppingList',component:ShoppingListComponent}
])
export class AppComponent {

}