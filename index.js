// const text = "Hello World";
// console.log(JSON.parse(text));

// const form = document.querySelector("#message-form"); // отримали доступ до форми
// const output = document.querySelector("#output"); // отримали доступ до span куди будемо виводити дані
// const LOCALSTORAGE_KEY = "goit-example-message"; // ключ для збереження даних

// updateOutput();

// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }

// const form = document.querySelector("#message-form");

// console.log(form.elements);
// // const userName = document.querySelector(".user-name");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   //   const {
//   //     elements: { username, password },
//   //   } = event.currentTarget;
//   const form = event.currentTarget;
//   const inputList = form.elements;
//   // inputList = {
//   // userName: input
//   // password: input
//   // }
//   inputList.userName;
//   inputList.password;

//   console.log(username.value, password.value);
// });

// const iframe = document.querySelector("#vimeo-player");
// const player = new Vimeo.Player(iframe);

// console.log(player);

// player.on("timeupdate", function (time) {
//   console.log("time", time);
// });

// localStorage.setItem("numbers", JSON.stringify(numbers));

// const convertedNumbers = JSON.parse(localStorage.getItem("numbers"));

// console.log(convertedNumbers);

// // const markup = numbers.reduce((acc, number) => acc + `<li>${number}</li>`, ""); // string
// const markup = numbers.map((acc, number) => acc + `<li>${number}</li>`).join("");

// console.log(markup);

// const list = document.querySelector("ul");
// list.insertAdjacentHTML("beforeend", markup);

const text = "Hello World";

try {
  JSON.parse(text);
} catch (error) {
  console.log("parsing error");
}

console.log("Hello");
