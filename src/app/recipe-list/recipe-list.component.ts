import { Component } from '@angular/core';
import { RecipeServiceService } from './recipe-service.service';
import { Recipe } from './Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [];

  constructor(recipeService: RecipeServiceService) {
    this.recipes = recipeService.loadRecipes();
  }

  saveRecipe(
    title: string,
    href: string,
    ingredients: string,
    thumbnail: string
  ) {
    this.recipes.push({
      title: title,
      href: href,
      ingredients: ingredients,
      thumbnail: thumbnail,
    });
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
