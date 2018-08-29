import axios from "axios";
import getBaseUrl from "./getBaseUrl";

const baseUrl = getBaseUrl();

const get = async url => {
  try {
    const res = await axios.get(baseUrl + url);
    localStorage.setItem("users", JSON.stringify(res.data.toString()));
    return res.data;
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }
};

const getUsers = () => {
  return get("users");
};

export default getUsers;
