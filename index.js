// # Модуль 1. Занятие 2. Ветвления. Циклы
// ("Mango" && "Poly") || false;
// // 1) "Poly" || false
// // 2) 'Poly

// false || ("Mango" && "Poly");
// // 1) false || "Polly"
// // 2) "Polly"

// let name = "Bob";
// name = 14;
// name = "John";

// const age = 13;
// age = 15;
// age = "name";

// const userNumber = prompt("Enter number");

// 10 / 2 = 5
// 11 / 2 = 5.5

// if (userNumber % 2 === 0) {
//   console.log("Парне число");
// } else {
//   console.log("НЕ парне число");
// }

// let number = 2;
// number = number + 1; // number = 2 + 1 // 3
// number += 1;
// number++;

// number = number + 10;
// number += 10;
// number -=10

// const userNumber = prompt("Enter User Number");

// if (userNumber === 10) {
//   console.log("ok");
// } else if (userNumber === 100) {
//   console.log("Good");
// } else {
//   console.log("Bad");
// }

// switch (userNumber) {
//   case 10:
//     console.log("ok");
//     break;
//   case 100:
//     console.log("Good");
//     break;
//   default:
//     console.log("Bad");
//     break;
// }

// if (userNumber < 10) {
//   console.log("ok");
// } else if (userNumber > 100 && userNumber < 1000) {
//   console.log("Good");
// } else {
//   console.log("Bad");
// }

// switch (true) {
//   case userNumber < 10:
//     console.log("ok");
//     break;
//   case userNumber > 100 && userNumber < 1000:
//     console.log("Good");
//     break;
//   default:
//     console.log("Bad");
//     break;
// }

// console.log("Polly" && "Mango"); // "Mango"
// console.log(null && false); // null

// if ("Polly" && "Mango") {
//   // 'Mango' => true => console.log("a");
//   console.log("a");
// } else {
//   console.log("b");
// }

// if (null && false) {
//   // null => false => console.log("b")
//   console.log("a");
// } else {
//   console.log("b");
// }

// if ('Mango' || "Polly" && 'Mango' || false) { // 'Mango' ||  "Mango" || false => 'Mango' => true => a
//   // null => false => console.log("b")
//   console.log("a");
// } else {
//   console.log("b");
// }

// if ("mango" || "polly") {
//   // mango => true => a
//   console.log("a");
// } else {
//   console.log("b");
// }

// Вивести в консоль числа від 1 до 10 які кратні 2

// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 1) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 1) {
//   switch (i) {
//     case 5:
//       break;
//     default:
//       break;
//   }
//   console.log(i);
// }

//i = 1 => 1 / 2 = 0.5 => пропускаємо це число
// i = 2 => 2 / 2 = 1 => 2

// let name;

// console.log("name", name);

// name = "Bob";

// const name;

// console.log(name)

// const

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "kiwi");

// console.log(true && 0 && "kiwi");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0); // null > 0 => false

// console.log(null || (2 && 3) || 4);

// ## Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// `"Какое официальное название JavaScript?"`. Если пользователь вводит
// `ECMAScript`, то показывай alert со строкой `"Верно!"`, в противном случае -
// `"Не знаете? ECMAScript!"`

// ## Example 2 - Отображение времени (if...else)

// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки
// формата `"14 ч. 26 мин."`. Если значение переменной `minutes` равно `0`, то
// выводи строку `"14 ч."`, без минут.

// ```js
// const hours = 14;
// const minutes = 26;
// let timeString;

// if (minutes === 0) {
//   timeString = `${hours} год`;
// } else {
//   timeString = `${hours}год ${minutes}хв`;
// }

// const minutes = 74; // 1 год 14 хв
// const minutes = 1023; // ?
// const minutesValue = minutes % 60;
// const hours = Math.floor(minutes / 60);
// console.log(`${hours}:${minutesValue}`);
// console.log(`${hours}год ${minutesValue}хв`);

// ```

// ## Example 3 - Ветвеления

// Напиши скрипт, который выводит в консоль строку `"Это положительное число"`,
// если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи
// в консоль строку `"Это ноль"`. Если передали отрицательное число, в консоли
// должна быть строка `"Это отрицательное число"`.

// ```js
// const userInput = prompt('Введите число');
// ```

// ## Example 4 - Вложенные ветвления

// Напиши скрипт, который сравнивает числа в переменных `a` и `b`. Если оба
// значения больше `100`, то выведи в консоль максимальное из них. В противном
// случае в консоли должна быть сумма значения `b` и числа 512.

// ```js
// const a = 120;
// const b = 180;
// ```

// ## Example 5 - if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от
// значения переменной `hours`.

// Если значение переменной `hours`:

// - меньше `17`, выводи строку `"Pending"`
// - больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
// - больше `24` , выводи строку `"Overdue"`

// ```js
// const hours = 10;
// ```

// ## Example 6 - Дедлайн сдачи проекта (if...else)

// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй
// конструкцию `if...else`.

// - Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
// - Eсли до дедлайна 1 день - выведи строку `"Завтра"`
// - Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
// - Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`

// ```js
// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки
// ```

// ## Example 7 - Дедлайн сдачи проекта (switch)

// Выполни рефакторинг кода задачи номер 5 используя `switch`.

// ```js
// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }
// ```

// ## Example 8 - Цикл for

// Напиши цикл for который выводит в консоль браузера числа по возрастанию от `min`
// до `max`, но только если число кратное `5`.

// ```js
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }

// let i = min;

// while (i <= max) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   i += 1;
// }

// let i = min;

// do {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   i += 1;
// } while (i <= max);

// const password = "admin";
// let userPassword;

// do {
//   userPassword = prompt("Enter password");
//   console.log(userPassword);
// } while (true);

// const result = 2 + 3; // 5

// function add() {
//   return 2 + 3;
// }

// console.log(add());

// ```

// ## Example 9 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`
