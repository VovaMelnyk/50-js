// function slider(slideCount) {
//   let photoNumbers = slideCount;

//   function animation(time) {
//     console.log(`animate sliders ${photoNumbers} with time ${time}` );
//   }

//   return animation;
// }

// const slider1 = slider(10); // local scope {photoNumbers: 10, animation => знає про число 10}
// console.log(slider1(200));

// const slider2 = slider(20); // local scope {photoNumbers: 20, animation => знає про число 20}
// console.log(slider2(400));

// const slider3 = slider(30);// local scope {photoNumbers: 30, animation => знає про число 30}
// console.log(slider3(1000));

// const user = {
//   name: "John",
//   age: 30,
//   status: "Premium",
// };

// // console.log(user.name);
// // console.log(user.age);
// // console.log(user.status);

// const userChoice = prompt("Enter object key"); // userChoice = "age"
// console.log(user[userChoice]); // user['age']

// // console.log(user["name"]);
// // console.log(user["age"]);
// // console.log(user["status"]);

// const book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publisher: "Scribner",
//   year: 1925,
//   pages: 180,
//   price: 20,
// };

// const propKey = "title";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'F. Scott Fitzgerald'

//

// const user = {
//   name: "John",
//   age: 30,
//   status: "Premium",
// };

// for (const key of user) {
//   console.log(key);
// }

// 1) Лічильник - змінна яка контролює скільки разів відпрацював цикл - i = 0

// 2) Умова при якій цикл зупинеться - цикл зупинеться якщо лічильиник буде більше за довжину масиву

// 3) Код який змінює значення лічильника - i++

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i += 1) {
//   //   if (i % 2 !== 0) {
//   //     continue;
//   //   }
//   if (numbers[i] === 3) {
//     break;
//   }
//   console.log(numbers[i]);
// }

// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i = +1;
// }

// let i = 0;
// do {
//   console.log(numbers[i]);
//   i = +1;
// } while (i < numbers.length);

// const numbers = [1, 2, 3, 4, "six"];

// numbers.push(5);

// console.log(numbers);

// () при арефметичних операціях => запуск функції => частина конструкцій в JS (цикли, if, switch, створення функцій)
// [] - масиви => доступ до ключа обєкта якщо ключ динамічний, доступ до елементу масиву по індексу, деструктуризація
// {} - обєкт => частина конструкцій в JS (цикли, if, switch, створення функцій), тіло функції, деструктуризація, клас

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo();

// function pow(number, power) {
//   if (power === 0) {
//     return 1;
//   }

//   return number * pow(number, power - 1);
// }

// pow(2, 3);

// 1) number = 2 power = 3 => 2 * (pow(2, 2) => 4 = 8) =>
// number = 2 power = 2 => 2 * (pow(2, 1) => 2 = 4) =>
// number = 2 power = 1 => 2 * (pow(2, 0) => 1 = 2) =>
// number = 2 power = 0 => 1

// pow(2, 0); // 1
// pow(2, 1); // 2 * 1 => 2
// pow(2, 2); // 2 * 2 => 4
// pow(2, 3); 2 * 4 => 8

// "use strict";

// const user = {
//   name: "John",
//   age: 30,
//   //   showUserThis: function () {
//   //     console.log(this); // user
//   //     const arrowThis = () => {
//   //       console.log("arrow", this); // user
//   //     };
//   //     arrowThis();
//   //   },
//   arrowThis: () => {
//     console.log("arrow", this); // window
//   },
// };

// const arrowThis = () => {
//   console.log("arrow", this); // window
// };

// function showThis() {
//   console.log("function", this);
// }

// showThis.call(user);
// showThis.apply(user);
// const bindedFunction = showThis.bind(user);
// bindedFunction();

// user.showUserThis();
// arrowThis();
// user.arrowThis.call(user);
// user.arrowThis.bind(user)();

// call - coma
// apply - array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myMap = (arr, callback) => {
//   const result = [];
//   for (let element of arr) {
//     result.push(callback(element));
//   }
//   return result;
// };

// const variant1 = numbers.map((number) => number * 2);
// const variant2 = numbers.map((number) => number - 2);
// const variant3 = numbers.map((number) => number + 100);
// const variant4 = numbers.filter((number) => number > 5);

// "use strict";

// function createTransaction(amount, onError, onSuccess) {
//   if (amount < 0) {
//     onError();
//   } else {
//     onSuccess(amount);
//   }
// }

// function error() {
//   console.log("Transaction failed");
// }

// function success(amount) {
//   console.log(`Transaction successful. Amount: ${this}`);
// }

// function USDsuccess(amount) {
//   console.log(`Transaction successful. Amount: ${amount} USD`);
// }

// createTransaction("100 UAH", error, success.bind(user));
// createTransaction("100 USD", error, USDsuccess.bind(hotel));

const form = document.querySelector(".form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

function handleSubmit(e) {
  e.preventDefault();
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  form.reset();
}

form.addEventListener("submit", handleSubmit);