// components
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        item: "Vans Old Skool",
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
      {
        name: "Grog Shop",
        item: "Vans Old Skool",
        price: "$74.99",
        img: "https://i.imgur.com/0pEDCCE.png",
        alt: "Foot The Bill customs Vans for business Grog Shop, located in Cleveland, Ohio",
      },
      {
        name: "606 Records",
        item: "Vans Classic Slip-On",
        price: "$74.99",
        img: "https://i.imgur.com/T3m8C7O.png",
        alt: "Foot The Bill customs Vans for business 606 Records, located in Chicago, Illinois",
      },
      {
        name: "Alibi Lounge",
        item: "Vans Sk8-Hi",
        price: "$74.99",
        img: "https://i.imgur.com/as4usL7.png",
        alt: "Foot The Bill customs Vans for business Alibi Lounge, located in New York City",
      },
      {
        name: "Mama Nature's Juice Bar",
        item: "Vans Sk8-Hi",
        price: "$74.99",
        img: "https://i.imgur.com/9XPkIVn.png",
        alt: "Foot The Bill customs Vans for business Mama Nature's Juice Bar, located in Ridgeland, Mississippi",
      },
      {
        name: "Jensens Guitar and Music",
        item: "Vans Old Skool",
        price: "$74.99",
        img: "https://i.imgur.com/46hDR6w.png",
        alt: "Foot The Bill customs Vans for business Jensens Guitar and Music, located in Santa Barbara, California",
      },
      {
        name: "Spacy Cloud",
        item: "Vans Sk8-Hi",
        price: "$74.99",
        img: "https://i.imgur.com/yIrCOA9.png",
        alt: "Foot The Bill customs Vans for business Spacy Cloud, located in Washington, DC",
      },
      {
        name: "M.A.D.D",
        item: "Vans Sk8-Hi",
        price: "$74.99",
        img: "https://i.imgur.com/s0QJPGk.png",
        alt: "Foot The Bill customs Vans for business M.A.D.D. Rhythms, located in Chicago, Illinois",
      },
    ];

    return (
      <>
        <div className="right-sec">
          <div className="carousel-container">
            <Carousel className="homepage-carousel">
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

          {/* <FontAwesomeIcon icon={solid("user-secret")} />
          <FontAwesomeIcon icon={regular("coffee")} />
          <FontAwesomeIcon icon={icon({ name: "coffee", style: "solid" })} />
          <FontAwesomeIcon icon={brands("twitter")} /> */}
        </div>
      </>
    );
  }
}
