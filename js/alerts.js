let isModalShown = false;

function createUploadErrorElement(errorText) {
  const errorMessageElement = document.createElement('section');
  errorMessageElement.classList.add('overlay');
  errorMessageElement.innerHTML = `
   <div class='error-container data-error'>
    <button type="button" class="cancel error-container__close">Закрыть</button>
    <p>${errorText}</p>
   </div>`;
  return errorMessageElement;
}

function renderUploadError(errorText) {
  const errorMessageElement = createUploadErrorElement(errorText);
  const closeBtn = errorMessageElement.querySelector('.error-container__close');
  function closeFunction() {
    errorMessageElement.remove();
    closeBtn.removeEventListener('click', onClick);
  }
  function onClick () {
    closeFunction();
  }
  closeBtn.addEventListener('click', onClick);
  errorMessageElement.addEventListener('click', onClick);
  document.body.appendChild(errorMessageElement);
}

function createResponseMessage(button, modalOverlay) {
  isModalShown = true;

  function close() {
    isModalShown = false;
    button.removeEventListener('click', onBtnCLick);
    modalOverlay.removeEventListener('click', onOverlayCLick);
    document.removeEventListener('keydown', onKeydown);
    if (modalOverlay.classList.contains('error')) {
      const overlay = document.querySelector('.img-upload__overlay');
      overlay.classList.remove('hidden');
    }
    modalOverlay.remove();
  }

  function onKeydown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      close();
    }
  }

  function onBtnCLick() {
    close();
  }

  function onOverlayCLick(evt) {
    if (evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
      return;
    }
    close();
  }

  button.addEventListener('click', onBtnCLick);
  modalOverlay.addEventListener('click', onOverlayCLick);
  document.addEventListener('keydown', onKeydown);
  document.body.appendChild(modalOverlay);
}

function renderSuccessMessage() {
  const templateContent = document.querySelector('#success').content;
  const template = templateContent.querySelector('.success').cloneNode(true);
  const btn = template.querySelector('.success__button');
  createResponseMessage(btn, template);
}

function renderErrorMessage() {
  const overlay = document.querySelector('.img-upload__overlay');
  overlay.classList.add('hidden');
  const templateContent = document.querySelector('#error').content;
  const template = templateContent.querySelector('.error').cloneNode(true);
  const btn = template.querySelector('.error__button');
  createResponseMessage(btn, template);
}

export {renderUploadError, renderSuccessMessage, renderErrorMessage, isModalShown};
