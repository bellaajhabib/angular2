import {Injectable} from 'angular2/core';
import {Ingredient} from "./ingredient";
import {SHOPPING_LIST} from "../mock/shopping-list";
@Injectable()
export  class ShoppingList{
    getAllItem(){
return SHOPPING_LIST;
    }
    getItem(index:number){

        return SHOPPING_LIST[index];
    }
    getIndexOfItem(item:Ingredient){
        return SHOPPING_LIST.indexOf(item);
    }
    insertItem(item:Ingredient){
        SHOPPING_LIST.push(item);
    }

    deletItem(item:Ingredient){

    }
    updateItem(index:number,item:Ingredient){

    }
}