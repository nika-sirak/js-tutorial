/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('objC:', objC);
// console.log('objB:', objB);

// const objA = Object.create(objB);
// objA.x = 8;

// console.log('objA:', objA);

// const dummyObj = Object.create({
//   message: 'Это свойство на объектa прототипa',
// });
// dummyObj.message = 'Это собственное свойство объекта';

// console.log(dummyObj);

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*


 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

// const Car = function ({ brand, model, price } = {}) {
//   // 2. Функция вызывается в контексте созданного объекта,
//   //    то есть в this записывается ссылка на него

//   this.brand = brand;
//   this.model = model;
//   this.price = price;

// 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
// 4. Ссылка на обьект возвращается в место вызова new Car
// };

//  Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :) ');
//   };

//   Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
//   };
// // 1. Если функция вызывается через оператор new, создаётся пустой объект
// const myCar1 = new Car({
//   brand: 'Audi',
//   model: 'cv',
//   price: 3500,
// });
// myCar1.sayHi();
// myCar1.changePrice(2000);
// console.log(myCar1);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });

// console.log(myCar2);

// const User = function ({ email, pwd } = {}) {
//   this.email = email;
//   this.pwd = pwd;
// };
// User.prototype.changePwd = function (newPwd) {
//   this.pwd = newPwd;
// };
// const newUser = new User({ email: '4@gmail.com', pwd: '123456fg' });

// console.log(newUser);

/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

// User.message =
//   'Я статическое свойство, меня нет на экземплярах или в прототипе.';

// User.logInfo = function (obj) {
//   console.log('User.logInfo -> obj', obj);
//   console.log('Почта: ', obj.email);
//   console.log('Пароль: ', obj.password);
// };

// console.dir(User);
// console.log(newUser);

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()

/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */

// class Car {
//   static description = 'Класс описывающий автомобиль';

//   static logInfo(carObj) {
//     console.log('Car.logInfo -> carObj', carObj);
//   }

//   // #test = 'test';

//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this._model = model;
//     this.price = price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   get model() {
//     return this._model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }
// }

// console.dir(Car);

// const carInstance = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// carInstance.model = 'Q6';
// console.log(carInstance.model);

// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);

/*
 * Наследование
 *  - extends
 *  - super()
 */
// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} получает ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// const mango = new Hero({ name: 'mango', xp: 1000 });
// console.log(mango);

// class Warrior extends Hero {
//   constructor(weapon, ...restProps) {
//     super(restProps);

//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} атакует используя ${this.weapon}`);
//   }
// }

// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
// console.log(mango);

// class Mage extends Hero {
//   constructor({ spells, ...restProps } = {}) {
//     super(restProps);

//     this.spells = spells;
//   }

//   cast() {
//     console.log(`${this.name} что-то там кастует 🧙‍♂️`);
//   }
// }

//6//
// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
//   return;
// };
// Storage.prototype.removeItem = function (item) {
// this.items.splice(this.items.indexOf(item), 1);
// return this.items;
// };
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class ContentWriter extends User {
//   posts;

//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
// console.log(writer); // { email: 'mango@mail.com', posts: [] }
// console.log(writer.email); // 'mango@mail.com'
// writer.addPost('post-1');
// console.log(writer.posts); // ['post-1']
