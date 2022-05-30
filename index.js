// # Модуль 3. Занятие 1. Объекты

// const books = [
//   {
//     title: "The Last Kingdom",
//   },
//   {
//     title: "На берегу спокойных вод",
//   },
//   {
//     title: "Сон смешного человека",
//   },
// ];

// const bookNames = [];

// for (const book of books) {
//   // book = {
//   //     title: "The Last Kingdom",
//   //   },

//   bookNames.push(book.title);
//   bookNames.push(book["title"]);
// }

// console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// ```js
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// console.log("keys", keys);
// ```

// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log(salaries);
// const salaries1 = {};
// // const salaries = {};
// // 1) Робимо ф - ю де параметром є обєкт
// // 2) Потрібно просумувати значення обєкта
// // 3) Додати перевірка на порожній обєкт

// const calcSalaries = function (salaries) {
//   const values = Object.values(salaries);
//   if (values.length === 0) {
//     return 0;
//   }
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };
// // calcSalaries(salaries1);
// console.log(calcSalaries(salaries));
// let total = 0;
// for (const salary in salaries) {
//   total += salaries[salary];
// }

// console.log(total);

// ```

// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// ### Код

// ```js
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let targetStone = null;
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       targetStone = stone;
//     }
//   }
//   return targetStone.price * targetStone.quantity;
// }

// console.log(calcTotalPrice(stones, "Щебень"));

// ```

// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

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
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: account.transactions.length,
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
    account.balance += amount;
    const transaction = account.createTransaction(amount, Transaction.DEPOSIT);
    account.transactions.push(transaction);
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
  withdraw(amount) {
    if (amount > account.balance) {
      return "Не вистачає коштів";
    }
    account.balance -= amount;
    const transaction = account.createTransaction(amount, Transaction.WITHDRAW);
    account.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return account.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of account.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Операції не знайдено";
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of account.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

console.log(account.getBalance()); // 0
account.deposit(150);
account.deposit(550);
account.deposit(50);
account.deposit(1150);
account.withdraw(350);
account.withdraw(150);
console.log(account.getBalance()); // 100
console.log(account.transactions);
console.log(account.getTransactionDetails(100));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// ```
