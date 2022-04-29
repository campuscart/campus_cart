import React, { Component,useEffect,useState } from "react";
import Slider from "react-slick";
import { data } from "./cmp/data";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Box from "./cmp/box";
import "./carousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplayspeed: 1000
    };
    return (
      <div >
        <Slider {...settings} className="slider_cont">
          {console.log(data)}
          {data?.map((review)=><div className="slides"><Box {...review} /></div>)}
        </Slider>
      </div>
    );
  }
}