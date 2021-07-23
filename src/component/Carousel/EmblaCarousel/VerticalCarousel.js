import React, { useEffect } from "react";
import { useEmblaCarousel } from "embla-carousel/react";

import "./css/embla.css";
import "./css/thoughtBubble.css";

export default function NestedCarousel() {
  const [vertEmblaRef, vertEmblaApi] = useEmblaCarousel({
    axis: "y",
    loop: true
  });

  useEffect(() => {
    if (vertEmblaApi) {
      // Embla API is ready
    }
  }, [vertEmblaApi]);

  return (
    <div className="nested-embla" ref={vertEmblaRef}>
      <div className="image-wrapper nested-embla__container">
        <div className="vert-image-inner nested-embla__slide">
          <img
            alt=""
            className="image"
            src="https://images.squarespace-cdn.com/content/v1/5947f22b3a0411056640f799/1498494848488-XTIX2C8TLIATLNAKGXEI/ke17ZwdGBToddI8pDm48kL1JskOfCAWzsz2n9srxq9J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mhydAgiKdIfeAoxVgE7c7pKrBF4dUolu_9oetKtpKrom3wq0E29XB4uUNZUDJsvAg/11860+BOX+30D+AB+NLW30+copy.jpg?format=2500w"
          />
        </div>
        <div className="vert-image-inner nested-embla__slide">
          <img
            alt=""
            className="image"
            src="https://www.sternberg-press.com/wp-content/uploads/2021/02/Odell_Inhabiting-the-Negative-Space_The-Incidents_COVER-600x935.png"
          />
        </div>
        <div className="vert-image-inner nested-embla__slide">
          <img
            alt=""
            className="image"
            src="https://www.ericandmarie.com/img/dexter-sinister-4.jpg"
          />
        </div>
      </div>
    </div>
  );
}
