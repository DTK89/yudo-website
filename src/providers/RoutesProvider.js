import React, { useState, useEffect } from "react";
import { api, endpoints } from "api";
import routesDefault from "routes/routes.json";

export const RoutesContext = React.createContext({
  routes: [],
});

const RoutesProvider = ({ children }) => {
  const [routes, setRoutes] = useState(routesDefault);

  useEffect(() => {
    api
      .get(endpoints.routes)
      .then(({ data }) => {
        setRoutes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <RoutesContext.Provider value={{ routes }}>
      {children}
    </RoutesContext.Provider>
  );
};

export default RoutesProvider;
