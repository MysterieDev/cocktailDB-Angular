import { Drink } from './Drink.model';

export class alcoholicDrink implements Drink{
    name: String;
    imgThumb: String;
    created: number
    constructor(
        name: String,
        imgThumb: String,
        created: number
    ){
        name = this.name;
        imgThumb = this.imgThumb;
        created = this.created;
    }

    static adapt(item: any): alcoholicDrink {
        return new alcoholicDrink(
          item.strDrink,
          item.strDrinkThumb,
          Date.now()
        );
      }
}


