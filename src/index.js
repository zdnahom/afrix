import "./style.css";

import { addLike } from "./modules/store/API.js";
import moviesDataCollection from "./modules/store/Data";
import openPopup from "./modules/popup";

const moviesList = document.querySelector(".movies");

const populateData = async (data) => {
  const moviesData = await data;
  moviesData.forEach((item) => {
    const likeText = item.likes > 1 ? "likes" : "like";
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
        <img src=${item.image.medium} alt="Movie pic"/>
        <div>
        <p class="movie-title">${item.name}</p>
        <i class="fa-regular fa-heart like-button" id = ${item.id}></i>
        </div>
        <p class="likes"><span id="likes-${item.id}">${item.likes}</span> <span>${likeText}</span></p>
        <button type='button' class="comment-button" id=${item.id}>comments</button>
        `;
    moviesList.appendChild(movieCard);
  });
};

moviesList.addEventListener("click", (e) => {
  if (e.target.className.includes("like-button")) {
    addLike(e.target.id);
    const likeCountSpan = document.querySelector(`#likes-${e.target.id}`);
    likeCountSpan.textContent = Number(likeCountSpan.textContent) + 1;
    likeCountSpan.nextElementSibling.textContent =
      Number(likeCountSpan.textContent) > 1 ? "likes" : "like";
  }
  if (e.target.className === "comment-button") {
    openPopup(e.target.id);
  }
});

populateData(moviesDataCollection());
