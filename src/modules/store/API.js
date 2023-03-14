const getMovies = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  return data.slice(9, 18);
};
export default getMovies;