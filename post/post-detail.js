const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams);

/*extraemos un parámetro específico y lo guardamos en una variable*/
const postId = urlParams.get("postId");

console.log(postId);

const getCharById = async (charId) => {
  let response = await fetch(
    `https://javascript-challenge-f0392-default-rtdb.firebaseio.com/posts/.json`
  );
  let data = await response.json();
  let { image, name, status, species, gender, origin } = data;

  document.getElementById("char-img").setAttribute("src", image);
  document.getElementById("char-name").innerText = name;
  document.getElementById("char-species").innerText = species;
  document.getElementById("char-gender").innerText = gender;
  document.getElementById("char-status").innerText = status;
  document.getElementById("char-origin").innerText = origin.name;
  console.log(data);
};

getCharById(charId);
