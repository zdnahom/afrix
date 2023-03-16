import { getMovies, getLikes } from './API.js';

const moviesDataCollection = async () => {
  const movieLikes = await getLikes();
  let moviesData = await getMovies();
  moviesData = moviesData.map((item) => {
    const foundMovie = movieLikes.find(
      (element) => Number(element.item_id) === Number(item.id),
    ) || 0;
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
export default moviesDataCollection;
