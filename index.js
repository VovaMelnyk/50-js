const refs = {
  getButton: document.querySelector(".get"),
  form: document.querySelector(".form"),
  title: document.querySelector(".title"),
  text: document.querySelector(".text"),
  formUpdate: document.querySelector(".formUpdate"),
  titleUpdate: document.querySelector(".titleUpdate"),
  textUpdate: document.querySelector(".textUpdate"),
  deleteButton: document.querySelector(".delete"),
  body: document.querySelector("body"),
};

// const getPosts = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// const getPosts = () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts");
// };

// const createHtml = (data) => {
//   const li = document.createElement("li");
//   li.classList.add("list-group-item");
//   li.innerHTML = `` + `<h3>${data.title}</h3>` + `<p>${data.body}</p>`;
//   return li;
// };

// const createList = (data) => {
//   const result = data.reduce((acc, item) => (acc += `<li class="list-group-item">${item.title}</li>`), "");
//   refs.body.insertAdjacentHTML("afterbegin", result);
// };

// const getPosts = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     createList(data);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   } finally {
//   }

//   // console.log(data);
// };

// import axios from 'axios';

// const getPosts = async () => {
//   try {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     createList(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getPosts();

// const data = getPosts();
// data.then((data) => console.log(data));
// getPosts()
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const createPost = (e) => {
//   e.preventDefault();
//   const title = refs.title.value;
//   const text = refs.text.value;

//   return fetch("https://jsonplaceholder.typicode.com/posts", {
// method: "POST",
// body: JSON.stringify({ title: title, body: text }),
// headers: {
//   "Content-type": "application/json; charset=UTF-8",
// },
//   });
// };

// const createPost = async (e) => {
//   e.preventDefault();
//   const title = refs.title.value;
//   const text = refs.text.value;
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({ title: title, body: text }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     const data = await response.json();
//     console.log(data); // тут може бути фнукция для виводу на екран нового поста
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const createPost = async (e) => {
  e.preventDefault();
  const title = refs.title.value;
  const text = refs.text.value;
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      { title: title, body: text },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// createPost()
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const updatePost = (e) => {
//   e.preventDefault();
//   const title = refs.titleUpdate.value;
//   const text = refs.textUpdate.value;
//   fetch("https://jsonplaceholder.typicode.com/posts/100", {
//     method: "PATCH",
//     body: JSON.stringify({ title: title, body: text }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

const updatePost = async (e) => {
  e.preventDefault();
  const title = refs.titleUpdate.value;
  const text = refs.textUpdate.value;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/100", {
      method: "PATCH",
      body: JSON.stringify({ title: title, body: text }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// const deletePost = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/100", {
//     method: "DELETE",
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// refs.getButton.addEventListener("click", getPosts);
refs.form.addEventListener("submit", createPost);
refs.formUpdate.addEventListener("submit", updatePost);
// refs.deleteButton.addEventListener("click", deletePost);
