import { alcoholicDrink, alcoholicDrinkAdapter } from './../models/alcoholicDrink.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {


  readonly endpoint: String = "https://www.thecocktaildb.com/api/json/v1/1/";
  private alcoholicCocktails:alcoholicDrink[];

  constructor(private http: HttpClient, private adapter: alcoholicDrinkAdapter) {}

   public getAlcoholiCocktails(): Observable<alcoholicDrink>  {
    return this.http.get(this.endpoint + "filter.php?a=Alcoholic").pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))));
  } 



}
