import { CocktailService } from "./../../services/cocktail.service";
import { Cocktail } from "./../../models/Cocktail.model";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-cocktail-list",
  templateUrl: "./cocktail-list.component.html",
  styleUrls: ["./cocktail-list.component.scss"]
})
export class CocktailListComponent implements OnInit {
  cocktailList: Cocktail[];

  constructor(private cocktailSvc: CocktailService) {}

  ngOnInit() {
    this.cocktailSvc.getAlcoholicCocktails().subscribe(res => {
      this.cocktailList = res;
      console.log(this.cocktailList);
    });
  }

  cocktailDetail(id: string) {
    console.log(id);
    this.cocktailSvc.getAlcoholicCocktail(id);
  }
}
