// const user = {
//   name: "John",
//   age: 30,
//   // sayHello() {
//   //   console.log(`Hello, my name is ${this.name}`);
//   // },
//   sayHello: function () {
//     // this
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// // console.log(user.name); // John
// // console.log(user.age); // 30
// console.log(user.sayHello()); // [Function: sayHello]

// const objA = {
//   showThis() {
//     console.log(this);
//   },
// };

// const objB = {
//   foo: objA.showThis(), // foo: undefined
//   // foo() {
//   // this - context of objB
//   // console.log(this)
//   // }
// };

// function showThis() {
//   console.log(this);
// }

// const user = {
//   name: "John",
//   age: 30,
// };

// // showThis(); // window | undefined

// const bindShowThis = showThis.bind(user);
// bindShowThis();

// // console.log("objA", objA.logCtx); // [Function: logCtx]
// console.log("objB", objB.foo); // [Function: logCtx]
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     console.log("this", this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// const bindedCallback = customer.getFullName.bind(customer);

// makeMessage(bindedCallback); // Буде помилка у виклику функції

// const somePeople = {
//   name: "Serhii",
//   prof: "hronometr",
// };

// function helloMyFriend(args) {
//   console.log(`hello, ${this.name} ` + args);
// }

// const myBind = function (fn) {
//   // this
//   const context = this;
//   return function (...args) {
//     // this
//     return fn.apply(context, args);
//   };
// };

// Object.prototype.myBinsProto = myBind;

// const tesMySelfBind = somePeople.myBinsProto(helloMyFriend);
// tesMySelfBind(", my dear friend");

// const showThis = () => {
//   console.log(this); // window
// };

// showThis();

// # Модуль 5. Занятие 9. Контекст вызова функции и this

// ## Example 1 - Мастерская драгоценностей

// Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// количеством из свойства `stones`.

// ```js
// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(({ name }) => name === stoneName);
//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600
// ```

// ## Example 2 - Телефонная книга

// Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// ```js
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// console.log(phonebook.contacts);
// ```

// ## Example 3 - Калькулятор

// Создайте объект `calculator` с тремя методами:

// - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// - `add()` - возвращает сумму сохранённых значений.
// - `mult()` - перемножает сохранённые значения и возвращает результат.

// ```js
// const calculator = {
//   read(a, b) {
//     this.a = a; // calculator.a = a
//     this.b = b; // calculator.b = b
//   },

//   // read(...args) {
//   //   this.numbers = args;
//   // },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };
// // ```

// calculator.read(5, 4);
// console.log(calculator);
// console.log(calculator.add()); // 9
// console.log(calculator.mult()); // 20
