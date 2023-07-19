import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ content }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Slider
      {...settings}
      className="carousel paddingBot"
      style={{ display: "inline-flex" }}
    >
      {content &&
        content.map((item) => (
          <div key={item.customer} className="reviews">
            {item.review}
            <p className="customer">{`----${item.customer}`}</p>
          </div>
        ))}
    </Slider>
  );
}
