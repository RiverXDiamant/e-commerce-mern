// components
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LeftSection from "../components/LeftSection";

export default class Womens extends Component {
  render() {
    return (
      <>
        <LeftSection />
        <div className="womens-container">
          <div className="womens-carousel">
            <Carousel className="carousel">
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5FCCY49-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="OUTDOOR SKATE SK8-HI SHOE"
                />
                <p className="legend">OUTDOOR SKATE SK8-HI SHOE | $105.00</p>
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
                  src="https://images.vans.com/is/image/Vans/VN0A5JMRGRY-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="COZY HUG AUTHENTIC SHERPA SHOE "
                />
                <p className="legend">COZY HUG AUTHENTIC SHERPA SHOE | $70</p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5I11FS8-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="TREKKER SK8-HI GORE-TEX MTE-3 SHOE"
                />
                <p className="legend">
                  TREKKER SK8-HI GORE-TEX MTE-3 SHOE | $180
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}
