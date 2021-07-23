import React, { useState, useRef, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function ReactAliceCarousel() {
    const [mainIndex, setMainIndex] = useState(0);
    const [mainAnimation, setMainAnimation] = useState(false);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const mainSlider = useRef();
    const thumbSlider = useRef();
    const [mainCurrent, setMainCurrent] = useState();
    const [thumbCurrent, setThumbCurrent] = useState();
    const [arrowsClicked, setArrowsClicked] = useState(false);

    const handleOnDragStart = (e) => e.preventDefault();

    const items = [
        <img
            src="http://placekitten.com/200/300"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/302"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/303"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/301"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/305"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/306"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/350"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/300"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/302"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/303"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/301"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/305"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/306"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />,
        <img
            src="http://placekitten.com/200/350"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
            alt="kitten"
        />
    ];

    const slidePrev = () => {
        setArrowsClicked(true);
        if (activeIndex >= 1) {
            setActiveIndex(activeIndex - 1);
        } else {
            setActiveIndex(items.length - 1);
        }
    };
    const slideNext = () => {
        setArrowsClicked(true);
        if (activeIndex < items.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else {
            setActiveIndex(0);
        }
    };

    useEffect(() => {
        setMainCurrent(mainSlider.current);
        setThumbCurrent(thumbSlider.current);
    }, []);

    const syncMainBeforeChange = (e) => {
        setMainAnimation(true);
    };

    const syncMainAfterChange = (e) => {
        setMainAnimation(false);
        if (!arrowsClicked) {
            if (e.type === "action") {
                setThumbIndex(e.item);
                setMainIndex(e.item);
                setActiveIndex(e.item);
                mainCurrent.slideTo(e.item);
                setThumbAnimation(false);
            } else {
                setActiveIndex(thumbIndex);
                setMainIndex(thumbIndex);
            }
        } else {
            setThumbIndex(activeIndex);
            setMainIndex(activeIndex);
        }
        setArrowsClicked(false);
    };

    const syncThumbs = (e) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);
        setMainIndex(e.item);
    };

    const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
        const newArr = [];
        items.forEach((item, i) => {
            newArr.push(
                <img
                    key={i}
                    style={{
                        border: thumbIndex === i ? "1px solid blue" : "",
                        width: "80px",
                        height: "80px",
                        padding: 0,
                        margin: 0
                    }}
                    alt="kitten"
                    src={item.props.src}
                    onDragStart={handleOnDragStart}
                    onClick={() => {
                        setThumbIndex(i);
                        setMainIndex(i);
                        setActiveIndex(i);
                        setThumbAnimation(true);
                        thumbCurrent.slideTo(i);
                        mainCurrent.slideTo(i);
                    }}
                    className={item.props.className}
                />
            );
        });
        return newArr;
    };

    const backArrow = () => (
        <div onClick={slidePrev} style={{ width: "30px" }}>
            <img
                onClick={slidePrev}
                width="100%"
                alt="back"
                src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/chevron-circle-left-512.png"
            />
        </div>
    );
    const nextArrow = () => (
        <div onClick={slideNext} style={{ width: "30px" }}>
            <img
                onClick={slideNext}
                width="100%"
                alt="next"
                src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/chevron-circle-right-512.png"
            />
        </div>
    );

    return (
        <div className="text-center">
            <AliceCarousel
                ref={mainSlider}
                items={items}
                disableDotsControls={true}
                mouseDragEnabled
                renderPrevButton={backArrow}
                renderNextButton={nextArrow}
                mouseTracking={!thumbAnimation}
                onSlideChange={syncMainBeforeChange}
                onSlideChanged={syncMainAfterChange}
                touchTracking={!thumbAnimation}
                activeIndex={mainIndex}
                infinite={true}
            ></AliceCarousel>

            <AliceCarousel
                id="thumbs-slider"
                ref={thumbSlider}
                items={thumbItems(items, [setThumbIndex, setThumbAnimation])}
                disableButtonsControls={true}
                disableDotsControls={true}
                responsive={{
                    0: {
                        items: 5
                    },
                    1024: {
                        items: 5
                    }
                }}
                mouseTracking={true}
                onSlideChanged={syncThumbs}
                touchTracking={!mainAnimation}
                activeIndex={thumbIndex}
                infinite={true}
                keyboardNavigation={true}
            ></AliceCarousel>
        </div>
    );
}