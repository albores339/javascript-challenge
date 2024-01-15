/*TOOLTIPS - MENSAJES HOVER DE LOS BOTONES*/
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/*FORMULARIO CREAR POST*/
let postTitleTxt = document.getElementById("titlePost");
let tagInputPost = document.getElementById("tagInput");
let coverImgBtn = document.getElementById("coverImgPostBtn");
let txtAreaPost = document.getElementById("txtPost");

let newPost = [];

const savePost = async (post) => {
  let response = await fetch(
    "https://javascript-challenge-f0392-default-rtdb.firebaseio.com/posts/.json",
    {
      method: "POST",
      body: JSON.stringify(post),
    }
  );
  let data = await response.json();
  return data;
};

const getAllPosts = async () => {
  let response = await fetch(
    "https://javascript-challenge-f0392-default-rtdb.firebaseio.com/posts/.json"
  );
  let data = await response.json();
  printAllPosts(data);
};

/*boton de guardar o publicar task??? */
