/*
 * Приведение к булю на примере Boolean(value)
 */

// console.log(Boolean('g'));

/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(5 && 'hey');

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(false || 5 || null || 0);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

// console.log(!5);

/*
 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */
// const x1 = 10;
// const x2 = 30;
// const number = 5;

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);
// console.log(
//   `Число ${number} попадает в отрезок между ${x1} и ${x2}? `,
//   number > x1 && number < x2,
// );
// console.log(
//   `Число ${number} попадает в отрезок до ${x1} или после ${x2}? `,
//   number < x1 || number > x2,
// );

/*
 * Напиши скрипт который проверяет возможность открыть чат с пользователем.
 * Для этого пользователь должен быть:
 * - другом
 * - онлайн
 * - без режима не беспокоить
 */
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Can I open chat?', canOpenChat);

/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

const sub = 'vip';

// если пользователь pro или пользователь vip тогда есть доступ

const canAccessContent = sub == 'pro' || sub == 'vip';
console.log('Есть доступ к контенту? ', canAccessContent);
