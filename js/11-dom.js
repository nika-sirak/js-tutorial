// const btnAdd = document.querySelector('button[data-add]');
// const resetBtn = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');

// let total = 0;

// btnAdd.addEventListener('click', function () {
//   const value = Number(valueInput.value);

//   total += value;
//   outputEl.textContent = total;
//   valueInput.value = '';
// });

// resetBtn.addEventListener('click', function () {
//   total = 0;
//   outputEl.textContent = total;
// });

// ------ Переменные и ветвления ---------
// 4. Определить площадь круга с радиусом 10см

// let rad = 10;
// let circle = Math.PI * Math.pow(rad, 2);
// console.log(circle);

// 6. Каким будет результат этих выражений?
// console.log('0' == false);
// console.log('0' === false);
// console.log('Ёнанас' < 'ёжик');
// console.log('Ёнанас' === 'ёжик');
// console.log(undefined == null);
// console.log(undefined === null);

// 7. Используя конструкцию if..else, напишите код, который будет спрашивать:
// «Какое «официальное» название JavaScript?». Если пользователь вводит «ECMAScript»,
// то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

// const input = prompt('Какое «официальное» название JavaScript?');
// if (input === 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }

// 8. Перепишите if...else с использованием тернарного оператора.

// const a = 5;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// result = a + b < 4 ? 'Мало' : 'Много';
// console.log(result);
// a + b < 4 ? console.log('Мало') : console.log('Много');

// 9. Что выведет код?

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && "hello");
// console.log(true && 0 && "hello");
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || 2 && 3 || 4);
// console.log(('Mango' && null) || 'false');

// 11. Написать программу которая получит от пользователя число (количество минут) и выведёт
// на экран строку в формате часов и минут.
// пример - 70 покажет 01:10

// let global = 148;
// const hours = Math.floor(global / 60);
// const minute = global % 60;
// const hours2 = String(hours).padStart(2, 0);
// const minute2 = String(minute).padStart(2, 0);
// const resTime = `${hours2}:${minute2}`;
// console.log(resTime);

// let str = 'abc'.padStart(5, 3);
// console.log(str); // "  abc"

// let str1 = 'abc'.padEnd(5, '*');
// console.log(str1); // "abc**"

// let str = 'abc'.padEnd(7, 'def');
// console.log(str); // "abcde"

// -------- Циклы ---------

// 1. Напишите цикл for который выводит в консоль браузера числа по возрастанию от min до max.
// const min = 10;
// const max = 100;
// for (let i = min; i <= max; i += 10) {
//   console.log(i);
// }

// 2. Напишите цикл for который выводит в консоль браузера числа по убыванию от max до min.
// const min = 10;
// const max = 100;
// for (let i = max; i >= min; i -= 10) {
//   console.log(i);
// }

// 3. При помощи цикла for выведите чётные числа от 2 до 10.
// const min = 2;
// const max = 10;
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 4. Напишите цикл, который предлагает ввести число больше 100 через prompt.
// Если посетитель ввёл другое число - попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена в промпт.

// 1) Предполагается, что посетитель вводит только числа.
// 2) Предусматривать обработку нечисловых строк не нужно.

// let check = false;

// do {
//   const input = prompt('Введите число больше 100');
//   if (input) {
//     if (input > 100) {
//       check = false;
//     } else {
//       check = true;
//     }
//   } else {
//     check = false;
//   }
// } while (check);
