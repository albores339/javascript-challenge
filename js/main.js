const getPosts = async () => {
    let response = await fetch("https://javascript-challenge-f0392-default-rtdb.firebaseio.com/.json");
    let data = await response.json();
    printAllPosts(data.posts);
}

getPosts();

const printAllPosts = (postsData) => {
    let cardsList = document.getElementById("cards-list");

    let cardsHtml = Object.keys(postsData).map((post) => {
        let { date, postimg, tags, user, userimg, title  } = postsData[post]
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
            <p class="post__date">${date}</p>
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
        <span class="reactions__number">Rating : ${Math.floor(Math.random() * 10) + 1} ⭐</span>
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