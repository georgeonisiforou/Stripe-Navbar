import React, { forwardRef } from "react";
import styled from "styled-components";

const Popover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  color: black;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 600;

  padding: 1rem;
`;

const Menu3 = forwardRef(function Menu3(props, ref) {
  const sublinks = ["sub link 3", "sub link 3"];
  return (
    <Popover ref={ref}>
      {sublinks.map((item, idx) => {
        return <p key={idx}>{item}</p>;
      })}
    </Popover>
  );
});

export default Menu3;
