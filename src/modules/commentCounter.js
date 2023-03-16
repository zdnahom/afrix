const commentCounter = () => {
  const commentElement = document.querySelectorAll('.comment');
  return commentElement.length;
};
export default commentCounter;