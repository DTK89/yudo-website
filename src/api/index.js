import axios from "axios";

export const api = axios.create({
  // baseURL: "http://172.29.61.46:1337/",
  baseURL: "http://localhost:1337/",
});

export const endpoints = {
  about: "about-us/",
  aboutGlobal: "about-yudo/",
  productList: "product-list/",
  products: "products?slug=",
  technologyList: "technology-list/",
  technologies: "technologies?slug=",
  marketList: "market-list/",
  market: "markets?slug=",
  markets: "markets/",
  sucessfulCases: "sucessful-cases?_limit=3",
  downloads: "download/",
  contact: "contact/",
  contactGlobal: "contact-global/",
};
