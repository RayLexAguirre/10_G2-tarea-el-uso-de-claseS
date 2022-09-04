import DueDate from '../src/due-date';
import getMethods from './get-methods';

const YEAR = [
  'ene',
  'feb',
  'mar',
  'abr',
  'may',
  'jun',
  'jul',
  'ago',
  'sep',
  'oct',
  'nov',
  'dic',
];

const METHODS = [
  'hasExpired',
  'daysToExpire',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'constructor',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
];

test('DueDate constructor', () => {
  let obj = new DueDate(5, 'abr', 2021);

  expect(obj._date.getUTCFullYear()).toBe(2021);
});

test('DueDate implemented métodos', () => {
  let sevenDays = 1000 * 60 * 60 * 24 * 7;
  let today = new Date();
  today.setHours(0, 0, 0);
  let nextWeek = new Date(today.getTime() + sevenDays);
  let lastWeek = new Date(today.getTime() - sevenDays);

  let date1 = new DueDate(
    nextWeek.getDate(),
    YEAR[nextWeek.getMonth()],
    nextWeek.getUTCFullYear()
  );

  let date2 = new DueDate(
    lastWeek.getDate(),
    YEAR[lastWeek.getMonth()],
    lastWeek.getUTCFullYear()
  );

  expect(date1.hasExpired()).toBe(false);
  expect(date2.hasExpired()).toBe(true);
  expect(date1.daysToExpire()).toBe(7);
  expect(date2.daysToExpire()).toBe(-1);
});

test('DueDate  métodos encapsulados', () => {
  let obj = new DueDate(5, 'abr', 2021);

  Object.getOwnPropertyNames(obj).filter(
    (item) => typeof obj[item] === 'function'
  );
  let methods = getMethods(obj);

  let notEncapsulated = [];
  methods.forEach((m) => {
    if (!m.startsWith('_')) {
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
