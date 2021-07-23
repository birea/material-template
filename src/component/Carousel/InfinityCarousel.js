import React from "react";
import Slider from "infinite-react-carousel";
const images = [
    "https://images.unsplash.com/photo-1442323794357-25b2ec110967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1500479694472-551d1fb6258d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1452698325353-b90e60289e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1542403810-74c578300013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <button
            style={{
                width: 80,
                heigth: 20,
                position: "absolute",
                background: "red",
                zIndex: 20,
                top: "45%",
                right: 0,
                cursor: 'pointer',
                color: 'white',
                border: 'none',
                borderRadius: 30,
                padding: 10
            }}
            onClick={onClick}
        >
            Next
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, width: "80px",
                heigth: "20px"
            }}
            onClick={onClick}
        >
            Prev
        </div>
    );
}

const SimpleSlider = () => (
    <Slider
        dots
        arrows
        autoplay
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        style={{ position: "relative" }}
    >
        {images.map((eachImage, key) => (
            <div key={key}>
                <img src={eachImage} alt="nature_pics" />
            </div>
        ))}
    </Slider>
);
export default function InfinityCarousel() {
    return (
        <div className="text-center">
            <SimpleSlider />
        </div>
    );
}
