// 1000 ms
// thorotle - 300ms
// 1000 / 300 = 3.33

// 1 event - 1 ms - scroll
// 2 event - 301ms - scroll
// 3 event - 601ms - scroll
// 4 event - 901ms - scroll

// 300 ms - scroll
// debounce
// 1000 ms
// scroll - 90 разів

// 1000 ms - scroll => 300 ms => debounce
// console.log(user);
// debugger;
// const user = {
//   name: "John",
//   surname: "Smith",
//   age: 30,
// };
// debugger;
// const number = 10;
// debugger;
// function logNumbers(number) {
//   console.log(number);
//   debugger;
// }
// debugger;
// logNumbers(number);
// debugger;

// console.log(user);
// 0) Потрібно достукатися до нашого інпута
// 1) Навішати подію інпут на тег інпут
// 2) Кожен раз при події маємо считувати данні з інпута (value)
// 3) Отримати доступ до span
// 4) записати значення інпута в стилі нашого тега span (span.styles.fontSize = value)

// 1) Потрібно відмалювати розмітку галереї використовуючи масив картинок
// 2) При рендері галереї потрібно підставити в розмітку правильні поля
// 3) Потрібно навішати клік на вашу галерею використовуючи делегування
// 4) Визначати елемент на який клікнули через event.target
// 5) Потрібно считати данні з атрибута data - source і підставити їх в модальне вікно
// 6) Має зявитися модальне вікно з картинкою я ви отримали з атрибута data-source

// const technologies = [
//   {
//     title: "HTML",
//     description: "HyperText Markup Language",
//   },
//   {
//     title: "CSS",
//     description: "Cascading Style Sheets",
//   },
//   {
//     title: "JavaScript",
//     description: "JavaScript language",
//   },
//   {
//     title: "React",
//     description: "JavaScript library",
//   },
// ];

// function createLi(array) {
//   return array.reduce(
//     (acc, item) =>
//       acc + `<li data-description = "${item.description}">${item.title}</li>`,
//     ""
//   );
// }

// function createLi(array) {
//   return array
//     .map(
//       (item) =>
//         `<li data-description = "${item.description}">${item.title}</li>`
//     )
//     .join("");
// }

// const result = createLi(technologies);

// const list = document.querySelector(".list");
// const p = document.querySelector(".description");
// list.insertAdjacentHTML("beforeend", result);

// function listHandler(e) {
//   const description = e.target.dataset.description;
//   p.textContent = description;
// }

// list.addEventListener("click", listHandler);

// const lightbox = new SimpleLightbox(".gallery a", {
//   /* options */
// });

// const list = document.querySelector(".list");
// const li = `<li>3</li>`;
// // list.innerHTML = li;

// list.insertAdjacentHTML("beforeend", li);

// const button = document.querySelector("button");
// const modal = document.querySelector(".modal");
// function openModal() {
//   modal.classList.add("open");
//   window.addEventListener("keydown", KeyboardHandler);
// }

// function closeModal() {
//   modal.classList.remove("open");
//   window.removeEventListener("keydown", KeyboardHandler);
// }
// button.addEventListener("click", openModal);