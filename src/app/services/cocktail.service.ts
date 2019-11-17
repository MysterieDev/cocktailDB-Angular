import { Drink } from './../models/Drink.model';
import { alcoholicDrink } from './../models/alcoholicDrink.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) {}

  readonly endpoint: String = "https://www.thecocktaildb.com/api/json/v1/1/";



    getAlcoholicCocktails():  Observable<alcoholicDrink[]>{
    return this.http.get(this.endpoint+"filter.php?c=Cocktail").pipe(
      map(
        (data: any) => 
          data.drinks.map(
          alcoholicDrink.adapt
        )
      )
    )
  }
    }
   
