import Link from "next/link";
import React, { Children, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";
import SlideWrapper from "./SlideWrapper";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  position: relative;
`;

const NavLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 50px;
  transition: all 0.3s ease;
  width: 300px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
`;

const Navbar = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  const [popoverHeight, setPopoverHeight] = useState(null);

  const refs = useRef([]);

  const onMouseEnter = (index, el) => {
    setHovering(index);
    const menuElement = refs.current[index];
    if (menuElement) {
      setPopoverHeight(menuElement.offsetHeight);
    }
    setPopoverLeft(el.offsetLeft);
  };

  const navlinks = [
    {
      id: 0,
      name: "Nav Link 1",
    },
    {
      id: 1,
      name: "Nav Link 2",
    },
    {
      id: 2,
      name: "Nav Link 3",
    },
    {
      id: 3,
      name: "Nav Link 4",
    },
    {
      id: 4,
      name: "Nav Link 5",
    },
  ];

  return (
    <Container>
      {navlinks.map((navItem, idx) => {
        return (
          <NavLink
            href={""}
            key={navItem.id}
            onMouseEnter={(e) => {
              onMouseEnter(navItem.id, e.currentTarget);
            }}
          >
            {navItem.name}
          </NavLink>
        );
      })}

      <Menu
        onMouseLeave={() => {
          setHovering(null);
          setPopoverHeight(0);
        }}
        style={{
          left: popoverLeft ?? 0,
          height: popoverHeight ?? 0,
        }}
      >
        <SlideWrapper index={0} hovering={hovering}>
          <Menu1 ref={(element) => (refs.current[0] = element)} />
        </SlideWrapper>

        <SlideWrapper index={1} hovering={hovering}>
          <Menu2 ref={(element) => (refs.current[1] = element)} />
        </SlideWrapper>

        <SlideWrapper index={2} hovering={hovering}>
          <Menu3 ref={(element) => (refs.current[2] = element)} />
        </SlideWrapper>

        <SlideWrapper index={3} hovering={hovering}>
          <Menu4 ref={(element) => (refs.current[3] = element)} />
        </SlideWrapper>

        <SlideWrapper index={4} hovering={hovering}>
          <Menu5 ref={(element) => (refs.current[4] = element)} />
        </SlideWrapper>
      </Menu>
    </Container>
  );
};

export default Navbar;
