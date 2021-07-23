import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

class CardCarousel extends Component {
    static get CONTAINER_STYLE() {
        return {
            position: "relative",
            height: "300px",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        };
    }

    static get CARD_STYLE() {
        return {
            height: "200px",
            width: "200px",
            paddingTop: "80px",
            textAlign: "center",
            background: "url(https://placeimg.com/200/200/arch)",
            color: "#FFF",
            fontFamily: "sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "10px",
            boxSizing: "border-box"
        };
    }

    render() {
        return (
            <div style={CardCarousel.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
                    <div style={CardCarousel.CARD_STYLE}>First Card</div>
                    <div style={CardCarousel.CARD_STYLE}>Second Card</div>
                    <div style={CardCarousel.CARD_STYLE}>Third Card</div>
                    <div style={CardCarousel.CARD_STYLE}>Fourth Card</div>
                    <div style={CardCarousel.CARD_STYLE}>Fifth Card</div>
                </ReactCardCarousel>
            </div>
        );
    }
}

export default CardCarousel;