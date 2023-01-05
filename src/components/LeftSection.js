// components
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default class LeftSection extends Component {
  render() {
    return (
      <>
        <div className="hero">
          <div className="row">
            <div className="left-section">
              <div class="content">
                <h2>Online</h2>
                <h1>CUSTOM VANS</h1>
                <h3>STORE</h3>

                <Link to="/orders/new" className="btn">
                  &nbsp; Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
