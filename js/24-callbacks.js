/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(5);
// };

// const fnB = function (number) {
//   console.log('This is fnB log', number);
// };

// fnA('hello', fnB);

/*
 * функция doMath(a, b, callback)
 */

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });

// doMath(12, 3, function (x, y) {
//   return x - y;
// });

/*
 * Отложенный вызов: регистрация событий
 */

// const buttonRef = document.querySelector('.js-button');
// const handleBtnClick = function () {
//   console.log('this is click');
// };

// buttonRef.addEventListener('click', handleBtnClick);

/*
 * Отложенный вызов: геолокация
 */

// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError,
// );

/*
 * Отложенный вызов: интервалы
 */
// const callback = function () {
//   console.log('Через 2 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
// console.log('В коде после таймаута');

/*
 * Фильтр
 */

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//   return value >= 3;
// };

// console.log(filter([1, 2, 3, 4, 5], callback1));

// console.log(
//   filter([1, 2, 3, 4, 5], function (value) {
//     return value <= 2;
//   }),
// );

// const callback3 = function (fruit) {
//   return fruit.quantity >= 150;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// console.log(filter(fruits, callback3));

/*2
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

// const fnA = function (parameter) {
//   const innerVariable = 'значение внутренней переменной функции fnA';

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log('this is inner function');
//   };

//   return innerFunction;
// };
// const fnB = fnA(555);

// fnB();

// console.log(fnB);

/*
 * Поварёнок
 */

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// };

// const mango = makeSheff('Mango');
// mango('tea');

// console.dir(mango);

// const polly = makeSheff('Polly');
// polly('dinner');

/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(2.2514687, 3));

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(2.2514687));
// console.log(rounder3(2.2514687));

/*3!!!
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// const add = function (a, b, c) {
//   return a + b + c;
// };

// const add = (...args) => console.log(args);

// console.log(add(2, 3, 4));

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// const fnA = () => ({ a: 5 });
// console.log(fnA());

/*this!!!!!
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */

/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * call и apply
 */

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log('showThis -> this', this);
// };
// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 10, 15, [10, 12, 20]);
// showThis.apply(objA, [10, 12, [10, 12, 50]]);

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// // changeColor.call(hat, 'orange');
// // console.log(hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'white');
// console.log(sweater);

/*
 * bind
 */

// const changeHatColor = changeColor.bind(hat);
// changeHatColor('blue');
// console.log(hat);

// const changeSweaterColor = changeColor.bind(sweater);
// // changeSweaterColor();

// counter!

// const counter = {
//   value: 0,
//   increment() {
//     console.log('increment -> this', this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log('decrement -> this', this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', function () {
//   console.log('hey');

//   counter.decrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//   console.log('hello');

//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });
