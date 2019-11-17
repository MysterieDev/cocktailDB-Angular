import { alcoholicDrink } from './../models/alcoholicDrink.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-shell',
  templateUrl: './dashboard-shell.component.html',
  styleUrls: ['./dashboard-shell.component.scss']
})
export class DashboardShellComponent implements OnInit {
  firstWelcome: boolean = true;
  singleCocktail: alcoholicDrink;
  constructor() { }

  ngOnInit() {
  }

  private clickedFirstWelcome(){
    console.log("click");
    this.firstWelcome = false;
  }

  getAlcoholicCocktail(id: String){
    console.log("clicked" + id );
    /* this.cocktailSingle = this.cocktailSvc.getAlcoholicCocktail(id); */
  }

}
