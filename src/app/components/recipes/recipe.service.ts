import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import  { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe("Apple Pie",
      "Cool apple pie",
      "https://www.tasteofhome.com/wp-content/uploads/2018/03/exps6086_HB133235C07_19_4b_WEB-696x696.jpg",
      [
        new Ingredient("Apples", 7),
        new Ingredient("Eggs", 1),
        new Ingredient("Milk", 2),
        new Ingredient("Flour", 3)
      ]
    ),
    new Recipe("Cherry Pie",
      "Warm cherry pie",
      "https://www.tasteofhome.com/wp-content/uploads/2018/03/exps6086_HB133235C07_19_4b_WEB-696x696.jpg",
      [
        new Ingredient("Cherries", 15),
        new Ingredient("Eggs", 2),
        new Ingredient("Milk", 3),
        new Ingredient("Flour", 4)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
