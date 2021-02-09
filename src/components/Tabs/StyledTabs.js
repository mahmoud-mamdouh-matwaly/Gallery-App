import styled from "styled-components";

export const TabsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  & li + li {
    margin-inline-start: 3rem;
  }
`;

export const SubTitleWrapper = styled.span`
  font-size: 12px;
  text-transform: capitalize;
`;

export const ListItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 6%;
  & div::before {
    content: "";
    position: absolute;
    width: 61px;
    height: 60px;
    background-color: ${props => (props.isActive ? "#00a8f3" : "transparent")};
    border-radius: 50px;
    box-shadow: -4px -4px 5px rgb(255 255 255), 0px 0px 0px 5px #f3fbfe;
  }
`;

export const IconContainer = styled.div`
  position: relative;
  width: ${props => (props.isActive ? "77px" : "70px")};
  height: ${props => (props.isActive ? "77px" : "70px")};
  border-radius: 50px;
  border: ${props =>
    props.isActive ? "2px dotted #66ccf9" : "2px dotted transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: 10px;
  cursor: pointer;
  box-shadow: ${props =>
    !props.isActive &&
    "4px 6px 11px 4px rgb(237 247 254), 0 1px 2px rgb(0 0 0 / 10%)"};
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-inline-start: 12px;
  margin-inline-end: 12px;
  overflow: hidden;
  ${props =>
    props.alt === "food" &&
    `filter: ${
      props.isActive
        ? `invert(15%) sepia(100%) saturate(0%) hue-rotate(104deg) brightness(103%) contrast(103%)`
        : `invert(80%) sepia(0%) saturate(7469%) hue-rotate(300deg)
    brightness(90%) contrast(100%)`
    }`};
  ${props =>
    props.alt !== "food" &&
    `filter: ${
      props.isActive
        ? `invert(100%) sepia(100%) saturate(0%) hue-rotate(104deg) brightness(103%) contrast(103%)`
        : `none`
    }`};
`;
