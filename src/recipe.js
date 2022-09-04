export default class Recipe{
    
    constructor(name){
        this._name = name;
        this._ingredients = new Array();
    }

    /*
    addIngredient(ingredient){
        for(let i = 0; i < this._ingredients.length; i++){
            if(ingredient.getProductId() === this.ingredients[i].getProductId()){
                this._ingredients[i] = ingredient;
                return;
            }
        }
        this._ingredients.push(ingredient);
    }
    */
    
    addIngredient(ingredient){
        let index = this._encontrarIngredients(ingredient);

        if(index >= 0){
            this._ingredients[index] = ingredient;
        } else {
            this._ingredients.push(ingredient); 
        }
    }

    _encontrarIngredients(ingredient){
        for(let i = 0; i < this._ingredients.length; i++){
            if(ingredient.getProductId() === this._ingredients[i].getProductId()){
                return i;
            }
        }
    }
    
    removeIngredient(productId){
        let index = this._findIngredientsById(productId);
        
        if(index >= 0){
            this._ingredients.splice(index, 1);
            return true;
        } else {
            return false;
        }

    }

    _findIngredientsById(productId){
        for(let i = 0; i < this._ingredients.length; i++){
            if(productId == this._ingredients[i].getProductId()){
                return i;
            }
        }
    }

    getNumberOfIngredients(){
        return this._ingredients.length;
    }

    getCost(){
        let cost = 0;

        this._ingredients.forEach((ingredient) => {
            cost += ingredient.getCost();
        });

        return cost;
    }

    getList(){
        let list = new Array();
        let part2;

        this._ingredients.forEach((ingredient) => {
            let str = `${ingredient.getAmountFormatted()} de ${ingredient.getName()} ($${ingredient.getCost()})`;

            if(ingredient.hasExpired()){
                part2 = " expirado"
            } else {
                part2 = ` ${ingredient.daysToExpire()} días para expirar`;
            }

            list.push(str + part2);
        })

        return list;
    }
}