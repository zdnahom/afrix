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
const openPopup=async (id)=>{
  console.log(`${id} : popup opened`)
  const movie= await getMovieDetail(id)
  popup.innerHTML=`
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
    <li><span>County</span> : ${movie.network.country['name']}</li>
    <li><span>Genres</span> : ${movie.genres}</li>
    <li><span>Status</span> : ${movie.status}</li>
  </ul>
  <h3>Comments(2)</h3>
  <ul>
    <li>03/11/2021 Alex : The Cooles anime that I've watched</li>
    <li>03/11/2021 Alex : The Cooles anime that I've watched</li>
    <li>03/11/2021 Alex : The Cooles anime that I've watched</li>
  </ul>
  <h3>Add Comment</h3>
  <form action="" class="form">
    <input type="text" placeholder="Your name" required />
    <textarea name="" id="" cols="30" rows="10" placeholder="Your Insights" required></textarea>
    <button type="submit">Comment</button>
  </form>
  </div>
  `
  popup.classList.remove('hide')
}
populateData(movies);
