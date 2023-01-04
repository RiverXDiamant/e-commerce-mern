import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class LeftSection extends Component {
  render() {
    const images = [
      {
        name: "Local Green Atlanta",
        item: "Vans Old Skool",
        price: "74.99",
        img: "https://i.imgur.com/x9R5321.png",
        alt: "Foot The Bill customs Vans for business Local Green Atlanta, located in Atlanta, Georgia",
      },
      {
        name: "Black Genius Art Show",
        item: "Vans Classic Slip-On",
        price: "74.99",
        img: "https://i.imgur.com/jiB0r8U.png",
        alt: "Foot The Bill customs Vans for business Eubie Blake Cultural Center, located in Baltimore, Maryland",
      },
      {
        name: "Milk + T",
        item: "Vans Authentic Canvas",
        price: "74.99",
        img: "../../src/img/ftb-portland-milk-t-shoe.webp",
        alt: "Foot The Bill customs Vans for business Milk T, located in Portland, Oregon",
      },
    ];
    return (
      <>
        <div className="hero">
          <div className="row">
            <div className="left-section">
              <div class="content">
                <h2>Online</h2>
                <h1>CUSTOM VANS</h1>
                <h3>STORE</h3>
                <a
                  href="https://www.vans.com/en-us/customs?icn=topnav"
                  target="_blank"
                  class="btn"
                  rel="noreferrer"
                >
                  Buy Now
                </a>
              </div>

              <Carousel className="carousel">
                {images.map((image) => {
                  const { img, alt, price } = image;
                  return (
                    <>
                      <div>
                        <img src={`${img}`} alt={`${alt}`} />
                        <p className="legend">{`${price}`}</p>
                      </div>
                    </>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </>
    );
  }
}
