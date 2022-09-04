import DueDate from "../src/due-date";
import Product from "../src/product";
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
  "getId",
  "getName",
  "getPrice",
  "hasExpired",
  "daysToExpire",
  "getUnits",
  "hasOwnProperty",
  "toLocaleString",
  "valueOf",
  "constructor",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toString",
];

test("Product constructor", () => {
  let sevenDays = 1000 * 60 * 60 * 24 * 7;
  let today = new Date();
  today.setHours(0, 0, 0);
  let nextWeek = new Date(today.getTime() + sevenDays);

  let date = new DueDate(
    nextWeek.getDate(),
    YEAR[nextWeek.getMonth()],
    nextWeek.getUTCFullYear()
  );

  let obj = new Product(5, "haRina", 123, date, "kiLo");

  expect(obj._id).toBe(5);
  expect(obj._name.toLowerCase()).toBe("harina");
  expect(obj._dueDate).toBe(date);
  expect(obj._units.toLowerCase()).toBe("kilo");
});

test("Product implemented métodos", () => {
  let sevenDays = 1000 * 60 * 60 * 24 * 7;
  let today = new Date();
  today.setHours(0, 0, 0);
  let nextWeek = new Date(today.getTime() + sevenDays);

  let date = new DueDate(
    nextWeek.getDate(),
    YEAR[nextWeek.getMonth()],
    nextWeek.getUTCFullYear()
  );

  let obj = new Product(5, "haRina", 123, date, "kiLo");

  expect(obj.getId()).toBe(5);
  expect(obj.getName()).toBe("Harina");
  expect(obj.getPrice()).toBe(123);
  expect(obj.hasExpired()).toBe(false);
  expect(obj.daysToExpire()).toBe(7);
  expect(obj.getUnits()).toBe("Kilo");
});

test("Product métodos encapsulados", () => {
  let date = new DueDate(5, "abr", 2021);
  let obj = new Product(5, "haRina", 123, date, "kiLo");

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
