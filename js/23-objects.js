/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'My super playlist',
//   rating: 5,
//   tracking: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// Литерал объекта 1
// const x = {};
// 2
// console.log({});
// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };
// fn({ a: 1, b: 2 });
// 3
// const rtfm = function () {
//   return { a: 5 };
// };
// console.log(rtfm());

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

// const playlist = {
//   name: 'My super playlist',
//   rating: 5,
//   tracking: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// playlist.qwe = 5;
// playlist.rating = 10;

// console.log(playlist);
// const propertyName = 'name';

// console.log(playlist[propertyName]);

/*
 * Короткая запись свойств
 */
// const username = 'Mango';
// const email = 'mango@mail.com';

// const signUpData = {
//   username,
//   email,
// };

// console.log(signUpData);

/*
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };
// console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(a === b);
// console.log({ a: 1 } === { a: 1 });

// a.c = 100;
// b.c = 150;
// console.log(a);

/*
 * Массивы и функции это объекты
 */

// const a = [1, 2, 3];
// a.hello = '))';
// console.log(typeof a);

// const fn = function () {
//   console.log('hello');
// };
// fn.hello = '))';
// console.log(fn.hello);

/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

// const playlist = {
//   name: 'My super playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   changeName(newName) {
//     console.log('This is this:', this);
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };
// playlist.changeName('Hi');
// playlist.addTrack('New track');
// playlist.updateRating(10);
// console.log(playlist);
// console.log(playlist.getTrackCount());

/*
 * Перебор через for...in и Object.keys|values|entries
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);
// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }
// console.log(totalFeedback);

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   console.log(value);
//   totalFeedback += value;
// }

// console.log(totalFeedback);

/*
 * Работа с коллекцией (массивом объектов)
 */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.log(friends);

// for (const friend of friends) {
//   console.log(friend.name);

//   friend.newpop = 1;
// }

// console.table(friends);

/*
 * Ищем друга по имени
 */

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return 'Found!';
//     }
//   }
//   return 'Not found!';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

// const getAllNames = function (allFriends) {
//   const arrayOfNames = [];
//   for (const friend of allFriends) {
//     arrayOfNames.push(friend.name);
//   }
//   return arrayOfNames;
// };

// console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 */
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of friends) {
//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

// const getFriendsByStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }
//     friendsByStatus.offline.push(friend);
//   }
//   return friendsByStatus;
// };

// console.log(getFriendsByStatus(friends));

/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [0, ...[1, 2, 3], 4, ...[2, 3, 5]];

// console.log(numbers);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(...temps);
// console.log(Math.min(...temps));

// МАСИВИ різні, але передають посилання на один об*єкт
const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
const b = [...a];

// console.log(a);
// console.log(b);
// console.log(a[0] === b[0]);

// a[0].c = 100;

// console.log(a);
// console.log(b);

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// // const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({}, a, b);

// const c = {
//   name: 'Mango',
//   ...a,
//   ...b,
// };

// console.log(c);

// const defaultSettings = {
//   theme: 'light',
//   showNotification: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   theme: 'dark',
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const { rating, name, trackCount: numberOfTracks = 0, tracks } = playlist;

// console.log(numberOfTracks);

/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, likes);

/*
 * Деструктуризация массивов
 */

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

// Without key meaning
// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));

// // New method
// const entries = Object.entries(authors);
// // console.log(entries);

// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }

/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

// const showProfileInfo = function ({ name, tag, location, ...restProps }) {
//   console.log(name);
// };

// showProfileInfo(profile);

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];

//       if (productName === item.name) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;

//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity() {},
//   decreaseQuantity() {},
// };

// // console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// 19
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const properties = [];
//   for (const product of products) {
//     if (product[propName]) {
//       properties.push(product[propName]);
//     } else {
//       return properties;
//     }
//   }
//   return properties;

//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('name'));

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potionName === potion.name) {
        this.potions.splice(i, 1);
      }
    }
    return `Зелья ${potionName} нет в инвентаре!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (oldName === potion.name) {
        potion.name = newName;
      }
    }
    return `Зелья ${oldName} нет в инвентаре!`;
  },
};

console.log(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: 'Зелье скорости', price: 460 });
atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
atTheOldToad.removePotion('Зелье скорости');

// 5) Напишите функцию, которая принимает
// объект и возвращает
// новый объект без указанного параметра

// Ожидаемый результат - ({ a: 1, b: 2 }, 'b') => { a: 1 }

// const objects = {
//   a: 1,
//   b: 2,
// };

// const newObj = (obj, ...args) => {
//   let newObj = { ...obj };

//   for (const arg of args) {
//     delete newObj[arg];
//   }
//   return newObj;
// };

// console.log(newObj(objects, 'b'));
