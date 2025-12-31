import {BASE_URL} from './constants.js';

const APIRoute = {
  GET: `${BASE_URL}/data`,
  POST: `${BASE_URL}/`,
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

function loadPosts() {
  return send(APIRoute.GET, Method.GET);
}

function sendForm(body) {
  return send(APIRoute.POST, Method.POST, body);
}

function send(route, method, body = null) {
  return fetch(route, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      throw Error(error);
    });
}


export {loadPosts, sendForm};
