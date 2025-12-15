import {MAX_DESCRIPTION_LENGTH, MAX_HASHTAGS_COUNT, HASHTAG_REGEXP} from './constants.js';

function getErrorHashtagInput(value) {
  if (value === '') {
    return '';
  }
  const hashtags = value.toLowerCase().trim().split(/\s+/);
  if (hashtags.length > MAX_HASHTAGS_COUNT) {
    return `Число хэштегов не должно превышать ${MAX_HASHTAGS_COUNT}`;
  }

  for (let i = 0; i < hashtags.length; i++) {
    const hashtag = hashtags[i];
    if (!HASHTAG_REGEXP.test(hashtag)) {
      if (hashtag[0] !== '#') {
        return 'Хэштеги должны начинаться с символа "#"';
      }
      if (hashtag.length > 20) {
        return 'Длина хэштега не должна превышать 20 символов';
      }
      return 'Хэштег должен содержать только буквы и числа и не может содержать пробелы, спецсимволы';
    }
    if (hashtags.indexOf(hashtag) !== i) {
      return 'Хэштеги не должны повторятся';
    }
  }
}

function validateHashtag(value) {
  if (value === '') {
    return true;
  }

  const hashtags = value.toLowerCase().trim().split(/\s+/);
  if (hashtags.length > MAX_HASHTAGS_COUNT) {
    return false;
  }
  return hashtags.every((hashtag, i, array) =>
    HASHTAG_REGEXP.test(hashtag) && i === array.indexOf(hashtag));
}

function validateDescription(value) {
  return value.length >= 0 && value.length <= MAX_DESCRIPTION_LENGTH;
}

function initValidator() {
  const form = document.querySelector('.img-upload__form');
  const hashtagElement = document.querySelector('.text__hashtags');
  const descriptionElement = document.querySelector('.text__description');

  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorClass: 'img-upload__error',
  });

  const descriptionError = `Длина комментария не должна превышать ${MAX_DESCRIPTION_LENGTH} символов`;
  pristine.addValidator(hashtagElement, validateHashtag, getErrorHashtagInput);
  pristine.addValidator(descriptionElement, validateDescription, descriptionError);
  return pristine;
}
export {initValidator};

