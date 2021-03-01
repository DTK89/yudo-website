import React from "react";
import PropTypes from "prop-types";
import Header from "components/Header";
import Footer from "components/Footer";

const NavigationTemplate = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

NavigationTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default NavigationTemplate;
