import React, { useState, memo, useCallback } from "react";
import PropTypes from "prop-types";

import TabItem from "./TabItem";

import { TabsContainer } from "./StyledTabs";
import { Container } from "../StyledContainer";

const list = [
  {
    id: 1,
    title: "food",
    label: "food",
    icon:
      "https://gist.githubusercontent.com/ReemLotfy/4ea8e4b71c4af5f1aa0e321869ea2b0d/raw/6415d9ce226c0b535a4743357ea291a97c959af6/food-icon.svg"
  },
  {
    id: 2,
    title: "Golf",
    label: "golf",
    icon:
      "https://gist.githubusercontent.com/ReemLotfy/4ea8e4b71c4af5f1aa0e321869ea2b0d/raw/6415d9ce226c0b535a4743357ea291a97c959af6/golf-icon.svg"
  },
  {
    id: 3,
    title: "Art & Design",
    label: "arts",
    icon:
      "https://gist.githubusercontent.com/ReemLotfy/4ea8e4b71c4af5f1aa0e321869ea2b0d/raw/6415d9ce226c0b535a4743357ea291a97c959af6/art-icon.svg"
  }
];

const Tabs = memo(({ handleFetchGallery }) => {
  const defaultCategory = "food";
  const [active, setActive] = useState(defaultCategory);

  const handleFetch = useCallback(
    type => {
      handleFetchGallery(type);
      setActive(prev => prev !== type && type);
    },
    [handleFetchGallery, setActive]
  );

  return (
    <nav>
      <Container>
        <TabsContainer>
          {list.map(item => {
            return (
              <TabItem
                title={item.title}
                label={item.label}
                icon={item.icon}
                active={active}
                key={item.id}
                handleClick={handleFetch}
              />
            );
          })}
        </TabsContainer>
      </Container>
    </nav>
  );
});

export default Tabs;

Tabs.propTypes = {
  handleFetchGallery: PropTypes.func.isRequired
};
