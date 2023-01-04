// components
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Kids extends Component {
  render() {
    return (
      <>
        <div className="kids-container">
          <div className="kids-carousel">
            <Carousel className="carousel">
              {
                // Put the loop inside the Carousel so the loop will wont make multiple copies of the Carousel
              }

              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5FCCBML-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="pic 1"
                />
                <p className="legend">VANS X THRASHER SKATE SK8-HI SHOE</p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5HF8BLK-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="SLIP-ON TRK SHOE"
                />
                <p className="legend">SLIP-ON TRK SHOE</p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5JMH2KA-ALT2?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="VELVET CLASSIC SLIP-ON"
                />
                <p className="legend">VELVET CLASSIC SLIP-ON</p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5JMH2KA-ALT2?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="VELVET CLASSIC SLIP-ON"
                />
                <p className="legend">VELVET CLASSIC SLIP-ON</p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5JMH2KA-ALT2?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="VELVET CLASSIC SLIP-ON"
                />
                <p className="legend">VELVET CLASSIC SLIP-ON</p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5JMH2KA-ALT2?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="VELVET CLASSIC SLIP-ON"
                />
                <p className="legend">VELVET CLASSIC SLIP-ON</p>
              </div>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}
