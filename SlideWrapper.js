import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: absolute;
  transition: all 0.4s ease;
  opacity: ${({ index, hovering }) => (index === hovering ? 1 : 0)};
  pointer-events: ${({ index, hovering }) =>
    index === hovering ? null : "none"};
  transform: ${({ index, hovering }) =>
    hovering === index || hovering === null
      ? "none"
      : hovering > index
      ? "translateX(-6rem)"
      : "translateX(6rem)"};
`;

const SlideWrapper = ({ index, hovering, children }) => {
  return (
    <Container index={index} hovering={hovering}>
      {children}
    </Container>
  );
};

export default SlideWrapper;
