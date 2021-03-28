import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Head = styled.button`
  width: 100%;
  font-family: "Quicksand", sans-serif;
  font-size: 1.4rem;
  color: #555;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1.1rem 1.5rem;
  margin-bottom: 2rem;
  background: hsla(0, 0%, 100%, 0.8);
  border: 1px solid white;
  display: block;
  transition: all 0.5s ease 0s;

  display: flex;
  justify-content: space-between;

  &:hover {
    background: hsla(0, 0%, 100%, 0.5);
  }

  &:active {
    background: hsla(0, 0%, 100%, 0.5);
    box-shadow: inset 0 5px 0 0 #fff;
  }
`;

const Icon = styled.span`
  font-size: 1.4rem;
  transition: transform ease 500ms;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
  svg {
    display: block;
  }
`;

const Body = styled.div`
  overflow: hidden;
  transition: height ease 500ms;
`;

const SidebarDropdown = ({
  index,
  labelTitle,
  children,
  active,
  setActive,
}) => {
  // If active and set active is not delivered this is checkoption for opening and closing
  const [localActive, setLocalActive] = useState(false);
  // reduce two checks to one prop to pass
  const isOpen = active === index || localActive;
  // refs to Accordion main elements
  const dropdownBodyRef = useRef(null);
  const buttonArrowRef1 = useRef(null);
  const buttonArrowRef2 = useRef(null);
  const dropdownContentRef = useRef(null);

  useEffect(() => {
    const contentHeight = dropdownContentRef.current.getBoundingClientRect()
      .height;
    if (isOpen) {
      buttonArrowRef1.current.style.transform = `rotate(-180deg)`;
      buttonArrowRef2.current.style.transform = `rotate(-180deg)`;
      dropdownBodyRef.current.style.height = `${contentHeight + 20}px`;
    } else {
      buttonArrowRef1.current.style.transform = `rotate(0deg)`;
      buttonArrowRef2.current.style.transform = `rotate(0deg)`;
      dropdownBodyRef.current.style.height = `0px`;
    }
  }, [isOpen]);

  const globalCloseAccHandler = () => {
    setActive(null);
  };

  const globalOpenAccHandler = () => {
    setActive(index);
  };

  const accordionClickHandler = () => {
    if (setActive === null) {
      setLocalActive(!localActive);
    } else if (active === index) {
      globalCloseAccHandler();
    } else {
      globalOpenAccHandler();
    }
  };

  return (
    <Container>
      <Head onClick={accordionClickHandler}>
        <Icon ref={buttonArrowRef1}>
          <IoIosArrowDown />
        </Icon>
        {labelTitle}
        <Icon ref={buttonArrowRef2}>
          <IoIosArrowDown />
        </Icon>
      </Head>
      <Body ref={dropdownBodyRef}>
        <div ref={dropdownContentRef}>{children}</div>
      </Body>
    </Container>
  );
};

SidebarDropdown.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.number,
  setActive: PropTypes.func,
};

SidebarDropdown.defaultProps = {
  active: null,
  setActive: null,
};

export default SidebarDropdown;
