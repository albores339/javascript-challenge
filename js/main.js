let topButton = document.getElementById("top-button");
let latestButton = document.getElementById("latest-button");
let cardsList = document.getElementById("cards-list");
let postsData; 

const getPosts = async () => {
    let response = await fetch("https://javascript-challenge-f0392-default-rtdb.firebaseio.com/.json");
    let data = await response.json();
    console.log(data.posts);
    postsData = data.posts; 
    printAllPosts(postsData);
}

getPosts();

const printAllPosts = (postsData) => {
    let cardsHtml = Object.keys(postsData).map((post) => {
        let { date, postimg, tags, user, userimg, title, randomRating } = postsData[post]

        if (randomRating === undefined || randomRating === null) {
            randomRating = (Math.random() * 10).toFixed(2);
            postsData[post].randomRating = randomRating;
        }

        return ( `<div class="card" style="width: 100%; border-radius: 5px">
        ${postimg ? `<img
        class="card-img-top"
        src="${postimg}"
        alt="..."
        />
        ` : ""} 
        <div class="poster">
        <img
            class="rounded-5 post__photo"
            alt="algo"
            src="${userimg}"
            alt=""
        />
        <div class="post__info">
            <p class="post__name">${user}</p>
            <br />
            <p class="post__date">Jan ${date}</p>
        </div>
        </div>
        <h1 class="post__title">
        ${title}
        </h1>
        <div class="post__prog__lang">
        <div><button class="post__language">${tags}</button></div>
        </div>
        <div class="post__reactions d-flex d-row">
        <img src="sources/images/reactions.png" alt="" />
        <span class="reactions__number">Rating : ${randomRating} ⭐</span>
        <span class="comments__number"
            ><img src="sources/images/comments.png" alt="" />3
            Comments</span
        >
        <span class="time__read"
            >3 min read <i class="bi bi-bookmark"></i
        ></span>
        </div>
        <p class="reply__see__more">See all 1 comments</p>
    </div>`
    )
    }); 
    cardsList.innerHTML = cardsHtml.join("");
}

topButton.addEventListener("click", () => {
    cardsList.innerHTML = "";
    let postsArray = Object.values(postsData);
    postsArray.sort((a, b) => b.randomRating - a.randomRating);
    printAllPosts(postsArray);
});

latestButton.addEventListener("click", () => {
    cardsList.innerHTML = "";
    let postsArray = Object.values(postsData);
    postsArray.sort((a, b) => a.id - b.id);
    printAllPosts(postsArray);
});
