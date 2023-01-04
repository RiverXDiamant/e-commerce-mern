// components
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class RightSection extends Component {
  render() {
    const images = [
      {
        name: "Local Green Atlanta",
        item: "Vans Old Skool",
        price: "$74.99",
        img: "https://i.imgur.com/x9R5321.png",
        alt: "Foot The Bill customs Vans for business Local Green Atlanta, located in Atlanta, Georgia",
      },
      {
        name: "Eubie Blake Cultural Center",
        item: "Vans Classic Slip-On",
        price: "$74.99",
        img: "https://i.imgur.com/jiB0r8U.png",
        alt: "Foot The Bill customs Vans for business Eubie Blake Cultural Center, located in Baltimore, Maryland",
      },
      {
        name: "Milk + T",
        item: "Vans Authentic Canvas",
        price: "$74.99",
        img: "https://i.imgur.com/rVOVRZx.png",
        alt: "Foot The Bill customs Vans for business Milk T, located in Portland, Oregon",
      },
      {
        name: "Zabars",
        item: "Vans Classic Slip-On",
        price: "$74.99",
        img: "https://i.imgur.com/niXij6j.png",
        alt: "Foot The Bill customs Vans for business Zabars, located in New York City",
      },
      {
        name: "Minds Eye Comics",
        item: "Vans Classic Slip-On",
        price: "$74.99",
        img: "https://i.imgur.com/AviwMth.png",
        alt: "Foot The Bill customs Vans for business Minds Eye Comics, located in Burnsville, Minnesota ",
      },
      {
        name: "Portrait Coffee",
        item: "Vans Old Skool",
        price: "$74.99",
        img: "https://i.imgur.com/XreZIcB.png",
        alt: "Foot The Bill customs Vans for business Portrait Coffee, located in Atlanta, Georgia",
      },
      {
        name: "Black Genius Art SHow",
        item: "Vans Sk8-Hi",
        price: "$74.99",
        img: "https://i.imgur.com/riJgphs.png",
        alt: "Foot The Bill customs Vans for business The Black Genius Art Show, located in Baltimore, Maryland",
      },
    ];
    return (
      <>
        <div className="right-sec">
          <div className="carousel-container">
            <Carousel className="carousel">
              {
                // Put the loop inside the Carousel so the loop will wont make multiple copies of the Carousel
              }

              {images.map((image) => {
                const { item, price, img, alt } = image;
                return (
                  <>
                    <div className="img-container">
                      <img src={`${img}`} alt={`${alt}`} />
                      <p className="legend">{`${item} | ${price} `}</p>
                    </div>
                  </>
                );
              })}
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}
