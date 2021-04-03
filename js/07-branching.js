/*
 * Оператор ветвеления if
 */
// if (0) {
//   console.log('hey');
// }
// console.log('дальше');

/*
 * Оператор ветвления if...else
 */

// if (5 > 30) {
//   console.log('x < y');
// } else {
//   console.log('x > y');
// }

/*
 * Оператор ветвления else...if
 */

// const salary = 500;
// if (salary <= 500) {
//   console.log('Level 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Level 2');
// } else if (salary > 1500) {
//   console.log('Level 3');
// } else {
//   console.log('No salary');
// }

/*
 * Тернарный оператор
 */
const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }
const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
console.log(message);

/*
 * Блочная область видимости переменных
 */

if (true) {
  const a = 5;
  console.log(a);
}
