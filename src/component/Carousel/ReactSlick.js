// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// .thumbnail-slider-wrap {
//     margin-top: 15px;
//     height: 85px;
//   }

export default function ReactSlick() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    // const [data, setData] = useState(null);
    // const [filteredImages, setFilteredImages] = useState([]);
    const fetchdata = async () => {
        axios
            .get("http://oxeenit.com/wowzhotel/api/allgallery/")
            .then((res) => {
                console.log(res.data.allGallery);
                // setData(res.data);
                // setFilteredImages([...res.data.allGallery]);
            })

            .catch((err) => console.log(err));
    };
    useEffect(() => {
        fetchdata();
    }, []);
    // eslint-disable-next-line
    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav"
    };

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: "10px"
    };

    const slidesData = [
        {
            id: 1
            // title: "repellendus id ullam",
            // label: "Dolorem officiis temporibus."
        },
        {
            id: 2
            // title: "excepturi consequatur est",
            // label: "Officia non provident dolor esse et neque."
        },
        {
            id: 3
            // title: "eius doloribus blanditiis",
            // label: "Ut recusandae vel vitae molestiae id soluta."
        },
        {
            id: 4
            // title: "nihil voluptates delectus",
            // label: "Qui vel consequatur recusandae illo repellendus."
        },
        {
            id: 5
            // title: "nemo dolorem necessitatibus",
            // label: "Placeat odit velit itaque voluptatem."
        },
        {
            id: 6
            // title: "dolorem quibusdam quasi",
            // label: "Adipisci officiis repudiandae."
        }
    ];

    return (
        <div className="App">
            <div className="slider-wrapper">
                <Slider
                    {...settingsMain}
                    asNavFor={nav2}
                    ref={(slider) => setSlider1(slider)}
                >
                    {slidesData.map((slid) => (
                        <div style={{ marginTop: '15px', height: '85px' }} key={slid.id}>
                            {/* <h2 className="slick-slide-title">{slid.title}</h2> */}
                            <img
                                className="slick-slide-image"
                                alt={"imag"}
                                src={`https://picsum.photos/800/400?img=${slid.id}`}
                            />
                            {/* <label className="slick-slide-label">{slid.label}</label> */}
                        </div>
                    ))}
                </Slider>
                <div className="thumbnail-slider-wrap">
                    <Slider
                        {...settingsThumbs}
                        asNavFor={nav1}
                        ref={(slider) => setSlider2(slider)}
                    >
                        {slidesData.map((slide) => (
                            <div key={slide.id} style={{ textAlign: 'center' }}>
                                <img
                                    style={{ width: '70%' }}
                                    alt={"imga"}
                                    src={`https://picsum.photos/800/400?img=${slide.id}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}