import axios from "axios";

export const api = axios.create({
  baseURL: "http://yudopl.com/api/",
});

export const endpoints = {
  routes: "navigations?_sort=id:ASC",
  route: "navigations?url=",
  about: "yudo-poland/",
  aboutGlobal: "yudo-global/",
  productList: "product-list/",
  products: "products?slug=",
  technologies: "technologies?slug=",
  markets: "markets/",
  market: "markets?slug=",
  sucessfulCases: "sucessful-cases?display=true",
  downloads: "download/",
  contact: "contact/",
  // contactGlobal: "contact-global/",
};
