import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagesSld1 from "../../assets/images/slider-badag.jpg";
import imagesSld2 from "../../assets/images/slider-badging.jpg";
import imagesSld3 from "../../assets/images/slider-scale.jpg";
import imagesSld4 from "../../assets/images/slider-scales.jpg";

const SliderImg = () => {
  let config = {
    dots: true,
    isFinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...config}>
      <Wrap>
        <img src={imagesSld1} alt="Logo" />
      </Wrap>
      <Wrap>
        <img src={imagesSld2} alt="Logo" />
      </Wrap>
      <Wrap>
        <img src={imagesSld3} alt="Logo" />
      </Wrap>
      <Wrap>
        <img src={imagesSld4} alt="Logo" />
      </Wrap>
    </Carousel>
  );
};

export default SliderImg;

const Carousel = styled(Slider)`
  margin-top: 20px;

  li.slick-active button:before {
    color: white;
  }

  ul li button {
    &:before {
      font-size: 8px;
      color: rgb(150, 158, 171);
    }
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  img {
    cursor: pointer;
    width: 100%;
    border: 3px solid transparent;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 60%) 0px 26px 30px -10px,
      rgb(0 0 0 / 75%) 0px 16px 10px -10px;

    &:hover {
      border: 3px solid rgba(249, 249, 249, 0.5);
    }
  }
`;
