import axios from "axios";

export const api = axios.create({
  baseURL: "http://yudopl.com/api/", // api route to endpoints
});

export const endpoints = {
  routes: "navigations?_sort=id:ASC", // website nav route tree in AScending order based on id
  about: "yudo-poland/", // endpoint for About YUDO Poland subsite data
  aboutGlobal: "yudo-global/", // endpoint for About YUDO Worldwide subsite data
  products: "products?slug=", // endpoit for specific product subsite data
  technologies: "technologies?slug=", // endpoit for specific technology subsite data
  market: "markets?slug=", // endpoit for specific market subsite data
  sucessfulCasesPages: "sucessful-cases/count?_where[market]=",
  sucessfulCasesList: "sucessful-cases?market=",
  sucessfulCases: "sucessful-cases?display=true", // endpoit to fetch marked for display Sucessful Cases on Homepage slider
  downloads: "download/", // sekcja downloads
  contact: "contact/", // endpint  to fetch YUDO Poland Contact List
  contactGlobal: "contact-worldwide/", // endpint to fetch YUDO worldwide Contact List
};
