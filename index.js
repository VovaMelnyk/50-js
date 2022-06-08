// Поясніть, будь ласка, що тут відбувається:

// const numbers = [5, 10, 15, 20, 25];

// // // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// numbers.forEach(logElement);
// numbers.forEach(showElement);
// // const numbers = [5, 10, 15, 20, 25];
// // 1) number = 5, index = 0, arr = [5, 10, 15, 20, 25]
// // 2) number = 10, index = 1, arr = [5, 10, 15, 20, 25]
// // 3) number = 15, index = 2, arr = [5, 10, 15, 20, 25]
// // 4) number = 20, index = 3, arr = [5, 10, 15, 20, 25]
// // 5) number = 25, index = 4, arr = [5, 10, 15, 20, 25]

// function logElement(number, idx, arr) {
//   console.log(`Індекс ${index}, значення ${number}`);
// }

// function showElement(number, idx, arr) {
//   console.log(`значення ${element}`);
// }

// Під капотом працює цикл for
// for (let i = 0; i < numbers.length; i += 1) {
//
// }

// function processCall(recipient, onAvailable, onNotAvailable) {
// // Имитируем доступность абонента случайным числом
// const isRecipientAvailable = Math.random() > 0.5;

// if (!isRecipientAvailable) {
// onNotAvailable(recipient);
// return;
// }

// onAvailable(recipient);
// }

// function takeCall(name) {
// console.log(`Соединяем с ${name}, ожидайте...`);
// // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
// console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
// // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
// console.log(`Абонент ${name} недоступен, записываем голограмму.`);
// // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// # Модуль 4. Занятие 7. Коллбеки. Стрелочные функции. forEach

// ## Example 1 - Коллбек функции

// Напишите следующие функции:

// - `createProduct(obj, callback)` - принимает объект товара без id, а также
//   колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в
//   свойство `id` и вызывает колбек передавая ему созданный обьект.
// - `logProduct(product)` - коллбек принимающий обьект продукта и логирующий его в
//   консоль
// - `logTotalPrice(product)` - коллбек принимающий обьект продукта и логирующий
//   общую стоимость товара в консоль

// ```js
// // Решение
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// 1) Додати логіку генерації id
// 2) Навчити нашу ф-ю працювати з callback
// 3) callback має вміти приймати обєкт товара

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// function createProduct(product, callback) {
//   const id = Date.now();
//   const newProduct = { ...product, id };
//   //   product.id = id;
//   callback(newProduct);
//   // callback = logTotalPrice
//   // logTotalPrice(newProduct);
// }

// function logProduct(item) {
//   console.log(item);
// }

// function logTotalPrice(item) {
//   console.log(item.price * item.quantity);
//   return item.price * item.quantity;
// }

// ```

// ## Example 2 - Коллбек функции

// Добавьте объекту `account` методы `withdraw(amount, onSuccess, onError)` и
// `deposit(amount, onSuccess, onError)`, где первый параметр это сумма операции, а
// второй и третий - колбеки.

// Метод `withdraw` вызывает onError если amount больше TRANSACTION_LIMIT или
// this.balance, и onSuccess в противном случае.

// Метод `deposit` вызывает onError если amount больше TRANSACTION_LIMIT или меньше
// либо равен нулю, и onSuccess в противном случае.

// ```js
// // Решение
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ```

// ## Example 3 - Коллбек функции

// Напишите функцию `each(array, callback)`, которая первым параметром ожидает
// массив, а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты
// вызова коллбека.

// ```js
// // Решение
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
// ```

// ## Example 4 - Стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ```js
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// ```

// ## Example 5 - Стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ```js
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ```

// ## Example 6 - Инлайн стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ```js
// function each(array, callback) {
//   const newArray = [];
//   for (let el of array) {
//     const result = callback(el);
//     newArray.push(result);
//   }
//   return newArray;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
// ```

// ## Example 7 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// ```js
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// function logItems(items) {
//   items.forEach(function (item, index) {
//     console.log(`${index + 1} - ${item}`);
//   });
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
// ```

// ## Example 8 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// ```js
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   nameList.forEach(function (name, index) {
//     console.log(`${name}: ${phoneList[index]}`);
//   });
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });
// ```

// ## Example 9 - Метод forEach

// Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

// ```js
// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
// ```

//////////////////////////////////// lesson 2 ////////////////////////////////////////////////

// const allCourses = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// 1) course = HTML, index = 0, array = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'] => 0 === 0 => ['HTML']
// 2) course = CSS, index = 1, array = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'] => 1 === 1 => ['HTML','CSS]
// 3) course = HTML, index = 2, array = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'] => 0 === 2 => ['HTML','CSS']
// 4) course = JavaScript, index = 3, array = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'] => 3 === 3 => ['HTML','CSS','JavaScript']
// 5) course = CSS, index = 4, array = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'] => 1 === 4 => ['HTML','CSS','JavaScript']

// const LOW_SCORE = 15;
// const HIGH_SCORE = 70;

// const students = [
//   { name: 'Bob', score: 45 },
//   { name: 'Alice', score: 25 },
//   { name: 'John', score: 60 },
//   { name: 'Jane', score: 70 },
//   { name: 'Mary', score: 90 },
// ]

// // const average = students.filter(
// //   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// // );

// const average = students.filter(
//   ({score}) => score >= LOW_SCORE && score < HIGH_SCORE
// );

// const newArray = []
// for (let student of student) {
//   if (student.score >= LOW_SCORE && student.score < HIGH_SCORE) {
//     newArray.push(student)
//   }
// }

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// const tags = tweets.reduce((allTags, tweet) => allTags.concat(tweet.tags), []);

// 1) allTags = [] => tweet = { id: "000", likes: 5, tags: ["js", "nodejs"] } => allTags.push("js", "nodejs") => allTags = ["js", "nodejs"]
// 2) allTags = ["js", "nodejs"] => tweet = { id: "001", likes: 2, tags: ["html", "css"] } => allTags.push("html", "css") => allTags = ["js", "nodejs", "html", "css"]
// 3) allTags = ["js", "nodejs", "html", "css"] => tweet = { id: "002", likes: 17, tags: ["html", "js", "nodejs"] } => allTags.push("html", "js", "nodejs") => allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs"]
// 4) allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs"] => tweet = { id: "003", likes: 8, tags: ["css", "react"] } => allTags.push("css", "react") => allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react"]
// 5) allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react"] => tweet = { id: "004", likes: 0, tags: ["js", "nodejs", "react"] } => allTags.push("js", "nodejs", "react") => allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]

// console.log(tags)

// # Модуль 4. Занятие 8. Перебирающие методы массива

// ## Коллекция объектов для всех примеров с автомобилями

// ```js
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
// ```

// ## Example 1 - Метод map

// Пусть функция `getModels` возвращает массив моделей (поле model) всех
// автомобилей.

// ```js

// function getModels(cars) {
//   return cars.map(function ({ model }) {
//     return model;
//   });
// }

// function getModels(cars) {
//   return cars.map(({ model }) => model);
// }

// const getModels = (cars) => cars.map(({ model }) => model);

// 1) car = {
//   make: "Honda",
//   model: "CR-V",
//   type: "suv",
//   amount: 14,
//   price: 24045,
//   onSale: true,
// } => model = "CR-V" => [].push("CR-V") => ["CR-V"]
// 2) car = {
//   make: "Honda",
//   model: "Accord",
//   type: "sedan",
//   amount: 2,
//   price: 22455,
//   onSale: true,
// } => model = "Accord" => ["CR-V"].push("Accord") => ["CR-V", "Accord"]

// const getModels = cars => {};

// console.table(getModels(cars));
// ```

// ## Example 2 - Метод map

// Пусть функция `makeCarsWithDiscount` возвращает новый массив объектов с изменным
// значением свойства `price` в зависимости от переданной скидки.

// ```js

// function makeCarsWithDiscount(cars, discount) {
//   return cars.map(function (car) {
//     return {
//       ...car,
//       price: car.price * (1 - discount), // 0.8 //0.6
//     };
//   });
// }

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// const discount20 = makeCarsWithDiscount(cars, 0.2);

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// ```

// ## Example 3 - Метод filter

// Пусть функция `filterByPrice` возвращает массив автомобилей цена которых меньше
// чем значение параметра `threshold`.

// ```js
// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price < threshold);

// console.table("cars", cars);
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// ```

// ## Example 4 - Метод filter

// Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
// onSale которых true.

// ```js
// const getCarsWithDiscount = (cars) =>
//   cars.filter(({ onSale }) => onSale === true);

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.table("cars", cars);
// console.table(getCarsWithDiscount(cars));
// ```

// ## Example 5 - Метод filter

// Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
// совпадает со значением параметра `type`.

// ```js
// const getCarsWithType = (cars, type) =>
//   cars.filter(({ type: carType }) => carType === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));
// ```

// ## Example 6 - Метод find

// ```js
// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

// const getCarByPrice = (cars, minPrice, maxPrice) =>
//   cars.filter((car) => car.price >= minPrice && car.price <= maxPrice);

// console.table(getCarByPrice(cars, 25000, 30000));

// const getCarByPriceAndModel = (cars, price, model) =>
//   cars.filter((car) => car.price <= price && car.model === model);

// console.table(getCarByPriceAndModel(cars, 25000, "CR-V"));

// const getCarByPriceAndModel = (cars, minPrice, maxPrice, models) =>
//   cars.filter(
//     ({ price, model }) =>
//       price <= maxPrice && price >= minPrice && models.includes(model)
//   );

// console.table(
//   getCarByPriceAndModel(cars, 20000, 30000, ["CR-V", "CX-9", "F-150", "CX-7"])
// );

// ```

// ## Example 7 - Метод sort

// Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
// отсортированный по возврастанию значения свойства `amount`.

// ```js
// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// [{ amount: 2 }, { amount: 1 }, { amount: 3 }];

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => (a.amount > b.amount ? 12 : -15));
// // 1 ) 2 > 1 => true => 12 => 12 > 0 => [{ amount: 1 }, { amount: 2 }]
// // 2) 2 > 3 => false => -15 => -15 > 0 => [{ amount: 1 }, { amount: 2 }, { amount: 3 }]

// console.table(sortByAscendingAmount(cars));
// ```

// ## Example 8 - Метод sort

// Пусть функция `sortByDescendingPrice` возвращает новый массив автомобилей
// отсортированный по убыванию значения свойства `price`.

// ```js
// const sortByDescendingPrice = cars => {};

// console.table(sortByDescendingPrice(cars));
// ```

// ## Example 9 - Метод sort

// Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
// по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
// значения параметра `order`.

// ```js
// const sortByModel = (cars) =>
//   [...cars].sort((a, b) => b.model.localeCompare(a.model));

// console.table(sortByModel(cars));
// ```

// ## Example 10 - Метод reduce

// Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
// свойств `amount`).

// [{
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   }]

// ```js

// let total = 0;
// for (let car of cars) {
//   total += car.amount;
// }
// console.log(total);

// const tags = [
//   ["HTML", "JS"],
//   ["CSS", "TypeScript"],
//   ["React", "Next"],
// ];

// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(tags.reduce((acc, tag) => acc.concat(tag), []));
// 1) [].push(["HTML", "JS"]) => ["HTML", "JS"]
// 2) ["HTML", "JS"].push(["CSS", "TypeScript"]) => ["HTML", "JS","CSS", "TypeScript"]

// 1) acc = 0 => amount = 14 => 0 + 14
// 2) acc = 14 => amount = 2 => 14 + 2
// return 16

// console.log(getTotalAmount(cars));
// ```

// ## Example 11 - Цепочки методов

// Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
// только тех, которые сейчас на распродаже.

// ```js
// const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(cars));
// ```

// ## Example 12 - Цепочки методов

// Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
// (свойство onSale), отсортированных по возрастанию цены.

// ```js
// const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(cars));
// ```
