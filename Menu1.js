import React from "react";
import styled from "styled-components";
import { forwardRef } from "react";

const Popover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  color: black;
  border-radius: 5px;

  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Menu1 = forwardRef(function Menu1(props, ref) {
  const sublinks = ["sub link 1", "sub link 1", "sub link 1"];

  return (
    <Popover ref={ref}>
      {sublinks.map((item, idx) => {
        return <p key={idx}>{item}</p>;
      })}
    </Popover>
  );
});

export default Menu1;
