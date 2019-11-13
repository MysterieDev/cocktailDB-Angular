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


  readonly endpoint: String = "https://www.thecocktaildb.com/api/json/v1/1/";

  constructor(private http: HttpClient) {}

   public getAlcoholicCocktails(): Observable<any>  {
    return this.http.get<any>(this.endpoint + "filter.php?c=Cocktail").pipe(
      map(data => {data = data.drinks; return data;}
    ))}
   


}
