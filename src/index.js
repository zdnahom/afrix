import './style.css';

import { addLike } from './modules/store/API.js';
import moviesDataCollection from './modules/store/Data.js';
import openPopup from './modules/popup.js';
import movieCounter from './modules/movieCounter.js';
import commentCounter from './modules/commentCounter.js';

const moviesList = document.querySelector('.movies');
const moviesCountDisplayer = document.querySelector('.movies-count');

const populateData = async (data) => {
  const moviesData = await data;
  moviesData.forEach((item) => {
    const likeText = item.likes > 1 ? 'likes' : 'like';
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
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

const initializeApp = async () => {
  await populateData(moviesDataCollection());
  const totalMovies = movieCounter();
  moviesCountDisplayer.textContent = totalMovies;
};

moviesList.addEventListener('click', async (e) => {
  if (e.target.className.includes('like-button')) {
    addLike(e.target.id);
    const likeCountSpan = document.querySelector(`#likes-${e.target.id}`);
    likeCountSpan.textContent = Number(likeCountSpan.textContent) + 1;
    likeCountSpan.nextElementSibling.textContent = Number(likeCountSpan.textContent) > 1 ? 'likes' : 'like';
  }
  if (e.target.className === 'comment-button') {
    await openPopup(e.target.id);
    const totalComments = commentCounter();
    const commentText = document.querySelector('.comment-countText span');
    commentText.textContent = totalComments;
  }
});

initializeApp();
