/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

// const add = function (a, b) {
//   return a + b;
// };

// const r1 = add(2, 3);
// console.log(r1);
// console.log(add(26, 63));

// const fn = function () {
//   return 11;

//   console.log(1);

//   console.log(2);
//   return 11;
// };

// console.log(fn());

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */
// const fnA = function () {
//   console.log('Выполняется функция A');
// };

// const fnB = function () {
//   console.log('Выполняется функция B');
// };

// const fnC = function () {
//   console.log('Выполняется функция C');
// };

// // console.log('Лог после вызова функции A');
// fnA();

// // console.log('Лог перед вызовом функции B');
// fnB();
// // console.log('Лог после вызова функции B');

// // console.log('Лог перед вызовом функции C');
// fnC();
// // console.log('Лог после вызова функции C');

/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }
// console.log('Total: ', total);

// const calculateTotalPrice = function (items) {
//   console.log('items in fn:', items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };
// const r1 = calculateTotalPrice([1, 2, 3]);
// console.log(`Total summary ${r1}`);
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';
// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден.`;
// console.log(message);

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден`;
//     }
//   }
//   return `Пользователь ${loginToFind} не найден.`;
// };

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const findSmallesNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function (a, ...args) {
//   console.log(a);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn(1, 2, 3, 4, 5, 6);
// fn(1, 2, 3, 5, 4, 6, 7, 8);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function (array, ...args) {
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

// Задача 10

// Выполните рефакторинг заменив объявление
// функции на стрелочную функцию.

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

// const checkNumbers = (a, b) => {
//   return a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;
// };

// console.log(checkNumbers(2, 3));

// Задача 11

// Выполните рефакторинг заменив объявление
// функции на стрелочную функцию.

// function mult(x, y, z) {
//   return x * y * z;
// }

// const mult = (x, y, z) => x * y * z;
// console.log(mult(1, 2, 3));

// Задача 12

// Напишите функции для работы с коллекцией обучающих
// курсов courses:

// 1. addCourse(name) - добавляет курс в конец коллекции
// 2. removeCourse(name) - удаляет курс из коллекции
// 3. updateCourse(oldName, newName)- изменяет имя на новое

// const courses = ['HTML', 'CSS', 'JavaScript', 'React'];

// const addCourse = name => {
//   const x = courses.push(name);
//   console.log(x);
//   return courses;
// };

// const removeCourse = name => {
//   const searchIndex = courses.indexOf(name);
//   console.log(searchIndex);
//   if (searchIndex !== -1) {
//     courses.splice(searchIndex, 1);
//   }

//   return courses;
// };

// const updateCourse = (oldName, newName) => {
//   const searchIndex = courses.indexOf(oldName);
//   if (searchIndex !== -1) {
//     courses.splice(searchIndex, 1, newName);
//   }
//   return courses;
// };

// console.log(addCourse('C++'));
// // console.log(removeCourse('C++'));
// // console.log(removeCourse('Java'));

// console.log(updateCourse('C++', 'C'));
