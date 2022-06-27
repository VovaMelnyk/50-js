// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// // const markup = technologies
// //   .map((technology) => `<li class="list-item">${technology}</li>`)
// //   .join("");

// const markup = technologies.reduce(
//   (acc, technology) => acc + `<li class="list-item">${technology}</li>`,
//   ""
// );

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];

// const createMarkup = (colors) => {
//   return colors.map((color) => {
//     const button = document.createElement("button");
//     button.type = "button";
//     button.textContent = color.label;
//     button.style.backgroundColor = color.color;

//     return button;
//   });
// };

// const container = document.querySelector(".container");
// container.append(...createMarkup(colors));

// console.log("createMarkup", createMarkup(colors));
// const container = document.querySelector(".container");

// console.log(container.dataset.type);

const main = document.querySelector("#main");

// create element
const title = document.createElement("h1");
const figure = document.createElement("figure");
const img = document.createElement("img");
const figcaption = document.createElement("figcaption");
// add atr
title.id = "title";
figure.id = "img-div";
img.id = "image";
img.src =
  "https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg";
img.alt = "Michel Legrand conducting his orchestra.";
figcaption.id = "img-caption";
// add text content
title.textContent = "- Michel Legrand -";
figcaption.textContent = "Michel Legrand conducting his orcherstra.";
// insert to page
main.append(title);
main.append(figure);
figure.append(img);
figure.append(figcaption);

const article = `
<article id="tribute-info">
            <div id="intro">
                <p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p>
            </div>
            <p><u>Here are some major facts about him:</u></p>
            <ul>
                
            </ul>
            <blockquote id="quote">
                <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
                <cite>-- Michel Legrand</cite>
            </blockquote>
            <hr>
            <p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link"
                    href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.</p>
        </article> 
`;

// main.innerHTML = article;
main.insertAdjacentHTML("beforeend", article);

const items = [
  "He was born in Paris, France on February 24<sup>th</sup>, 1932.",
  "His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.",
  "His sister was a Soprano and a member of the Swingle Singers.",
  "Along his career, he composed more than two hundred film and television scores.",
  "He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.",
  "He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.",
  "He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital of Paris.",
  "He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.",
];

const createList = (items) =>
  items.reduce((acc, item) => acc + `<li>${item}</li>`, "");

const list = document.querySelector("ul");
list.insertAdjacentHTML("beforeend", createList(items));
