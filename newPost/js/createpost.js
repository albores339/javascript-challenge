/*TOOLTIPS - MENSAJES HOVER DE LOS BOTONES*/
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/*FORMULARIO CREAR POST*/
let title = document.getElementById("postTitleTxt");
let tags = document.getElementById("tagInputPost");
let postimg = document.getElementById("coverImgBtn");
let txt = document.getElementById("textAreaPost");
let comments = document.getElementById("commentInputPost");
let date = document.getElementById("dateInputPost");
let id = document.getElementById("idInputPost");
let userName = document.getElementById("userNameInputPost");
let userImg = document.getElementById("userImgInputPost");

let postsArray = [];

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

const printAllPosts = (posts) => {
  console.log(posts);

  let postsArray = Object.keys(posts).map((key) => ({ ...posts[key], key }));
  console.log(postsArray);
};

let publishPostButton = document.getElementById("publishBtn");

publishPostButton.addEventListener("click", async (event) => {
  event.preventDefault();

  let title = postTitleTxt.value;
  let tags = tagInputPost.value;
  let postimg = coverImgBtn.src;
  let txt = textAreaPost.value;
  let comments = commentInputPost.value;
  let date = dateInputPost.value;
  let id = idInputPost.value;
  let userName = userNameInputPost.value;
  let userImg = userImgInputPost.src;

  let post = {
    title,
    tags,
    postimg,
    txt,
    comments,
    date,
    id,
    userName,
    userImg,
  };

  console.log(post);
  let result = await savePost(post);
  console.log(result);
  printAllPosts();

  window.open(".../index.html", "_self");
});

printAllPosts();
