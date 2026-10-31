import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from '../../components/UI/Skeleton'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey"}}
      onClick={onClick}
    />
  );
}


const ImageCarousel = ({ itemsData }) => {
  const settings = {
    dots: false,          
    infinite: true,      
    speed: 500,          
    slidesToShow: 4,     
    slidesToScroll: 1,   
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,  
  };

  if (!Array.isArray(itemsData) || itemsData.length === 0) {
    return (new Array(7).fill(0).map(() => {
      <Skeleton />
    }))
  }

  return (
    <Slider {...settings}>
      {itemsData.map((data, index) => (
        <div key={index}>
          <img
            src={data.nftimage}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;