function createUploadErrorElement(errorText) {
  const errorMessageElement = document.createElement('section');
  errorMessageElement.classList.add('overlay');
  errorMessageElement.innerHTML = `
   <div class='error-container'>
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

function createResponseMessage(button, template) {
  const overlay = template.cloneNode(true);
  function close() {
    button.removeEventListener('click', onCLick);
    overlay.removeEventListener('click', onCLick);
    document.removeEventListener('keydown', onKeydown);
    overlay.remove();
  }

  function onKeydown(evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      close();
    }
  }
  function onCLick() {
    close();
  }

  button.addEventListener('click', onCLick);
  overlay.addEventListener('click', onCLick);
  document.addEventListener('keydown', onKeydown);
  document.body.appendChild(overlay);
}

function renderSuccessMessage() {
  const templateContent = document.querySelector('#success').content;
  const btn = templateContent.querySelector('.success__button');
  const template = templateContent.querySelector('.success');
  createResponseMessage(btn, template);
}

function renderErrorMessage() {
  const templateContent = document.querySelector('#error').content;
  const btn = templateContent.querySelector('.error__button');
  const template = templateContent.querySelector('.error');
  createResponseMessage(btn, template);
}

export {renderUploadError, renderSuccessMessage, renderErrorMessage};
