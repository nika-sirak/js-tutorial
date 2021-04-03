/*
 * Цикл for
 */

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// console.log('hey');

/*
 * Pre-increment и Post-increment x
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

//  1 сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3 сгенерить случайную зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`Salary for number ${i} - ${salary}`);

//   // 4  прибавить к тоталу
//   totalSalary += salary;
// }
// // 5 лог
// console.log('total salary: ' + totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

//  логика от обратного, сначала плохой кейс...только тогда работаем с хорошим

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log('odd', i);
//     continue;
//   }
//   console.log('even: ', i);
//   total += i;
// }

// console.log('total: ', total);
