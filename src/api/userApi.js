// Polyfill for Fetch API until supported everywhere
import 'whatwg-fetch';

const get = function(url) {
  return fetch(url).then(onSuccess, onError);
};

const onSuccess = function(res) {
  return res.json();
};

const onError = function(err) {
  console.log(err); // eslint-disable-line no-console
};

export default function getUsers() {
  return get('users');
}
