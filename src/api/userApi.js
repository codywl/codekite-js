// Polyfill for Fetch API until supported everywhere
import 'whatwg-fetch';
import getBaseUrl from './getBaseUrl';

const baseUrl = getBaseUrl();

const get = function(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
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
