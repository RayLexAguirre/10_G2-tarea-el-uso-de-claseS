import DueDate from "../src/due-date";
import Product from "../src/product";
import Ingredient from "../src/ingredient";
import Recipe from "../src/recipe";
import getMethods from "./get-methods";

const YEAR = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

const METHODS = [
  "addIngredient",
  "removeIngredient",
  "getNumberOfIngredients",
  "getCost",
  "getList",
  "hasOwnProperty",
  "toLocaleString",
  "valueOf",
  "constructor",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toString",
];

test("Recipe constructor", () => {
  let obj = new Recipe("Pizza");

  expect(obj._name).toBe("Pizza");
  expect(obj._ingredients.length).toBe(0);
});

test("Recipe métodos implementados", () => {
  let sevenDays = 1000 * 60 * 60 * 24 * 7;
  let today = new Date();
  today.setHours(0, 0, 0);
  let nextWeek = new Date(today.getTime() + sevenDays);
  let lastWeek = new Date(today.getTime() - sevenDays);

  let date = new DueDate(
    nextWeek.getDate(),
    YEAR[nextWeek.getMonth()],
    nextWeek.getUTCFullYear()
  );

  let date2 = new DueDate(
    lastWeek.getDate(),
    YEAR[lastWeek.getMonth()],
    lastWeek.getUTCFullYear()
  );

  let product = new Product(5, "haRina", 123, date, "kiLo");

  let product2 = new Product(6, "AZúcar", 100, date2, "gramos");

  let i1 = new Ingredient(product, 0.5);
  let i2 = new Ingredient(product2, 0.5);
  let i3 = new Ingredient(product, 1);
  let i4 = new Ingredient(product2, 1);

  let obj = new Recipe("Pizza");

  obj.addIngredient(i1);
  expect(obj._ingredients.length).toBe(1);

  obj.addIngredient(i2);
  expect(obj._ingredients.length).toBe(2);

  obj.addIngredient(i3);
  expect(obj._ingredients.length).toBe(2);

  expect(obj.removeIngredient(6)).toBe(true);
  expect(obj._ingredients.length).toBe(1);

  expect(obj.removeIngredient(6)).toBe(false);
  expect(obj._ingredients.length).toBe(1);

  obj.addIngredient(i2);
  expect(obj.getNumberOfIngredients()).toBe(2);

  expect(obj.getCost()).toBe(173);

  let l = obj.getList();
  expect(l.length).toBe(2);

  expect(l[0]).toBe("1 Kilo de Harina ($123) 7 días para expirar");
  expect(l[1]).toBe("0.5 Gramos de Azúcar ($50) expirado");
});

test("Recipe métodos encapsulados", () => {
  let obj = new Recipe("Pizza");

  Object.getOwnPropertyNames(obj).filter(
    (item) => typeof obj[item] === "function"
  );
  let methods = getMethods(obj);

  let notEncapsulated = [];
  methods.forEach((m) => {
    if (!m.startsWith("_")) {
      if (!METHODS.find((element) => element === m)) {
        notEncapsulated.push(m);
      }
    }
  });

  if (notEncapsulated.length > 0) {
    console.log(notEncapsulated);
  }

  expect(notEncapsulated.length).toBe(0);
});
