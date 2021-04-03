/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);
// friends[1] = 'nik';
// console.log(friends);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// const a = [1, 2, 3];
// const b = a;
// console.log('a: ', a);
// console.log('b: ', b);
// a[0] = 500;
// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i <= friends.length - 1; i += 1) {
//   friends[i] += '-1';
// }
// console.table(friends);

// for (let friend of friends) {
//   friend += '-1';
//   console.log(friend);
// }
// console.table(friends);

/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;
// console.log(message);

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const string = friends.join(', ');
// console.log(string);

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);

// console.log(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.log(cards);

/*
 * Обновление (по индексу)
 */
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);

// cards.splice(index, 1, 'New card-4');
// console.log(cards);

// 21
// function findLongestWord(string) {
//   const array = string.split(' ');

//   let lengthLongestWord = array[0].length;
//   let longestWord = array[0];

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > lengthLongestWord) {
//       lengthLongestWord = array[i].length;
//       longestWord = array[i];
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// // 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 23));

// // 23
// function filterArray(numbers, value) {
//   let newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }

//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// // 25
// function getCommonElements(array1, array2) {
//   let newArray = [];
//   console.log(typeof newArray);
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }

//   return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// 29
// function getEvenNumbers(start, end) {
//   const newArray = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }

//   console.log(newArray);
// }

// console.log(getEvenNumbers(3, 11));

// // 32
// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if ((array[i] = value)) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));

// Модуль 2. Занятие 1. Массивы и функции

// Задача 4

// Вернуть отсортированную копию по алфавиту
// (не меняя исходный массив)
// не использовать Array.prototype.sort()

// const ex4 = [65, 2, 89, -1, 25];

// const bubbleSort = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = 0; j < array.length; j += 1) {
//       if (array[j] > array[j + 1]) {
//         let tmp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = tmp;
//       }
//     }
//   }
//   return array;
// };

// console.log(bubbleSort(ex4));

// Задача 6

// Напиши функцию calculateAverage()
// которая принимает произвольное кол-во
// аргументов и возвращает их среднее значение.
// Все аругменты будут только числами.

// const calculateAverage = function () {
//   const args = arguments;
//   let sum = 0;
//   let arrLength = 0;
//   console.log(args);
//   for (const arg of args) {
//     if (typeof arg !== 'number') {
//       continue;
//     } else {
//       sum += arg;
//       arrLength += 1;
//     }
//   }

//   return sum / arrLength;
// };

// console.log(calculateAverage(1, 2, 3, 4, 'kivi', 8));

// Модуль 2. Занятие 2. Массивы и функции

// 21
// function findLongestWord(string) {
//   const array = string.split(' ');

//   let lengthLongestWord = array[0].length;
//   let longestWord = array[0];

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > lengthLongestWord) {
//       lengthLongestWord = array[i].length;
//       longestWord = array[i];
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// const findLongestWord = function (string) {
//   const splitedArray = string.split(' ');
//   let longest = splitedArray[0];

//   for (let text of splitedArray) {
//     if (text.length > longest.length) {
//       longest = text;
//     }
//   }
//   return longest;
// };
