// // for (let i = 3; i > 0; i--) {
// //   const delay = i * 1000;
// //   //delay = 3 * 1000 = 3000
// //   // delay = 2 * 1000 = 2000
// //   // delay = 1 * 1000 = 1000
// //   setTimeout(console.log(i), delay);
// //   // setTimeout(console.log(3), 3000);
// //   // setTimeout(console.log(2), 2000);
// //   // setTimeout(console.log(1), 1000);
// // }

// // столкнулся с  такой проблемой(третья задача,восьмой модуль),уже настроил сохранение с импута в объект, но когда я в два поля ввел ,потом перезагрузил страницу ,данные вывелись ,и если я в след раз что-то веду в одном из инпутов ,то значение второго пустая строка  или undefine , как решить проблему эту?                                                                                                                                                           import throttle from 'lodash.throttle';

// const STORAGE_KEY_FEEDBACK = "feedback-form-state";

// const dataObj = {};

// const formEl = document.querySelector(".feedback-form");
// const inputEl = document.querySelector(".input-form");
// const textareaEl = document.querySelector(".textarea-form");

// function parsedObject() {
//   if (localStorage) {
//     const savedDataObj = localStorage.getItem(STORAGE_KEY_FEEDBACK);
//     return JSON.parse(savedDataObj);
//   }
// }

// function saveDataFormInObject(evt) {
//   dataObj[evt.target.name] = evt.target.value;
//   localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(dataObj));
// }

// function checkDataInStorage(data) {
//   console.log(data);

//   //   console.log(localStorage);
//   if (data) {
//     // console.log(data);
//     inputEl.value = data.email || "";
//     textareaEl.value = data.message || "";
//   }
// }

// function clearLocalStorage(event) {
//   event.preventDefault();

//   //   console.log(dataObj);
//   //   console.log(dataObj.email);
//   //   console.log(dataObj.message);

//   formEl.reset();
//   localStorage.removeItem(STORAGE_KEY_FEEDBACK);
// }

// checkDataInStorage(parsedObject());
// formEl.addEventListener("input", saveDataFormInObject, 500);
// formEl.addEventListener("submit", clearLocalStorage);
// // я понимаю что ошибка в том, что в  случае моей проблемы значение свойств data.email или data.message  равно undefine, но как решить проблему не могу понять

// 1) Потрібно задати дедлайн
// 2) Потрібно задати поточну дату
// 3) Потрібно знайти їх різницю
// 4) Різницю конвертувати в нормальний формат для користувача
// 5) Відобразити це все на екрані

const deadline = new Date(2023, 0, 1);
const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
function timer() {
  const today = new Date();
  const delta = deadline - today;
  const seconds = Math.floor(delta / 1000) % 60;
  const minutes = Math.floor(delta / 1000 / 60) % 60;
  const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
  const days = Math.floor(delta / 1000 / 60 / 60 / 24);

  daysElement.textContent = days < 10 ? `0${days}` : days;
  hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
  minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

setInterval(timer, 1000);

// 01:54:12 - 12 => остача від неповної хвилини
