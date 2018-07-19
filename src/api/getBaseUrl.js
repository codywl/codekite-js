// Return JSON server endpoint if in development
const getBaseUrl = function() {
  let isDev = window.location.hostname === "localhost";
  return isDev ? "http://localhost:3001/" : '/';
};

export {getBaseUrl as default}
