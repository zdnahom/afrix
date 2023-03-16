import commentsCounter from '../modules/commentCounter.js';

// Set up our document body
document.body.innerHTML = `
<ul class="comments-container">
<li class="comment"></li>
<li class="comment"></li>
</ul>
`;

describe('movies counter', () => {
  it('check total comments are found for a specific movie', () => {
    // act
    const totalComments = commentsCounter();

    // assert
    expect(totalComments).toBe(2);
  });
  it('check if no comment is found for a specific movie ', () => {
    // arrange
    const commentsContainer = document.querySelector('.comments-container');
    commentsContainer.innerHTML = '';

    // act
    const totalComments = commentsCounter();

    // assert
    expect(totalComments).toBe(0);
  });
});