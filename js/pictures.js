const templateContent = document.querySelector('#picture').content;


function createPicture(data) {
  const newPicture = templateContent.cloneNode(true);
  const img = newPicture.querySelector('img');
  const likes = newPicture.querySelector('.picture__likes');
  const comments = newPicture.querySelector('.picture__comments');

  img.src = data.url;
  img.alt = data.description;
  likes.textContent = data.likes;
  comments.textContent = data.comments.length;
  return newPicture;
}

function renderPictures(pictures) {
  const picturesContainer = document.querySelector('.pictures');
  const pictureListFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {pictureListFragment.appendChild(createPicture(picture));});
  picturesContainer.append(pictureListFragment);
}

export {renderPictures};
