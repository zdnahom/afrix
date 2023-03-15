export const getMovies = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  return data.slice(9, 18);
};
export const getMovieDetail = async (id) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();
  return data;
};

export const getLikes = async () => {
  const res = await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iO26MOgyDZzMsAn4LSwJ/likes"
  );
  const data = await res.json();
  console.log(data)
  return data;
};
