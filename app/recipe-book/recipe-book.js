System.register(["angular2/core","../mock/recipes"],function(e,t){"use strict";var n,c,o,r=(t&&t.id,this&&this.__decorate||function(e,t,n,c){var o,r=arguments.length,i=r<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,n):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,c);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i}),i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};return{setters:[function(e){n=e},function(e){c=e}],execute:function(){o=function(){function e(){}return e.prototype.getAllRecipe=function(){return c.RECIPES},e.prototype.getRecipe=function(e){return c.RECIPES[e]},e.prototype.getRecipeIndex=function(e){return c.RECIPES.indexOf(e)},e.prototype.insertRecipe=function(e){c.RECIPES.push(e)},e.prototype.deletRecipe=function(e){c.RECIPES.splice(e,1)},e.prototype.updateRecipe=function(e,t){c.RECIPES[e]=t},e=r([n.Injectable(),i("design:paramtypes",[])],e)}(),e("RecipeService",o)}}});