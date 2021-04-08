import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.30.41.96:1337/",
  // baseURL: "http://localhost:1337/",
});

export const endpoints = {
  routes: "routes/",
  route: "routes?url=",
  about: "yudo-poland/",
  aboutGlobal: "yudo-worldwide/",
  productList: "product-list/",
  products: "products?slug=",
  technologies: "technologies?slug=",
  markets: "markets/",
  market: "markets?slug=",
  sucessfulCases: "sucessful-cases?display=true",
  downloads: "download/",
  contact: "contact/",
  contactGlobal: "contact-global/",
};
