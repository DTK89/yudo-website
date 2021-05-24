import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";

const activeClassName = "active";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Head = styled.button.attrs({ activeClassName })`
  width: 100%;
  font-family: "Quicksand", sans-serif;
  font-size: 1.4rem;
  color: #555;
  text-align: center;
  text-transform: uppercase;
  outline-style: none;
  font-weight: 700;
  padding: 1rem 1rem;
  background: var(--clr-secondary);
  border: none;
  display: block;
  transition: all 0.5s ease 0s;

  display: flex;
  justify-content: space-between;
  background: ${({ isOpen }) =>
    isOpen ? "var(--clr-trinary)" : "var(--clr-secondary)"};

  &:hover {
    background: var(--clr-trinary);
  }

  &.${activeClassName} {
    background: var(--clr-primary);
    box-shadow: inset 0 5px 0 0 #fff;
  }

  ${({ sidebar }) =>
    sidebar &&
    css`
      text-transform: uppercase;
      font-weight: 700;
      padding: 1.1rem 1.5rem;
      margin-bottom: 2rem;
      background: hsla(0, 0%, 100%, 0.8);
      border: 1px solid white;

      &:hover {
        background: hsla(0, 0%, 100%, 0.5);
      }

      &.${activeClassName} {
        background: hsla(0, 0%, 100%, 0.5);
        box-shadow: inset 0 5px 0 0 #fff;
      }
    `}
`;

const Icon = styled.span`
  font-size: 1.4rem;
  transition: transform ease 500ms;
  transform: ${({ isOpen }) => (isOpen ? "rotate(-180deg)" : "rotate(0deg)")};

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
  background-color: var(--clr-trinary);

  ${({ sidebar }) =>
    sidebar &&
    css`
      background-color: transparent;
    `}
`;

const SubMenuDropdown = ({
  index,
  labelTitle,
  children,
  active,
  setActive,
  sidebar,
}) => {
  // If active and set active is not delivered this is checkoption for opening and closing
  const [localActive, setLocalActive] = useState(false);
  // reduce two checks to one prop to pass
  const isOpen = active === index || localActive;
  // refs to Accordion main elements
  const dropdownBodyRef = useRef(null);
  const dropdownContentRef = useRef(null);

  useEffect(() => {
    const contentHeight = dropdownContentRef.current.getBoundingClientRect()
      .height;
    if (isOpen) {
      dropdownBodyRef.current.style.height = `${contentHeight + 20}px`;
    } else {
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
      <Head isOpen={isOpen} onClick={accordionClickHandler} sidebar={sidebar}>
        <Icon isOpen={isOpen}>
          <IoIosArrowDown />
        </Icon>
        {labelTitle}
        <Icon isOpen={isOpen}>
          <IoIosArrowDown />
        </Icon>
      </Head>
      <Body ref={dropdownBodyRef}>
        <div ref={dropdownContentRef}>{children}</div>
      </Body>
    </Container>
  );
};

SubMenuDropdown.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.number,
  setActive: PropTypes.func,
  sidebar: PropTypes.bool,
};

SubMenuDropdown.defaultProps = {
  active: null,
  setActive: null,
  sidebar: false,
};

export default SubMenuDropdown;
