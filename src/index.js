import './style.css';

import {
  getMovies, getMovieDetail, getLikes, getComments,
} from './modules/store/API.js';

const moviesList = document.querySelector('.movies');
const popup = document.querySelector('.popup');
const movies = getMovies();
const likes = getLikes();

const moviesDataCollection = async (movies, likes) => {
  const movieLikes = await likes;
  let moviesData = await movies;
  moviesData = moviesData.map((item) => {
    const foundMovie = movieLikes.find((element) => element.item_id === item.id) || 0;
    return {
      id: item.id,
      name: item.name,
      image: item.image,
      network: item.network.name,
      country: item.network.country.name,
      genres: item.genres,
      status: item.status,
      likes: foundMovie.likes || 0,
    };
  });
  return moviesData;
};
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
        <p class="likes">${item.likes} likes</p>
        <button type='button' class="comment-button" id = ${item.id}>comments</button>
        `;
    moviesList.appendChild(movieCard);
  });
};
const openPopup = async (id) => {
  let com = await getComments(id);
  const movie = await getMovieDetail(id);
  if (com.length) {
    com = com.map((item) => `<li>${item.creation_date} ${item.username} : ${item.comment}</li>`);
  }
  popup.innerHTML = `
  <div class="popup-content">
  <div class="image-container">
    <img
      src=${movie.image.original}
      alt="movie pic"
    />
    <button type="button" class="close-detail">
      <i class="fa-solid fa-x"></i>
    </button>
  </div>
  <h2>${movie.name}</h2>
  <ul class="movie-info">
    <li><span>Network</span> : ${movie.network.name}</li>
    <li><span>County</span> : ${movie.network.country.name}</li>
    <li><span>Genres</span> : ${movie.genres}</li>
    <li><span>Status</span> : ${movie.status}</li>
  </ul>
  <h3>Comments(${com.length})}</h3>
  <ul>
   ${com}
  </ul>
  <h3>Add Comment</h3>
  <form action="" class="form">
    <input type="text" placeholder="Your name" required />
    <textarea name="" id="" cols="30" rows="10" placeholder="Your Insights" required></textarea>
    <button type="submit">Comment</button>
  </form>
  </div>
  `;
  popup.classList.remove('hide');
};

moviesList.addEventListener('click', (e) => {
  openPopup(e.target.id);
});
popup.addEventListener('click', (e) => {
  if (e.target.parentNode.className === 'close-detail') {
    popup.classList.toggle('hide');
  }
});

populateData(moviesDataCollection(movies, likes));
