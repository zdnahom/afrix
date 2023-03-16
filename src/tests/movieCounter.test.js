import movieCounter from '../modules/movieCounter.js';

// Set up our document body
document.body.innerHTML = `
<main class="main">
   <h1>Best Website to get your favorite Movies</h1>
   <section class="movies">
   <div class="movie-card"></div>
   <div class="movie-card"></div>
   </section>
</main>
`;

describe('movies counter', () => {
  it('check total movies found at the website', () => {
    // act
    const totalMovies = movieCounter();

    // assert
    expect(totalMovies).toBe(2);
  });
  it('check if no movies found at the website ', () => {
    // arrange
    const moviesContainer = document.querySelector('.movies');
    moviesContainer.innerHTML = '';

    // act
    const totalMovies = movieCounter();

    // assert
    expect(totalMovies).toBe(0);
  });
});