import styled from "styled-components";

export const HeaderWrapper = styled.header`
  text-transform: uppercase;
  padding-block-start: 10px;
  margin-block-end: 10px;
`;

export const Heading = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: #131313;
  & span {
    position: relative;
    &::after {
      content: "";
      width: 90%;
      height: 4px;
      background-color: #54c0eb;
      border-radius: 8px;
      position: absolute;
      left: 2px;
      bottom: -10px;
    }
  }
`;
