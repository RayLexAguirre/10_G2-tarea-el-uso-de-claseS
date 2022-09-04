export default class Ingredient{
    constructor(product, amount){
        this._product = product;
        this._amount = amount;
    }

    getName(){
        return this._product.getName();
    }

    getProductId(){
        return this._product.getId();
    }

    getAmount(){
        return this._amount;
    }

    getAmountFormatted(){
        return `${this._amount} ${this._product.getUnits()}`
    }

    getCost(){
        let precioCantidad = this._amount;
        let precioCost = this._product.getPrice();

        return precioCost * precioCantidad;

    }

    hasExpired(){
        return this._product.hasExpired();
    }

    daysToExpire(){
        return this._product.daysToExpire();
    }
}