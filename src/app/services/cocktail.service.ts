import { Cocktail } from "./../models/Cocktail.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CocktailService {
  cocktailSubject = new Subject<Cocktail>();

  constructor(private http: HttpClient) {}

  readonly endpoint: String = "https://www.thecocktaildb.com/api/json/v1/1/";

  getAlcoholicCocktails(): Observable<Cocktail[]> {
    return this.http
      .get(this.endpoint + "filter.php?c=Cocktail")
      .pipe(map((data: any) => data.drinks.map(Cocktail.adapt)));
  }

  getAlcoholicCocktail(id: String) {
    this.http
      .get(this.endpoint + "lookup.php?i=" + id)
      .pipe(map((data: any) => data.drinks.map(Cocktail.adapt)))
      .subscribe(res => {
        console.log(res);
        this.cocktailSubject.next(res[0]);
      });
  }

  getSearchedCocktail(id: String) {
    this.http
      .get(this.endpoint + "lookup.php?i=" + id)
      .pipe(map((data: any) => data.drinks.map(Cocktail.adapt)))
      .subscribe(res => {
        console.log(res);
        this.cocktailSubject.next(res[0]);
      });
  }

  getAllSearch(searchTerm: String) {
    return this.http
      .get(this.endpoint + "search.php?s=" + searchTerm)
      .pipe(map((data: any) => data.drinks.map(Cocktail.adapt)));
  }
}
