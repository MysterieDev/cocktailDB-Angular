import { Drink } from "./Drink.model";

export class Cocktail implements Drink {
  name: String;
  imgThumb: String;
  id: String;
  instructions?: String;
  ingredient1?: String;
  ingredient2?: String;
  ingredient3?: String;
  ingredient4?: String;
  ingredient5?: String;
  ingredient6?: String;
  ingredient7?: String;
  ingredient8?: String;
  measure1?: String;
  measure2?: String;
  measure3?: String;
  measure4?: String;
  measure5?: String;
  measure6?: String;
  measure7?: String;
  measure8?: String;
  constructor(
    name: String,
    imgThumb: String,
    id: String,
    instructions?: String,
    ingredient1?: String,
    ingredient2?: String,
    ingredient3?: String,
    ingredient4?: String,
    ingredient5?: String,
    ingredient6?: String,
    ingredient7?: String,
    ingredient8?: String,
    measure1?: String,
    measure2?: String,
    measure3?: String,
    measure4?: String,
    measure5?: String,
    measure6?: String,
    measure7?: String,
    measure8?: String
  ) {
    this.name = name;
    this.imgThumb = imgThumb;
    this.id = id;
    instructions ? (this.instructions = instructions) : null;
    ingredient1 ? (this.ingredient1 = ingredient1) : null;
    ingredient2 ? (this.ingredient2 = ingredient2) : null;
    ingredient3 ? (this.ingredient3 = ingredient3) : null;
    ingredient4 ? (this.ingredient4 = ingredient4) : null;
    ingredient5 ? (this.ingredient5 = ingredient5) : null;
    ingredient6 ? (this.ingredient6 = ingredient6) : null;
    ingredient7 ? (this.ingredient7 = ingredient7) : null;
    ingredient8 ? (this.ingredient8 = ingredient8) : null;
    measure1 ? (this.measure1 = measure1) : null,
      measure2 ? (this.measure2 = measure2) : null,
      measure3 ? (this.measure3 = measure3) : null,
      measure4 ? (this.measure4 = measure4) : null,
      measure5 ? (this.measure5 = measure5) : null,
      measure6 ? (this.measure6 = measure6) : null,
      measure7 ? (this.measure7 = measure7) : null,
      measure8 ? (this.measure8 = measure8) : null;
  }

  static adapt(item: any): Cocktail {
    return new Cocktail(
      item.strDrink,
      item.strDrinkThumb,
      item.idDrink,
      item.strInstructionsDE ? item.strInstructionsDE : null,
      item.strIngredient1 ? item.strIngredient1 : null,
      item.strIngredient2 ? item.strIngredient2 : null,
      item.strIngredient3 ? item.strIngredient3 : null,
      item.strIngredient4 ? item.strIngredient4 : null,
      item.strIngredient5 ? item.strIngredient5 : null,
      item.strIngredient6 ? item.strIngredient6 : null,
      item.strIngredient7 ? item.strIngredient7 : null,
      item.strIngredient8 ? item.strIngredient8 : null,
      item.strMeasure1 ? item.strMeasure1 : null,
      item.strMeasure2 ? item.strMeasure2 : null,
      item.strMeasure3 ? item.strMeasure3 : null,
      item.strMeasure4 ? item.strMeasure4 : null,
      item.strMeasure5 ? item.strMeasure5 : null,
      item.strMeasure6 ? item.strMeasure6 : null,
      item.strMeasure7 ? item.strMeasure7 : null,
      item.strMeasure8 ? item.strMeasure8 : null
    );
  }
}
