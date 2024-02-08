import React, { forwardRef } from "react";
import styled from "styled-components";

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

const Menu5 = forwardRef(function Menu5(props, ref) {
  const sublinks = [
    "sub link 5",
    "sub link 5",
    "sub link 5",
    "sub link 5",
    "sub link 5",
    "sub link 5",
    "sub link 5",
    "sub link 5",
  ];
  return (
    <Popover ref={ref}>
      {sublinks.map((item, idx) => {
        return <p key={idx}>{item}</p>;
      })}
    </Popover>
  );
});

export default Menu5;
