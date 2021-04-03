/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */
// let elementWidth = '50px';

// const result = Number.parseInt(elementWidth);
// console.log(result);

// elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth);

// let elementHeight = '200.74';
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
// let salary = 1000.1236487;
// salary = Number(salary.toFixed(2));
// console.log(salary);
// console.log(Number(salary.toFixed(2)));

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */

// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity));
// console.log(Number(value));

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(2 ** 3);
// console.log(result);
// console.log(Math.pow(2, 3));


/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
// let base = prompt('Give me number ');
// base = Number(base);
// console.log(base);
//  2. попросить ввести степень и сохранить в переменную
// let power = prompt('Give me power');
// power = Number(power);
// console.log(power);
// 3. возвести число в эту степень и вывести
// const result = base ** power;
// console.log(result);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */
// Math.random() * (max - min) + min
// const max = 50;
// const min = 10;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;