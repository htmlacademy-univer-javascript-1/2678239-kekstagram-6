function createPicture(data, template) {
  const newPicture = template.cloneNode(true);
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
  const templateContent = document.querySelector('#picture').content;
  const picturesContainer = document.querySelector('.pictures');
  const pictureListFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {pictureListFragment.appendChild(createPicture(picture, templateContent));});
  picturesContainer.append(pictureListFragment);
}

export {renderPictures};
