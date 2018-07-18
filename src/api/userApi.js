// Polyfill for Fetch API until supported everywhere
import 'whatwg-fetch';

export function getUsers() {
  return get('users');
};

const get = function(url) {
  return fetch(url).then(onSuccess, onError);
};

const onSuccess = function(res) {
  return res.json();
};

const onError = function(err) {
  console.log(err); // eslint-disable-line no-console
};
