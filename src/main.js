import DueDate from './due-date.js';
import Product from './product.js';
import Ingredient from './ingredient.js'
import Recipe from './recipe.js';

console.log("DueDate");
let fecha = new DueDate(12, "mar", 2012);
console.log(fecha.hasExpired()); 

console.log("Product");
let producto = new Product(23, "harInA", 200, fecha, "kIlO");
console.log(producto.getId());
console.log(producto.getName());
console.log(producto.getPrice());
console.log(producto.getUnits());
console.log(producto.hasExpired());
console.log(producto.daysToExpire());

console.log("Ingredient");
let ingredientes = new Ingredient(producto, 13);
console.log(ingredientes.getName());
console.log(ingredientes.getProductId());
console.log(ingredientes.getAmount());
console.log(ingredientes.getAmountFormatted());
console.log(ingredientes.getCost());
console.log(ingredientes.hasExpired());
console.log(ingredientes.daysToExpire());

console.log("Recipe");
let receta = new Recipe("Carne en su jugo");
console.log(receta.addIngredient());
//console.log(receta.removeIngredient());
console.log(receta.getNumberOfIngredients());
console.log(receta.getCost());
console.log(receta.getList());

