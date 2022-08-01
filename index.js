// const KEY = "fe54e78640174c269f1b558d40009301";
// fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${KEY}`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// 1) Base URL
// 2) resource
// 3) params
const list = document.querySelector(".list");
const KEY = "fe54e78640174c269f1b558d40009301";
const BASE_URL = "https://newsapi.org/v2";
const URL = `${BASE_URL}/top-headlines?apiKey=${KEY}&category=sports&country=ua&pageSize=10`;
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    // console.log("data", data);
    insertContent(undefined);
  })
  .catch((error) => {
    console.log("error", error);
  });

const createListItem = (item) => `<li>
${item.urlToImage ? `<img src="${item.urlToImage}" alt="${item.description}">` : ""}
  <h2>${item.title}</h2>
  <p>${item.description ? item.description : ""}</p>
  <p>${item.author ?? ""}</p>
  <a href="${item.url}" target="_blank">Перейти до статті</a>
</li>`;

// const generateContent = (array) => array?.reduce((acc, item) => acc + createListItem(item), "");
const generateContent = (array) => (array ? array.reduce((acc, item) => acc + createListItem(item), "") : "");

const insertContent = (array) => {
  const result = generateContent(array);
  list.insertAdjacentHTML("beforeend", result);
};
