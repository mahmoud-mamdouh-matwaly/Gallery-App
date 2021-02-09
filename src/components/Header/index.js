import React, { memo } from "react";

import { HeaderWrapper, Heading } from "./StyledHeader";
import { Container } from "../StyledContainer";

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <Container>
        <Heading>
          <span>Things</span> to experience
        </Heading>
      </Container>
    </HeaderWrapper>
  );
});

export default Header;
