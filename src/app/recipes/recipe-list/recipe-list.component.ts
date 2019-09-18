import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe Name', 'Recipe Desctiption', 'https://images.media-allrecipes.com/userphotos/300x300/6844300.jpg'),
    new Recipe('Recipe Name', 'Recipe Desctiption', 'https://images.herzindagi.info/image/2019/Sep/easy-recipe-to-make-ghevar-main.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
