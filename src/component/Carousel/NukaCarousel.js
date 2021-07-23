import React from "react";
import Carousel from "nuka-carousel";

export default function NukaCorousel() {
    return (
        <div>
            <Carousel
                slidesToShow={2}
                renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide}>Previous</button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide}>Next</button>
                )}
            >
                <img
                    alt="some"
                    src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                />
                <img
                    alt="some"
                    src="https://images.unsplash.com/photo-1600442715434-4f1f4c681eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"
                />
                <img
                    alt="some"
                    src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                />
                <img
                    alt="some"
                    src="https://images.unsplash.com/photo-1600442715434-4f1f4c681eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"
                />
            </Carousel>
        </div>
    );
}
