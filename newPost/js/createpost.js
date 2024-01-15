/*TOOLTIPS - MENSAJES HOVER DE LOS BOTONES*/
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/*FORMULARIO CREAR POST*/
let title = document.getElementById("postTitleTxt");
let tag = document.getElementById("tagInputPost");
let cover = document.getElementById("coverImgBtn");
let txt = document.getElementById("textAreaPost");

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
  // let postList = document.getElementById("post-list");
  // postList.innerHTML = "";

  let postsArray = Object.keys(posts).map((key) => ({ ...posts[key], key }));
  console.log(postsArray);
};

let publishPostButton = document.getElementById("publishBtn");

publishPostButton.addEventListener("click", async (event) => {
  event.preventDefault();

  let title = postTitleTxt.value;
  let tag = tagInputPost.value;
  let cover = coverImgBtn.src;
  let txt = textAreaPost.value;

  let post = { title, tag, cover, txt };

  console.log(post);
  let result = await savePost(post);
  console.log(result);
  printAllPosts();
});

printAllPosts();
