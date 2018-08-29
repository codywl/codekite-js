// Return JSON server endpoint if in development
const getBaseUrl = () => {
  let isDev = window.location.hostname === "localhost";
  return isDev ? "http://localhost:3001/" : "/";
};

export default getBaseUrl;
