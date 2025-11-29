import {createPhotoGenerator, createCommentGenerator} from './data.js';

function main() {
  const commentGenerator = createCommentGenerator();
  const photoGenerator = createPhotoGenerator(commentGenerator);

  const size = 25;
  const photos = [];
  for (let i = 1; i <= size; i++) {
    photos.push(photoGenerator());
  }

  console.log(photos);
}

main();
