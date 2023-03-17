import { getComments, getMovieDetail, addComment } from './store/API.js';

const popup = document.querySelector('.popup');

const openPopup = async (id) => {
  let comments = await getComments(id);
  const movie = await getMovieDetail(id);
  if (comments.length) {
    comments = comments.map(
      (item) => `<li class="comment">${item.creation_date} ${item.username} : ${item.comment}</li>`,
    );
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
      <li><span>Country</span> : ${movie.network.country.name}</li>
      <li><span>Genres</span> : ${movie.genres}</li>
      <li><span>Status</span> : ${movie.status}</li>
    </ul>
    <h3 class = "comment-countText">Comments(<span>0</span>)</h3>
    <ul class ="comments-container">
     ${comments}
    </ul>
    <h3>Add Comment</h3>
    <form action="" class="form">
      <input type="text" placeholder="Your name" name= "userName"required />
      <textarea name="commentText" id="" cols="30" rows="10" placeholder="Your Insights" required></textarea>
      <button type="submit">Comment</button>
    </form>
    </div>
    `;
  popup.classList.remove('hide');

  const commentsContainer = popup.querySelector('.comments-container');
  const closeButton = popup.querySelector('.fa-x');
  const commentForm = popup.querySelector('.form');
  const { userName, commentText } = commentForm.elements;

  closeButton.addEventListener('click', () => {
    popup.classList.toggle('hide');
  });

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment(id, userName.value, commentText.value);
    const date = new Date();
    const createdAt = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const commentLi = document.createElement('li');
    commentLi.innerHTML = `${createdAt} ${userName.value} : ${commentText.value}`;
    commentsContainer.appendChild(commentLi);
    const totalCommentsText = document.querySelector('.comment-countText span');
    totalCommentsText.textContent = Number(totalCommentsText.textContent) + 1;
  });
};
export default openPopup;