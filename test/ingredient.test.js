import DueDate from "../src/due-date";
import Product from "../src/product";
import Ingredient from "../src/ingredient";
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
  "getName",
  "getProductId",
  "getAmount",
  "getAmountFormatted",
  "getCost",
  "hasExpired",
  "daysToExpire",
  "hasOwnProperty",
  "toLocaleString",
  "valueOf",
  "constructor",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toString",
];

test("Ingredient constructor", () => {
  let sevenDays = 1000 * 60 * 60 * 24 * 7;
  let today = new Date();
  today.setHours(0, 0, 0);
  let nextWeek = new Date(today.getTime() + sevenDays);

  let date = new DueDate(
    nextWeek.getDate(),
    YEAR[nextWeek.getMonth()],
    nextWeek.getUTCFullYear()
  );

  let product = new Product(5, "haRina", 123, date, "kiLo");

  let obj = new Ingredient(product, 0.5);

  expect(obj._product).toBe(product);
  expect(obj._amount).toBe(0.5);
});

test("Ingredient métodos implementados", () => {
  let sevenDays = 1000 * 60 * 60 * 24 * 7;
  let today = new Date();
  today.setHours(0, 0, 0);
  let nextWeek = new Date(today.getTime() + sevenDays);

  let date = new DueDate(
    nextWeek.getDate(),
    YEAR[nextWeek.getMonth()],
    nextWeek.getUTCFullYear()
  );

  let product = new Product(5, "haRina", 123, date, "kiLo");

  let obj = new Ingredient(product, 0.5);

  expect(obj.getName()).toBe("Harina");
  expect(obj.getProductId()).toBe(5);
  expect(obj.getAmount()).toBe(0.5);
  expect(obj.getAmountFormatted()).toBe("0.5 Kilo");
  expect(obj.getCost().toFixed(2)).toBe("61.50");
  expect(obj.hasExpired()).toBe(false);
  expect(obj.daysToExpire()).toBe(7);
});

test("Ingredient métodos encapsulados", () => {
  let sevenDays = 1000 * 60 * 60 * 24 * 7;
  let today = new Date();
  today.setHours(0, 0, 0);
  let nextWeek = new Date(today.getTime() + sevenDays);

  let date = new DueDate(
    nextWeek.getDate(),
    YEAR[nextWeek.getMonth()],
    nextWeek.getUTCFullYear()
  );

  let product = new Product(5, "haRina", 123, date, "kiLo");

  let obj = new Ingredient(product, 0.5);

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
