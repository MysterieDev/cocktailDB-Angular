import { Injectable } from '@angular/core';
import { Adapter } from '../common/adapter';

export class alcoholicDrink{
    constructor(
        name: String,
        imgThumb: String,
        created: number
    ){}
}

export class alcoholicDrinkAdapter implements Adapter<alcoholicDrink>{

    adapt(item:any): alcoholicDrink {
        return new alcoholicDrink(
            item.strDrink,
            item.strDrinkThumb,
            Date.now()
        );
    }
}