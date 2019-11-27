import { Cocktail } from "./../models/Cocktail.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-shell",
  templateUrl: "./dashboard-shell.component.html",
  styleUrls: ["./dashboard-shell.component.scss"]
})
export class DashboardShellComponent implements OnInit {
  singleCocktail: Cocktail;
  constructor() {}

  ngOnInit() {}

  getAlcoholicCocktail(id: String) {
    console.log("clicked" + id);
    /* this.cocktailSingle = this.cocktailSvc.getAlcoholicCocktail(id); */
  }
}
