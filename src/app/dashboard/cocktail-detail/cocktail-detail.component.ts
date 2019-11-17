import { Subscription, Subject, Observable } from 'rxjs';
import { alcoholicDrink } from './../../models/alcoholicDrink.model';
import { CocktailService } from './../../services/cocktail.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss']
})
export class CocktailDetailComponent implements OnInit,OnDestroy{
  cocktailDetailSub: Subscription;
  singleCocktail: alcoholicDrink;
  
  constructor(private cocktailSvc: CocktailService) { }

  ngOnInit(){
    this.cocktailDetailSub = this.cocktailSvc.cocktailSubject.subscribe(
      res=>{ this.singleCocktail = res})
    }

  ngOnDestroy(){
    this.cocktailDetailSub.unsubscribe();
  }


}
