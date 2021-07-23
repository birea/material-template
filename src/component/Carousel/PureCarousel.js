import React from "react";

import { Button } from "@material-ui/core/";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Dot
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Thumbnail({ src }) {
    return (
        <img src={src} alt="sample" style={{ width: "100%", height: "100%" }} />
    );
}

function Picture({ src }) {
    return (
        <img src={src} alt="sample" style={{ width: "100%", height: "100%" }} />
    );
}

export default function PureCarousel() {
    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
            >
                <div className="container text-center">
                    <Slider
                        style={{
                            width: "50vw",
                            height: "70vh",
                            border: "solid 0.5px magenta",
                            margin: 'auto'
                        }}
                    >
                        <Slide index={0}>
                            <Picture src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </Slide>
                        <Slide index={1}>
                            <Picture src="https://www.w3schools.com/html/img_girl.jpg" />
                        </Slide>
                        <Slide index={2}>
                            <Picture src="https://www.w3schools.com/html/img_girl.jpg" />
                        </Slide>
                    </Slider>
                    <ButtonBack className="buttonBack">
                        <Button variant="contained">Prev</Button>
                    </ButtonBack>
                    <ButtonNext className="buttonNext">
                        <Button variant="contained">Next</Button>
                    </ButtonNext>
                </div>
                <div className="text-center">
                    <Dot slide={0} className="w-20 h-20">
                        <Thumbnail src="https://www.w3schools.com/html/pic_trulli.jpg"
                            className="w-full h-full"
                        />
                    </Dot>
                    <Dot slide={1} className="w-20 h-20">
                        <Thumbnail src="https://www.w3schools.com/html/img_girl.jpg"
                            className="w-full h-full"
                        />
                    </Dot>
                    <Dot slide={2} className="w-20 h-20">
                        <Thumbnail src="https://www.w3schools.com/html/img_girl.jpg"
                            className="w-full h-full"
                        />
                    </Dot>
                </div>
            </CarouselProvider>
        </div>
    );
}
