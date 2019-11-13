import { CocktailService } from './../../services/cocktail.service';
import { Drink } from './../../models/Drink.model';
import { alcoholicDrink } from './../../models/alcoholicDrink.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  cocktailList: alcoholicDrink[];
  constructor(private cocktailSvc: CocktailService) {}

  ngOnInit() {
    this.cocktailSvc.getAlcoholiCocktails().subscribe( res => {
      this.cocktailList = res;
      console.log(this.cocktailList);
      
    } )
  }

}
