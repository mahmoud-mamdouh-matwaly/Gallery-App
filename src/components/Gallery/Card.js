import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CatchDownloadError } from "../CustomHooks/CatchDownloadError";

import { ItemWrapper, WrapperCard } from "./StyledGallery";

const Card = memo(({ photos, hasVideo, videos }) => {
  const [changeIndex, setChangeIndex] = useState(0);
  const [setEl, hasError] = CatchDownloadError();

  useEffect(() => {
    if (photos.length === 1) {
      setChangeIndex(0);
    } else {
      // handle change images or videos every five seconds
      var time = setInterval(() => {
        setChangeIndex(Math.floor(Math.random() * photos.length));
      }, 5000);
    }

    return () => {
      clearInterval(time);
    };
  }, [photos]);

  return (
    <>
      <ItemWrapper largeItem={hasVideo} visible={hasError}>
        {!hasVideo && (
          <WrapperCard visible={hasError}>
            <img ref={setEl} src={photos[changeIndex]} alt="" loading="lazy" />
          </WrapperCard>
        )}

        {hasVideo && (
          <WrapperCard>
            <video autoPlay="autoplay" muted loop playsInline>
              <source src={`${videos[changeIndex] ?? ""}`} ref={setEl} />
            </video>
          </WrapperCard>
        )}
      </ItemWrapper>
    </>
  );
});

export default Card;

Card.propTypes = {
  hasVideo: PropTypes.bool,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  videos: PropTypes.arrayOf(PropTypes.string)
};
