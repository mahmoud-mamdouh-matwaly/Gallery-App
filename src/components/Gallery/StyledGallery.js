import styled from "styled-components";

export const ListWrapper = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(149px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(134px, 1fr));
  grid-auto-rows: 185px;
  grid-auto-rows: 164px;
  grid-auto-flow: row dense;
  & li:nth-child(5) {
    grid-column: span 2;
    grid-row: span 2;
  }
  & li:nth-child(9) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }
  & li:nth-child(13) {
    grid-column: 7 / 9;
    grid-row: span3 / 4;
  }
  @media (max-width: 1199px) {
    & li:nth-child(9) {
      grid-column: span 2;
    }
    & li:nth-child(13) {
      grid-column: auto;
      grid-row: auto;
    }
  }
`;

export const ItemWrapper = styled.li`
  background-color: #ccc;
  border-radius: 5px;
  display: ${props => props.visible && "none"};
`;

export const Skeleton = styled.div`
  content: "";
  display: block;
  width: 100%;
  height: auto;
  transition: all 0.6s ease;
  background-image: linear-gradient(
    90deg,
    rgba(51, 51, 51, 0) 0,
    rgb(51 51 51 / 30%) 50%,
    rgb(51 51 51 / 28%) 100%
  );
`;

export const WrapperCard = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  height: 100%;
  & img {
    display: ${props => props.visible && "none"};
  }
  & video,
  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
