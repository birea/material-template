import React, { useEffect, useCallback } from "react";
// import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import "./css/embla.css";
import "./css/thoughtBubble.css";

import ThoughtBubble from "./ThoughtBubble";
import VerticalCarousel from "./VerticalCarousel";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  //Button Callbacks
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <>
      <div className="container">
        <div className="shadow-wrap">
          <div className="clip-container embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="image-wrapper embla__container">
                <div className="image-inner embla__slide">
                  <VerticalCarousel />
                </div>
                <div className="image-inner embla__slide">
                  <VerticalCarousel />
                </div>
              </div>
            </div>
            <button className="prevButton" onClick={scrollPrev}>
              Prev
            </button>
            <button className="nextButton" onClick={scrollNext}>
              Next
            </button>
          </div>
        </div>
      </div>
      <ThoughtBubble />
    </>
  );
};

export default EmblaCarousel;
