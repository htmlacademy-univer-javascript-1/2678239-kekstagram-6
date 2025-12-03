import {createPostGenerator, createCommentGenerator, createPictureGenerator} from './data.js';
import {renderPictures} from './pictures.js';

function main() {
  const commentGenerator = createCommentGenerator();
  const postGenerator = createPostGenerator(commentGenerator);
  const picturesGenerator = createPictureGenerator();
  const size = 25 ;
  const pictures = [];
  const posts = [];
  for (let i = 1; i <= size; i++) {
    posts.push(postGenerator());
    pictures.push(picturesGenerator());
  }
  renderPictures(pictures);
}

main();
