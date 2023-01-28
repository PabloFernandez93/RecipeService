import { Injectable } from '@angular/core';
import { Recipe } from './Recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {

  loadRecipes(): Recipe[] {
    return this.recipes;
  }

  private recipes: Recipe[] = [
    {
      title: 'Garlic Butter Rice',
      href: 'http://www.recipezaar.com/Garlic-Butter-Rice-240456',
      ingredients: 'cube chicken bouillon, garlic, margarine, water, rice',
      thumbnail: 'http://img.recipepuppy.com/37625.jpg',
    },
    {
      title: "Grandma's Tomato Soup",
      href: 'http://allrecipes.com/Recipe/Grandmas-Tomato-Soup/Detail.aspx',
      ingredients:
        'butter, flour, salt, sugar, tomato juice, water, egg noodles',
      thumbnail: 'http://img.recipepuppy.com/19234.jpg',
    },
    {
      title: 'Fish Marinade for People Who Hate Fish',
      href: 'http://www.recipezaar.com/Fish-Marinade-for-People-Who-Hate-Fish-265932',
      ingredients:
        'basil, garlic, lemon juice, olive oil, paprika, black pepper, salt, shallot',
      thumbnail: 'http://img.recipepuppy.com/565418.jpg',
    },
    {
      title: 'Baked King Fish/ Cod in Tomato sauce',
      href: 'http://www.recipezaar.com/Baked-King-Fish-Cod-in-Tomato-sauce-86892',
      ingredients:
        'chili powder, cumin, fennel seed, garam masala, garlic, ginger, green chilies, mustard seed, onions, salt, tomato, turmeric, vegetable oil',
      thumbnail: 'http://img.recipepuppy.com/122495.jpg',
    },
    {
      title: 'Fish Vinaigrette',
      href: 'http://www.recipezaar.com/Fish-Vinaigrette-88936',
      ingredients:
        'bay leaf, capers, cod, parsley, tarragon, lemon juice, lemon juice, lemon zest, olive oil, onions, black pepper, peppercorn, salt, tarragon vinegar, tarragon vinegar, water',
      thumbnail: 'http://img.recipepuppy.com/565769.jpg',
    },
    {
      title: 'Coconut Fish A La Dominicana Recipe',
      href: 'http://www.grouprecipes.com/45244/coconut-fish-a-la-dominicana.html',
      ingredients:
        'adobo seasoning, cilantro, red snapper, coconut milk, oregano, salt, orange, seeds, tomato sauce',
      thumbnail: 'http://img.recipepuppy.com/348803.jpg',
    },
    {
      title: 'Fried Rice',
      href: 'http://www.recipezaar.com/Fried-Rice-202571',
      ingredients:
        'ham, rice, eggs, ginger, garlic, onions, peas, salt, green onion, vegetable oil',
      thumbnail: 'http://img.recipepuppy.com/586068.jpg',
    },
    {
      title: 'Spiced Tomato Drink',
      href: 'http://allrecipes.com/Recipe/Spiced-Tomato-Drink/Detail.aspx',
      ingredients:
        'allspice, brown sugar, cinnamon, lemon juice, black pepper, salt',
      thumbnail: 'http://img.recipepuppy.com/16496.jpg',
    },
    {
      title: 'Kansas Tomato Sandwich',
      href: 'http://allrecipes.com/Recipe/Kansas-Tomato-Sandwich/Detail.aspx',
      ingredients: 'butter, lettuce, salt, tomato, american cheese, bread',
      thumbnail: 'http://img.recipepuppy.com/15863.jpg',
    },
  ];
}
