// components
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LeftSection from "../components/LeftSection";

export default class Kids extends Component {
  render() {
    return (
      <>
        <LeftSection />
        <div className="kids-container">
          <div className="kids-carousel">
            <Carousel className="carousel">
              {
                // Put the loop inside the Carousel so the loop will wont make multiple copies of the Carousel
              }

              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN000XG5ZQP-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="TODDLER RAINBOW SUEDE SK8-HI ZIP SHOE"
                />
                <p className="legend">
                  TODDLER RAINBOW SUEDE SK8-HI ZIP SHOE | $50
                </p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A38HDH7O-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="KIDS CHECKERBOARD OLD SKOOL V"
                />
                <p className="legend">KIDS CHECKERBOARD OLD SKOOL V | $53</p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5HZ5F2B-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="KIDS SK8-HI MTE-1 SHOE"
                />
                <p className="legend">KIDS SK8-HI MTE-1 SHOE</p>
              </div>
              <div>
                <img
                  src="https://images.vans.com/is/image/Vans/VN0A5AOA6GL-HERO?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&bgc=e5e5e9"
                  alt="VANS X COBRA KAI KIDS OLD SKOOL SHOE"
                />
                <p className="legend">
                  VANS X COBRA KAI KIDS OLD SKOOL SHOE| $65
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}
