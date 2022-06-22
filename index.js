// // class User {
// //   #name;
// //   constructor(name) {
// //     this.#name = name;
// //   }
// // }

// // class User {
// //   constructor(name, age) {
// //     this._name = name;
// //     this._age = age;
// //   }
// // }

// const animal = {
//   legs: 4,
//   tail: 1,
//   eyes: 2,
// };

// const cat = Object.create(animal);
// // обєкт буде порожній
// // Наслідуємо для cat всі властивості від animal

// console.log("cat", cat);

// class Human {
//   constructor(legs, eyes) {
//     this.legs = legs;
//     this.eyes = eyes;
//   }
// }
// class User extends Human {
//   constructor(legs, eyes, name, age) {
//     super(legs, eyes);
//     this.name = name;
//     this.age = age;
//   }
// }

// const user = new User(2, 2, "Bob", 14);

// console.log("user", user);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     let error = `There is no pizza with a name ${pizzaName} in the assortment.`;

//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(error);
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// // pizzaPalace.order("Four meats", makeDrink, onOrderError);

// // Callback for onError
// // function onOrderError(error) {
// //   return `Error! ${error}`;
// // }

// // function makeDrink(drinkName) {
// //   return "Create Drink";
// // }
// // pizzaPalace.order("Big Mike", makePizza, onOrderError);
// // pizzaPalace.order("Vienna", makePizza, onOrderError);

// // const numbers = [1, 2, 3, 4, 5, 6, 7];
// // // console.log(numbers.map((number) => number * 2));
// // function mylt(number) {
// //   return number * 2;
// // }
// // console.log(numbers.map(mylt)

// //   // numbers.map(mylt)

// // console.log(numbers.map((number) => number / 2));
// // console.log(numbers.map((number) => number + 20));
// // console.log(numbers.map((number) => number - 5));

// // 1) запускає цикл
// // 2) створює новий масив
// // 3) отримує доступ до кожного елементу масиву
// // 4) Пушить результат в новий масив
// // 5) cb - розширює роботу з елементом масив

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості likes
// // до акумулятора, початкове значення якого вкажемо 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// // 1) tweets = [з обєктами]
// // 2) totalLikes (acc) = 0
// // 3) tweet - obj з масиву
// //

// // i1) totalLikes = 0 => tweet = { id: "000", likes: 5, tags: ["js", "nodejs"] }, => tweet.likes = 5 => 0 + 5 = 5
// // i2) totalLikes = 5 => tweet = { id: "001", likes: 2, tags: ["html", "css"] } => tweet.likes = 2 => 5 + 2 = 7
// // i3) totalLikes = 7 => tweet = { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },=> tweet.likes = 17 => 7 + 17 = 24
// // i5) 32

// console.log(likes); // 32

// Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// // для підрахунку лайків з колекції
// const countLikes = (tweets) => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// почему тут  callback() - це виклик методу getFullName без об'єкта.
// Как он определяет что именно метод getFullName?

// Если 2й вариант Какой метод будет в callback?

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта

//   console.log(callback); // `${this.firstName} ${this.lastName}`;
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }
// // makeMessage(customer.getFullName.bind(customer)); // Буде помилка у виклику функції
// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// а если так 2й вариант:
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   getName() {
//     return `${this.firstName}`;
//   },
// };
// function makeMessage(callback) {
//   // callback() - який буде метод?
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }
// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// Ваша функція повинна завжди повертати весь об'єкт збірки записів.
// Якщо prop це не tracks і value не є пустим рядком, то оновіть або встановіть prop альбому до value.
// Якщо prop є tracks але альбом немає властивості tracks, створіть пустий масив та додайте value до нього.
// Якщо prop є tracks та value не є пустим рядком, додайте value до кінця наявного масиву tracks у альбомі.
// Якщо value є пустим рядком, видаліть дану властивість prop з альбому.

// Налаштування
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// const user = {
//   name: "Bob",
// };

// user.name;
// user["name"];

// console.log(recordCollection.5439.albumTitle);

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value; // recordCollection.5439.artist = 'ABBA'
    // records.id.prop = value; // recordCollection.id.prop = 'ABBA'
  } else if (
    prop === "tracks" &&
    records[id].hasOwnProperty("tracks") === false &&
    value !== ""
  ) {
    records[id][prop] = [value]; //recordCollection[5439][tracks] = ['Hello']
    // якщо ми хочемо оновити треки і їх ще немає в обєкті - тоді ми додаємо масив з нови треком
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }

  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Hello");
updateRecords(recordCollection, 5439, "tracks", "Apple");
updateRecords(recordCollection, 5439, "tracks", "");


console.log(recordCollection);
