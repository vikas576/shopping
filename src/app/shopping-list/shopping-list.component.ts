import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  Ingredients: Ingredient[ ] = [ new Ingredient('Bannana', 10),
                                  new Ingredient('Pomegranet', 5)

  ];

  constructor() { }

  ngOnInit() {
  }

}
