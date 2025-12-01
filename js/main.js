import {createPostGenerator, createCommentGenerator} from './data.js';

function main() {
  const commentGenerator = createCommentGenerator();
  const photoGenerator = createPostGenerator(commentGenerator);

  const size = 25;
  const posts = [];
  for (let i = 1; i <= size; i++) {
    posts.push(photoGenerator());
  }
}

main();
