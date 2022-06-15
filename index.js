// // const user = {
// //   name: "John",
// //   age: 30,
// //   // sayHello() {
// //   //   console.log(`Hello, my name is ${this.name}`);
// //   // },
// //   sayHello: function () {
// //     // this
// //     console.log(`Hello, my name is ${this.name}`);
// //   },
// // };

// // // console.log(user.name); // John
// // // console.log(user.age); // 30
// // console.log(user.sayHello()); // [Function: sayHello]

// // const objA = {
// //   showThis() {
// //     console.log(this);
// //   },
// // };

// // const objB = {
// //   foo: objA.showThis(), // foo: undefined
// //   // foo() {
// //   // this - context of objB
// //   // console.log(this)
// //   // }
// // };

// // function showThis() {
// //   console.log(this);
// // }

// // const user = {
// //   name: "John",
// //   age: 30,
// // };

// // // showThis(); // window | undefined

// // const bindShowThis = showThis.bind(user);
// // bindShowThis();

// // // console.log("objA", objA.logCtx); // [Function: logCtx]
// // console.log("objB", objB.foo); // [Function: logCtx]
// // const customer = {
// //   firstName: "Jacob",
// //   lastName: "Mercer",
// //   getFullName() {
// //     console.log("this", this);
// //     return `${this.firstName} ${this.lastName}`;
// //   },
// // };

// // function makeMessage(callback) {
// //   // callback() - це виклик методу getFullName без об'єкта
// //   console.log(`Обробляємо заявку від ${callback()}.`);
// // }

// // const bindedCallback = customer.getFullName.bind(customer);

// // makeMessage(bindedCallback); // Буде помилка у виклику функції

// // const somePeople = {
// //   name: "Serhii",
// //   prof: "hronometr",
// // };

// // function helloMyFriend(args) {
// //   console.log(`hello, ${this.name} ` + args);
// // }

// // const myBind = function (fn) {
// //   // this
// //   const context = this;
// //   return function (...args) {
// //     // this
// //     return fn.apply(context, args);
// //   };
// // };

// // Object.prototype.myBinsProto = myBind;

// // const tesMySelfBind = somePeople.myBinsProto(helloMyFriend);
// // tesMySelfBind(", my dear friend");

// // const showThis = () => {
// //   console.log(this); // window
// // };

// // showThis();

// // # Модуль 5. Занятие 9. Контекст вызова функции и this

// // ## Example 1 - Мастерская драгоценностей

// // Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// // рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// // количеством из свойства `stones`.

// // ```js
// // const chopShop = {
// //   stones: [
// //     { name: "Emerald", price: 1300, quantity: 4 },
// //     { name: "Diamond", price: 2700, quantity: 3 },
// //     { name: "Sapphire", price: 1400, quantity: 7 },
// //     { name: "Ruby", price: 800, quantity: 2 },
// //   ],
// //   calcTotalPrice(stoneName) {
// //     const stone = this.stones.find(({ name }) => name === stoneName);
// //     return stone.price * stone.quantity;
// //   },
// // };

// // console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// // console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// // console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// // console.log(chopShop.calcTotalPrice("Ruby")); // 1600
// // ```

// // ## Example 2 - Телефонная книга

// // Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// // ```js
// // const phonebook = {
// //   contacts: [],
// //   add(contact) {
// //     const newContact = {
// //       list: "default",
// //       ...contact,
// //       id: this.generateId(),
// //       createdAt: this.getDate(),
// //     };
// //     this.contacts.push(newContact);
// //   },
// //   generateId() {
// //     return "_" + Math.random().toString(36).substr(2, 9);
// //   },
// //   getDate() {
// //     return Date.now();
// //   },
// // };

// // console.log(
// //   phonebook.add({
// //     name: "Mango",
// //     email: "mango@mail.com",
// //     list: "friends",
// //   })
// // );
// // console.log(
// //   phonebook.add({
// //     name: "Poly",
// //     email: "poly@hotmail.com",
// //   })
// // );

// // console.log(phonebook.contacts);
// // ```

// // ## Example 3 - Калькулятор

// // Создайте объект `calculator` с тремя методами:

// // - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// // - `add()` - возвращает сумму сохранённых значений.
// // - `mult()` - перемножает сохранённые значения и возвращает результат.

// // ```js
// // const calculator = {
// //   read(a, b) {
// //     this.a = a; // calculator.a = a
// //     this.b = b; // calculator.b = b
// //   },

// //   // read(...args) {
// //   //   this.numbers = args;
// //   // },

// //   add() {
// //     return this.a + this.b;
// //   },

// //   mult() {
// //     return this.a * this.b;
// //   },
// // };
// // // ```

// // calculator.read(5, 4);
// // console.log(calculator);
// // console.log(calculator.add()); // 9
// // console.log(calculator.mult()); // 20
// /////////////////////////////////////////////////////////////////////////////////////////////////

// function User(name, age, status) {
//   // this = {}
//   this.name = name;
//   this.age = age;
//   this.status = "active";
//   //   this.status = status;
//   // return this; // this = {name, age, status}
// }

// User.prototype.sayHello = function () {
//   console.log(`Hello, I am ${this.name}`);
// };

// class User {
//   constructor(name, age, status) {
//     // this = {}
//     this.name = name;
//     this.age = age;
//     this.status = "active";
//     // return this; // this = {name, age, status}
//   }

//   sayHello() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// function Array(...args) {
//   this.args = args;
//   this.length = args.length;
// }

// Array.prototype.map;
// Array.prototype.push;
// Array.prototype.filter;

// 1) User() // this = undefined || window
// 2) new User() // this = {}

// const Bob = new User("Bob", 30, "active"); // { name: "Bob", age: 30 }
// // 1)  this = {} => {name: 'Bob"} => {name: 'Bob', age: 30} => {name: 'Bob', age: 30, status: 'active'}  => return this
// // 2) const Bob ={name: 'Bob', age: 30, status: 'active'}
// // 3) Bob.prototype = User.prototype
// // 4) Bob може користуватися методом SayHello()
// const Alice = new User("Alice", 25, "pending"); // { name: "Alice", age: 25 }
// const Mary = new User("Mary", 20, "unactive"); // { name: "Mary", age: 20 }

// function Student(user) {
//   this.user = user;
// }

// const student = new Student(Bob);

// const numbers = [1, 2, 3, 4, 5];
// const numbers = new Array(1, 2, 3, 4, 5);

// const user = {
//     name: "Bob",
//     age: 30,
// }

// const user = new Object ()

// const name = "Bob".toUpperCase();

// const name = new String("Bob");

// Array
// Object
// String
// Number
// Boolean

// console.log(numbers);

// console.log(Bob);
// console.log(Alice);
// console.log(Mary);
// Bob.sayHello();
// Alice.sayHello();
// Mary.sayHello();

// class User {
//   // Объявление и инициализация статического свойства
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//     STUDENT: "student",
//     MENTOR: "mentor",
//   };

//   //   static getRole(user) {
//   //     return user.role;
//   //   }

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango);
// // console.log(User.Roles);

// // console.log(mango.Roles); // undefined
// // console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// console.log(mango.email);
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true

// # Модуль 5. Занятие 10. Прототипы и классы

// ## Example 1 - Блоггер

// Напиши класс `Blogger` для создания обьекта блоггера со следующим свойствами:

// - `email` - почта, строка
// - `age` - возраст, число
// - `numberOfPosts` - кол-во постов, число
// - `topics` - массив тем на которых специализируется блоггер

// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод `getInfo()`, который, возвращает строку:
// `User ${почта} is ${возраст} years old and has ${кол-во постов} posts`.

// Добавь метод `updatePostCount(value)`, который в параметре `value` принимает
// количество постов которые нужно добавить пользователю.

// ```js
// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
// ```

// ## Example 2 - Хранилище

// Напиши класс `Storage` который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать
// его в свойство `items`.

// Добавь методы класса:

// - `getItems()` - возвращает массив товаров.
// - `addItem(item)` - получает новый товар и добавляет его к текущим.
// - `removeItem(item)` - получает товар и, если он есть, удаляет его из текущих.

// ```js
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// ```

// ## Example 3 - User

// Напиши класс `User` который создаёт объект со свойствами `login` и `email`.
// Объяви приватные свойства `#login` и `#email`, доступ к которым сделай через
// геттер и сеттер `login` и `email`.

// ```js
// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// ```

// ## Example 4 - Заметки

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

const priority = {
  LOW: "low",
  NORMAL: "normal",
  HIGH: "high",
};

const notes = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(text) {
    this.items = this.items.filter((item) => item.text !== text);
  },
  updatePriority(text, newPriority) {
    this.items = this.items.map((item) =>
      item.text === text ? { ...item, priority: newPriority } : item
    );
  },
};

class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };

  constructor(items = []) {
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(text) {
    this.items = this.items.filter((item) => item.text !== text);
  }

  updatePriority(text, newPriority) {
    this.items = this.items.map((item) =>
      item.text === text ? { ...item, priority: newPriority } : item
    );
  }
}

// Добавь методы `addNote(note)`, `removeNote(text)` и
// `updatePriority(text, newPriority)`.

// ```js
const myNotes = new Notes();
console.log(myNotes);

myNotes.addItem({ text: "Моя первая заметка", priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addItem({
  text: "Моя вторая заметка",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeItem("Моя первая заметка");
console.log(myNotes.items);

myNotes.updatePriority("Моя вторая заметка", Notes.Priority.HIGH);
console.log(myNotes.items);
// ```

// ## Example 5 - Toggle

// Напишите класс `Toggle` который принимает объект настроек `{isOpen: boolean}` и
// объявляет одно свойство `on` - состояние вкл/выкл (true/false). По умолчанию
// значение свойства `on` должно быть `false`.

// ```js
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
