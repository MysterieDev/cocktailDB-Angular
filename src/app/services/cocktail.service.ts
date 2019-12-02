import { Cocktail } from "./../models/Cocktail.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CocktailService {
  cocktailSubject = new Subject<Cocktail>();

  constructor(private http: HttpClient) {}

  readonly endpoint: string = "https://www.thecocktaildb.com/api/json/v1/1/";

  getAlcoholicCocktails(): Observable<Cocktail[]> {
    return this.http
      .get(this.endpoint + "filter.php?c=Cocktail")
      .pipe(map((data: any) => data.drinks.map(Cocktail.adapt)));
  }

  getAlcoholicCocktail(id: string) {
    this.http
      .get(this.endpoint + "lookup.php?i=" + id)
      .pipe(map((data: any) => data.drinks.map(Cocktail.adapt)))
      .subscribe(res => {
        console.log(res);
        this.cocktailSubject.next(res[0]);
      });
  }

  getSearchedCocktail(id: string) {
    this.http
      .get(this.endpoint + "lookup.php?i=" + id)
      .pipe(map((data: any) => data.drinks.map(Cocktail.adapt)))
      .subscribe(res => {
        console.log(res);
        this.cocktailSubject.next(res[0]);
      });
  }

  getAllSearch(searchTerm: string) {
    const emptyResults: Cocktail[] = [];
    return this.http.get(this.endpoint + "search.php?s=" + searchTerm).pipe(
      map((data: any) => data.drinks.map(Cocktail.adapt)),
      catchError(err => of(emptyResults))
    );
  }
}
