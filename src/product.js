export default class Product{
    constructor(id, name, price, dueDate, units){
        this._id = id;
        this._name = name;
        this._price = price;
        this._dueDate = dueDate;
        this._units = units;
    }

    getId(){
        return this._id;
    }

    getName(){
        return this._capitalizeWord(this._name);
    }

    getPrice(){
        return this._price;
    }

    hasExpired(){
        return this._dueDate.hasExpired();
    }

    daysToExpire(){
        return this._dueDate.daysToExpire();
    }

    getUnits(){
        return this._capitalizeWord(this._units);
    } 

    _capitalizeWord(word) {
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
}