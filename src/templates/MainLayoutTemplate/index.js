import React, { useContext } from "react";
import PropTypes from "prop-types";
// import { api, endpoints } from "api";
import Header from "components/Header";
import Footer from "components/Footer";
import styled from "styled-components";
import backupImg from "assets/backgrounds/Products.jpg";
import { RoutesContext } from "providers/RoutesProvider";

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  /* min-height: 100vh; */
  background: url(${({ backgroundImg }) => backgroundImg}) no-repeat center
    center fixed;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  background-color: hsla(0, 0%, 100%, 0.6);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const MainLayout = ({ children, backgroundImg }) => {
  const { navRoutes } = useContext(RoutesContext);
  return (
    <BackgroundImage backgroundImg={backgroundImg}>
      <Header routes={navRoutes} />
      <BackgroundFilter>{children}</BackgroundFilter>
      <Footer routes={navRoutes} />
    </BackgroundImage>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  backgroundImg: PropTypes.string,
};

MainLayout.defaultProps = {
  backgroundImg: backupImg,
};

export default MainLayout;
