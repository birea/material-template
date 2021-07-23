import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import "./css/reset.css";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Embla = () => (
  <main style={{ width: '80vw', height: '80vh', margin: 'auto' }}>
    <EmblaCarousel slides={slides} />
  </main>
);

export default Embla;