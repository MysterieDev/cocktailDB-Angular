import { Subscription } from "rxjs";
import { Cocktail } from "./../../models/Cocktail.model";
import { CocktailService } from "./../../services/cocktail.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
@Component({
  selector: "app-cocktail-detail",
  templateUrl: "./cocktail-detail.component.html",
  styleUrls: ["./cocktail-detail.component.scss"]
})
export class CocktailDetailComponent implements OnInit, OnDestroy {
  cocktailDetailSub: Subscription;
  singleCocktail: Cocktail;

  constructor(private cocktailSvc: CocktailService) {}

  ngOnInit() {
    this.cocktailDetailSub = this.cocktailSvc.cocktailSubject.subscribe(res => {
      this.singleCocktail = res;
      console.log(this.singleCocktail);
    });
  }

  ngOnDestroy() {
    this.cocktailDetailSub.unsubscribe();
  }
}
