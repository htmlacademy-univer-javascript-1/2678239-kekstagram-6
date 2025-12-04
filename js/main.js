import {createPostGenerator, createCommentGenerator} from './data.js';
import {renderPictures} from './pictures.js';

function main() {
  const commentGenerator = createCommentGenerator();
  const postGenerator = createPostGenerator(commentGenerator);
  const size = 25 ;
  const posts = [];
  for (let i = 1; i <= size; i++) {
    posts.push(postGenerator());
  }
  renderPictures(posts);
}

main();
