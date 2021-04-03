/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
// два аргумента - 1) callback; 2)об*єкт, в контексте которого будет вызиватся этот calback;
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(number => {
//   console.log(number);
// });

/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(num => num * 2);
// console.log(doubledNums);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

/*
 * Получаем массив имён всех игроков
 */

// const playersName = players.map(player => player.name);
// console.log(playersName);

// const res = players.map(({ name, points }) => ({ name, points }));
// console.log(res);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

// const updatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// console.table(updatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     console.log('hey');

//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );

// console.table(updatedPlayers);

/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */
// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
// console.log(filteredNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
 * Получаем массив всех онлайн игроков
 */

// const onlinePlayers = players.filter(player => player.online);

// console.table(onlinePlayers);
/*
 * Получаем массив всех оффлайн игроков
 */

// const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

/*
 * Получаем список хардкорных игроков с временем больше 250
 */

// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.table(hardcorePlayers);

/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number === 5);
// console.log(number);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
 * Ищем игрока по id
 */
// const playerIdToFind = 'player-3';
// const playerWithId = players.find(player => playerIdToFind === player.id);
// console.log(playerWithId);

// const findPlayerById = (allPlayers, playerId) => {
//   return allPlayers.find(({ id }) => id === playerId);
// };

// console.log(findPlayerById(players, 'player-3'));

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// const isOnlineAll = players.every(player => player.online);
// console.log(isOnlineAll);

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */

// const isAnyOnline = players.some(player => player.online);
// console.log(isAnyOnline);

// const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);

/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// // const total = numbers.reduce((acc, number) => acc + number, 0);

// const total = numbers.reduce((acc, number) => {
//   console.log('number', number);
//   console.log('acc', acc);

//   return acc + number;
// }, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );
// console.log(totalSalary);

/*
 * Считаем общее количество часов
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );
// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0,
// );

// console.log(totalAmount);

/*
 * Собираем все теги из твитов
 */
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */

// const tagsStats = allTags.reduce(
//   (acc, tag) => ({
//     ...acc,
//     // если свойство с ключом tag есть. увеличить его значение на 1
//     // если свойствоства нет с таким ключом что в tag, сделать и записать 1
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {},
// );
// console.log(acc);
// if (acc[tag]) {
//   // acc[tag] += 1;

//   return {
//     ...acc,
//     [tag]: acc.tag + 1,
//   };
// }

// // acc[tag] = 1;
// return {
//   ...acc,
//   [tag]: 1,
// };

// console.log(tagsStats);

/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу,
 *  но отсортирует их по отношению ко всем другим элементам.
 */

// numbers.sort((curEl, nextEl) => nextEl - curEl);
// console.log(numbers);

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread !
 */

// const copy = [...numbers];
// copy.sort();
// const ascSortedNumbers = [...numbers].sort();
// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log(ascSortedNumbers);
// console.log(descSortedNumbers);

/*
 * Кастомная сортировка сложных типов
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// По игровому времени
// const sortedByBestPlayers = [...players].sort(
//   (prev, next) => prev.timePlayed - next.timePlayed,
// );
// console.log(sortedByBestPlayers);

// const byName = [...players].sort((a, b) => {
//   console.log(a.name[0]);
//   const result = a.name[0] > b.name[0];
//   if (result) {
//     return 1;
//   }
//   if (!result) {
//     return -1;
//   }
// });
// console.log(byName);

/*
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1
 */

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));

/*
 * Array.prototype.flatMap(callback)
 * - Комбинация map + flat
 */

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const stats = tweets
//   .flatMap(tweet => tweet.tags)
//   .reduce(
//     (acc, tag) => ({
//       ...acc,
//       [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {},
//   );

// console.log(stats);

/*
 * Цепочки вызовов - chaining
 */
// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

// Цепочка предыдущих трёх
// const sorted = numbers
//   .filter(num => num > 2)
//   .map(num => num * 3)
//   .sort((a, b) => a - b);
// console.log(sorted);

/*
 * Сортируем тех кто онлайн по рангу
 * - сначала фильтруем
 * - потом сортируем
 */
// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
//   { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 200 },
// ];

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((a, b) => a.rank - b.rank);
// console.table(onlineAndSorted);

/*
 * isEmpty()
 */

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

/*
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */

// const user = {
//   name: 'mango',
// location: {
//   city: 'Lviv',
// },
// };

// console.log(_.get(user, 'location.city'));

// console.log(user.location.city);

// if (user && user.location && user.location.city) {
//   console.log(user.location.city);
// }

// console.log(user?.location?.city);

// !!! 9  !!!
// function changeEven(numbers, value) {
//   const evenArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       number = number + value;
//     }
//     evenArray.push(number);
//   });
//   return evenArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// // !!! 16 !!!
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index,
// );

// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//  const allFriends = users.reduce((acc, user) => [...acc, ...user.friends], []);
//  return allFriends.length;
// };
// // Пиши код выше этой строки

// console.log(
//   getTotalFriendCount([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//     },
//   ]),
// );
