import { Drink } from './../models/Drink.model';
import { alcoholicDrink } from './../models/alcoholicDrink.model';
import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktailSubject = new Subject<alcoholicDrink>();

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

    getAlcoholicCocktail(id: String){
      this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007").pipe(
        map(
          (data: any) => data.drinks.map(
            alcoholicDrink.adapt
          )
        )
      ).subscribe(
        res => { this.cocktailSubject.next(res) }
      )
    }
    
  }
