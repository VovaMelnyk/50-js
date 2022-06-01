// // # Модуль 3. Занятие 1. Объекты

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //   },
// //   {
// //     title: "На берегу спокойных вод",
// //   },
// //   {
// //     title: "Сон смешного человека",
// //   },
// // ];

// // const bookNames = [];

// // for (const book of books) {
// //   // book = {
// //   //     title: "The Last Kingdom",
// //   //   },

// //   bookNames.push(book.title);
// //   bookNames.push(book["title"]);
// // }

// // console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

// // ## Example 1 - Основы обьектов

// // Напиши скрипт, который, для объекта `user`, последовательно:

// // - добавляет поле `mood` со значением `'happy'`
// // - заменяет значение `hobby` на `'skydiving'`
// // - заменяет значение `premium` на `false`
// // - выводит содержимое объекта `user` в формате `ключ:значение` используя
// //   `Object.keys()` и `for...of`

// // ### Код

// // ```js
// // const user = {
// //   name: "Mango",
// //   age: 20,
// //   hobby: "html",
// //   premium: true,
// // };

// // user.mood = "happy";
// // user.hobby = "skydiving";
// // user.premium = false;

// // const keys = Object.keys(user);
// // for (const key of keys) {
// //   console.log(`${key}:${user[key]}`);
// // }

// // console.log("keys", keys);
// // ```

// // ## Example 2 - метод Object.values()

// // У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// // суммирования всех зарплат и сохраните результат в переменной sum. Должно
// // получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// // ### Код

// // ```js
// // const salaries = {
// //   John: 100,
// //   Ann: 160,
// //   Pete: 130,
// // };

// // console.log(salaries);
// // const salaries1 = {};
// // // const salaries = {};
// // // 1) Робимо ф - ю де параметром є обєкт
// // // 2) Потрібно просумувати значення обєкта
// // // 3) Додати перевірка на порожній обєкт

// // const calcSalaries = function (salaries) {
// //   const values = Object.values(salaries);
// //   if (values.length === 0) {
// //     return 0;
// //   }
// //   let total = 0;
// //   for (const value of values) {
// //     total += value;
// //   }
// //   return total;
// // };
// // // calcSalaries(salaries1);
// // console.log(calcSalaries(salaries));
// // let total = 0;
// // for (const salary in salaries) {
// //   total += salaries[salary];
// // }

// // console.log(total);

// // ```

// // ## Example 3 - Массив объектов

// // Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// // обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// // камней с таким именем, ценой и количеством из обьекта

// // ### Код

// // ```js
// // const stones = [
// //   { name: "Изумруд", price: 1300, quantity: 4 },
// //   { name: "Бриллиант", price: 2700, quantity: 3 },
// //   { name: "Сапфир", price: 400, quantity: 7 },
// //   { name: "Щебень", price: 200, quantity: 2 },
// // ];

// // function calcTotalPrice(stones, stoneName) {
// //   let targetStone = null;
// //   for (const stone of stones) {
// //     if (stone.name === stoneName) {
// //       targetStone = stone;
// //     }
// //   }
// //   return targetStone.price * targetStone.quantity;
// // }

// // console.log(calcTotalPrice(stones, "Щебень"));

// // ```

// // ## Example 4 - Комплексные задачи

// // Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// // в котором необходимо реализовать методы для работы с балансом и историей
// // транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */
// const balance = "balance";

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  // createTransaction(amount, type) {
  //   return {
  //     amount,
  //     type,
  //     id: account.transactions.length,
  //   };

  createTransaction(amount, type) {
    // const this = account
    return {
      amount,
      type,
      id: this.transactions.length, // account.transactions.length
    };

    // return {
    //   amount: amount,
    //   type: type,
    //   id: account.transactions.length,
    // };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    // const this = account
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
//   withdraw(amount) {
//     // const this = account
//     if (amount > this.balance) {
//       return "Не вистачає коштів";
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return "Операції не знайдено";
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// console.log(account.getBalance()); // 0
// account.deposit(150);
// account.deposit(550);
// account.deposit(50);
// account.deposit(1150);
// account.withdraw(350);
// account.withdraw(150);
// console.log(account.getBalance()); // 100
// console.log(account.transactions);
// console.log(account.getTransactionDetails(100));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// // ```

// Урок №2

// # Модуль 3 Занятие 6. Деструктуризация и rest/spread

// ## Example 1 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function calcBMI(weight, height) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );
// ```

// ## Example 2 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function printContactsInfo(names, phones) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ```

// ## Example 3 - Глубокая деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 4 - Деструктуризация

// Перепиши функцию так, чтобы она принимала объект параметров со свойствами
// `companyName` и `stock` и выводила репорт о количестве товаров на складе любой
// компании.

// ```js
// // Решение
// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"
// ```

// ## Example 5 - Операция spread

// Дополни функцию `createContact(partialContact)` так, чтобы она возвращала новый
// объект контакта с добавленными свойствами `id` и `createdAt`, а также `list` со
// значением "default" если в `partialContact` нет такого свойства.

// ```js
// // Решение
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
// ```

// ## Example 6 - Операция rest

// Напиши функцию `transformUsername(user)` так, чтобы она возвращала новый обьект
// со свойством `fullName`, вместо `firstName` и `lastName`.

// ```js
// // Решение
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );
// ```

// Можно разобрать вот это тему Изменение имени переменной
// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle, // const firstTitle = firstBook.title
//   // coverImage: firstCoverImage = "https://via.placeholder.com/640/480", // const firstCoverImage = firstBook.coverImage
// } = firstBook;
// const firstCoverImage = "https://via.placeholder.com/640/480";

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смешного человека",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// объясните пожалуйста что тут происходит
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     // object = firstBook
//     // key = title
//     // key = coverImage
//     if (object.hasOwnProperty(key)) {
//       propCount += 1; // = 2
//     }
//   }
//   // Change code above this line
//   return propCount; // 2
// }

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// countProps(firstBook);
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// a 5, b 10, c 15, d 20
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
//  d 20, a 5, b 10, c 50
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
