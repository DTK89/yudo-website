import React, { useState, useEffect } from "react";
import { api, endpoints } from "api";
import routesDefault from "routes/routes.json";

export const RoutesContext = React.createContext({
  navRoutes: [],
});

const RoutesProvider = ({ children }) => {
  const [navRoutes, setNavRoutes] = useState(routesDefault);

  useEffect(() => {
    api
      .get(endpoints.routes)
      .then(({ data }) => {
        setNavRoutes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <RoutesContext.Provider value={{ navRoutes }}>
      {children}
    </RoutesContext.Provider>
  );
};

export default RoutesProvider;
