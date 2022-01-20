import axios from "axios";

export const AUTH_TOKEN = "AUTH_TOKEN";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

const token = localStorage.getItem(AUTH_TOKEN);
if (token) {
  instance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem(AUTH_TOKEN)}`;
}

export default instance;
