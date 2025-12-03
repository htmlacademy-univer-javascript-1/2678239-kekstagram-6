const templateContent = document.querySelector('#picture').content;


function createPicture(data) {
  const newPicture = templateContent.cloneNode(true);
  const img = newPicture.querySelector('img');
  const likes = newPicture.querySelector('.picture__likes');
  const comments = newPicture.querySelector('.picture__comments');

  img.src = data.url;
  img.alt = data.description;
  likes.textContent = data.likes;
  comments.textContent = data.comments;
  return newPicture;
}

function renderPictures(pictures) {
  const pictureContainer = document.querySelector('.pictures');
  const pictureListFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {pictureListFragment.appendChild(createPicture(picture));});
  pictureContainer.append(pictureListFragment);
}

export {renderPictures};
