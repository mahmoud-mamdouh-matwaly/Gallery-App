import React, { Suspense, lazy, memo } from "react";
import PropTypes from "prop-types";

import { useInfiniteScroll } from "../CustomHooks/InfiniteScroll";

import { ListWrapper, Skeleton } from "./StyledGallery";

const Card = lazy(() => import("./Card"));

const Galley = memo(({ list, handlePage, loadMoreRef }) => {
  useInfiniteScroll(loadMoreRef, handlePage);

  return (
    <ListWrapper>
      {list.map(item => {
        return (
          <Suspense fallback={<Skeleton aria-label="loading" />} key={item?.id}>
            <Card
              hasVideo={item?.has_video}
              photos={item?.photos}
              videos={item?.videos}
            />
          </Suspense>
        );
      })}
    </ListWrapper>
  );
});

export default Galley;

Galley.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlePage: PropTypes.func,
  loadMoreRef: PropTypes.object
};
