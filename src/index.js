import './style.css';
import getMovies from './modules/store/API.js';

const moviesList = document.querySelector('.movies');
const movies = getMovies();
const populateData = async (data) => {
  const moviesData = await data;
  moviesData.forEach((item) => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.innerHTML = `
        <img src=${item.image.medium} alt="Movie pic"/>
        <div>
        <p class="movie-title">${item.name}</p>
        <i class="fa-regular fa-heart"></i>
        </div>
        <p class="likes">5 likes</p>
        <button type='button' class="comment-button">comments</button>
        `;
    moviesList.appendChild(movieCard);
  });
};

populateData(movies);
