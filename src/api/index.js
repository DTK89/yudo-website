import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:1337/",
});

export const endpoints = {
  about: "about-us/",
  aboutGlobal: "about-yudo/",
  contact: "contact/",
  contactGlobal: "contact-global/",
};
