import {generatePosts} from './data.js';
import {renderPictures} from './pictures.js';

function main() {
  const posts = generatePosts(25);
  renderPictures(posts);
}

main();
