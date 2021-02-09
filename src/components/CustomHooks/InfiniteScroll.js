import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";

export const useInfiniteScroll = (scrollRef, dispatch) => {
  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            dispatch();
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};

useInfiniteScroll.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scrollRef: PropTypes.object.isRequired
};
