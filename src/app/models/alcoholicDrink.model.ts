import { Drink } from './Drink.model';

export class alcoholicDrink implements Drink{
    name: String;
    imgThumb: String;
    id: String;
    constructor(
        name: String,
        imgThumb: String,
        id: String
    ){
      this.name  = name;
      this.imgThumb = imgThumb;
      this.id = id;
    }

    static adapt(item: any): alcoholicDrink {
        return new alcoholicDrink(
          item.strDrink,
          item.strDrinkThumb,
          item.idDrink
        );
      }

      getfullName(){
        return this.name;
      }
}


