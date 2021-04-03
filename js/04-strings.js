/*
 * Длина строки, свойство length
 */
// let message = 'В этой строке 26 символов.';
// let result = `${message.slice(0, 6)}...`;
// console.log(result);

/*
 * Конкатенация строк сшиті рядки
 */
// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// console.log(firstName + ' ' + lastName);

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

// const room = 716;
// const type = 'VIP';

// const welcomeMes =
//   'Гость ' +
//   firstName +
//   ' ' +
//   lastName +
//   'поселяется в ' +
//   type +
//   ' номер ' +
//   room;
// console.log(welcomeMes);
// const welcomeMes = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMes);
/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

/*
 * Нормализация с методом toLowerCase()
 */
// const brand = 'Samsung';
// const normalizeBrand = brand.toLowerCase();
// console.log(normalizeBrand);

// let brand = 'samSUng';
// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
// console.log(brand);

/*
 * Поиск в строке с методом includes()
 */
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLowerCase().includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

/*
 * Операторы равенства (== и ===) и неравества (!= и !==)
 * ✅ «ВСЕГДА ИСПОЛЬЗУЕМ СТРОГОЕ РАВЕНСТВО (===) и НЕРАВЕНСТВО (!==)»
 */

// console.log();
