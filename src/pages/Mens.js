// components
// components
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LeftSection from "../components/LeftSection";

export default class Mens extends Component {
  render() {
    return (
      <>
        <LeftSection />
        <div className="mens-container">
          <div className="mens-carousel">
            <Carousel className="carousel">
              {
                // Put the loop inside the Carousel so the loop will wont make multiple copies of the Carousel
              }

              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5FCCBML-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="VANS X THRASHER SKATE SK8-HI SHOE"
                />
                <p className="legend">
                  VANS X THRASHER SKATE SK8-HI SHOE | $90
                </p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5HF8BLK-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="SLIP-ON TRK SHOE"
                />
                <p className="legend">SLIP-ON TRK SHOE | SALE! $29.95</p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5JMH2KA-ALT2?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="VELVET CLASSIC SLIP-ON"
                />
                <p className="legend">VELVET CLASSIC SLIP-ON | $60</p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5I11YUU-ALT2?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="SK8-HI GORE-TEX MTE-3 SHOE"
                />
                <p className="legend">SK8-HI GORE-TEX MTE-3 SHOE | $150</p>
              </div>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}
