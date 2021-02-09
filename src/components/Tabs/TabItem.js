import React, { memo } from "react";
import PropTypes from "prop-types";

import {
  ListItemWrapper,
  IconContainer,
  Icon,
  SubTitleWrapper
} from "./StyledTabs";

const TabItem = memo(({ label, icon, title, active, handleClick }) => {
  return (
    <ListItemWrapper
      isActive={active === label}
      onClick={() => handleClick(label)}
      aria-label={`tab item ${label}`}
    >
      <IconContainer isActive={active === label}>
        <Icon src={icon} alt={label} isActive={active === label} />
      </IconContainer>

      <SubTitleWrapper>{title}</SubTitleWrapper>
    </ListItemWrapper>
  );
});
export default TabItem;

TabItem.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired
};
