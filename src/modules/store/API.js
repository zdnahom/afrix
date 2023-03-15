export const getMovies = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  return data.slice(0, 9);
};
export const getMovieDetail = async (id) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();
  return data;
};

export const getLikes = async () => {
  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iO26MOgyDZzMsAn4LSwJ/likes',
  );
  const data = await res.json();
  return data;
};

export const getComments = async (id) => {
  let data = [];

  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iO26MOgyDZzMsAn4LSwJ/comments?item_id=${id}`,
  );
  if (res.status === 200) {
    data = await res.json();
  }
  return data;
};

export const addLike = async (id) => {
  const res = await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iO26MOgyDZzMsAn4LSwJ/likes",
    {
      method: "POST",
      body: JSON.stringify({ item_id: Number(id) }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return res;
};