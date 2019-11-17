import { Drink } from './Drink.model';

export class alcoholicDrink implements Drink{
    name: String;
    imgThumb: String;
    id: String;
    instructions? : String;
    constructor(
        name: String,
        imgThumb: String,
        id: String,
        instructions? :String
    ){
      this.name  = name;
      this.imgThumb = imgThumb;
      this.id = id;
      instructions? this.instructions = instructions : null;
    }

    static adapt(item: any): alcoholicDrink {
        return new alcoholicDrink(
          item.strDrink,
          item.strDrinkThumb,
          item.idDrink,
          item.strInstructionsDE ? item.strInstructionsDE: null 
        );
      }
    }


