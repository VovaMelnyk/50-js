// // // for (let i = 3; i > 0; i--) {
// // //   const delay = i * 1000;
// // //   //delay = 3 * 1000 = 3000
// // //   // delay = 2 * 1000 = 2000
// // //   // delay = 1 * 1000 = 1000
// // //   setTimeout(console.log(i), delay);
// // //   // setTimeout(console.log(3), 3000);
// // //   // setTimeout(console.log(2), 2000);
// // //   // setTimeout(console.log(1), 1000);
// // // }

// // // столкнулся с  такой проблемой(третья задача,восьмой модуль),уже настроил сохранение с импута в объект, но когда я в два поля ввел ,потом перезагрузил страницу ,данные вывелись ,и если я в след раз что-то веду в одном из инпутов ,то значение второго пустая строка  или undefine , как решить проблему эту?                                                                                                                                                           import throttle from 'lodash.throttle';

// // const STORAGE_KEY_FEEDBACK = "feedback-form-state";

// // const dataObj = {};

// // const formEl = document.querySelector(".feedback-form");
// // const inputEl = document.querySelector(".input-form");
// // const textareaEl = document.querySelector(".textarea-form");

// // function parsedObject() {
// //   if (localStorage) {
// //     const savedDataObj = localStorage.getItem(STORAGE_KEY_FEEDBACK);
// //     return JSON.parse(savedDataObj);
// //   }
// // }

// // function saveDataFormInObject(evt) {
// //   dataObj[evt.target.name] = evt.target.value;
// //   localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(dataObj));
// // }

// // function checkDataInStorage(data) {
// //   console.log(data);

// //   //   console.log(localStorage);
// //   if (data) {
// //     // console.log(data);
// //     inputEl.value = data.email || "";
// //     textareaEl.value = data.message || "";
// //   }
// // }

// // function clearLocalStorage(event) {
// //   event.preventDefault();

// //   //   console.log(dataObj);
// //   //   console.log(dataObj.email);
// //   //   console.log(dataObj.message);

// //   formEl.reset();
// //   localStorage.removeItem(STORAGE_KEY_FEEDBACK);
// // }

// // checkDataInStorage(parsedObject());
// // formEl.addEventListener("input", saveDataFormInObject, 500);
// // formEl.addEventListener("submit", clearLocalStorage);
// // // я понимаю что ошибка в том, что в  случае моей проблемы значение свойств data.email или data.message  равно undefine, но как решить проблему не могу понять

// // 1) Потрібно задати дедлайн
// // 2) Потрібно задати поточну дату
// // 3) Потрібно знайти їх різницю
// // 4) Різницю конвертувати в нормальний формат для користувача
// // 5) Відобразити це все на екрані

// const deadline = new Date(2023, 0, 1);
// const daysElement = document.querySelector(".days");
// const hoursElement = document.querySelector(".hours");
// const minutesElement = document.querySelector(".minutes");
// const secondsElement = document.querySelector(".seconds");
// function timer() {
//   const today = new Date();
//   const delta = deadline - today;
//   const seconds = Math.floor(delta / 1000) % 60;
//   const minutes = Math.floor(delta / 1000 / 60) % 60;
//   const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
//   const days = Math.floor(delta / 1000 / 60 / 60 / 24);

//   daysElement.textContent = days < 10 ? `0${days}` : days;
//   hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
//   minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
//   secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
// }

// setInterval(timer, 1000);

// // 01:54:12 - 12 => остача від неповної хвилини

// [1, 2, 3, 4, 5].map((element, index, arr) => {});

// const promise = new Promise((resolve, reject) => {
//   resolve(10);
// });

// const promise = new Promise((resolve, reject) => {
//   reject(10);
// });

// const promise = new Promise((ok, error) => {});

// console.log("a");
// console.log("b");

// const result = new Promise((resolve, reject) => {
//   let total = 0;

//   for (let i = 0; i < 1000000000; i++) {
//     total += i;
//   }

//   if (total % 2 === 0) {
//     resolve(total);
//   } else {
//     reject(8);
//   }
// });

// const result = new Promise((ok, failed) => {
//   let total = 0;

//   for (let i = 0; i < 1000000000; i++) {
//     total += i;
//   }

//   if (total % 2 === 0) {
//     ok(total);
//   } else {
//     failed(8);
//   }
// });

// result
//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finally"));

// let isLoading = true;

// result
//   .then(
//     (data) => console.log(data),
//     (error) => console.log(error)
//   )
//   .then(
//     (data) => console.log(data),
//     (error) => console.log(error)
//   )
//   .then(
//     (data) => console.log(data),
//     (error) => console.log(error)
//   )
//   .finally(() => (isLoading = false));

// Promise.resolve();

// class vs екземпляр класу

//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .finally(() => console.log("finally"));

// addEventListener("click", registerClick);

// console.log(result);

// setTimeout(() => {
//   console.log("a");
// }, 1000);

// Promise.resolve(10);

function promiseCreator(counter) {
  return new Promise((ok, failed) => {
    let total = 0;

    for (let i = 0; i < counter; i++) {
      total += i;
    }

    // console.log(total);

    if (total % 2 === 0) {
      ok(total);
    } else {
      failed("Error");
    }
  });
}

// promiseCreator(10)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// promiseCreator(1001)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Promise.all([promiseCreator(8), promiseCreator(1001)])
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// Promise.race([promiseCreator(10), promiseCreator(1001)])
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

Promise.allSettled([promiseCreator(10), promiseCreator(1001)])
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("error", error);
  });
