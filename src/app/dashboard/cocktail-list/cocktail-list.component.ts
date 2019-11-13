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
  cocktailList: alcoholicDrink[] = [];
  constructor(private cocktailSvc: CocktailService) {}

  ngOnInit() {
    this.cocktailSvc.getAlcoholicCocktails().subscribe( res => {
      this.cocktailList  = res; 
      console.log(this.cocktailList);
    } )
  }

  converFromApi(name: String, thumb: String){
    let newDrink = new alcoholicDrink(name, thumb, Date.now());
    return newDrink;
  }

}
