import {Injectable} from "angular2/core";
import {RECIPES} from "../mock/recipes";
import {Recipe} from "../shaerd/recipe";

@Injectable()
export class RecipeService{
getAllRecipe(){
    return RECIPES;
}
getRecipe(index:number){
    return RECIPES[index];
}
getRecipeIndex(item:Recipe){
    return RECIPES.indexOf(item);
}
insertRecipe(item:Recipe){
    RECIPES.push(item);
}
deletRecipe(index:number){
    RECIPES.splice(index,1);
}
updateRecipe(index:number,item:Recipe){
    RECIPES[index]=item;
}
}