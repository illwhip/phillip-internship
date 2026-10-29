import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import axios from 'axios'

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

export default function SimpleSlider () {
  var settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  
  const [hotData, setHotData] = useState([])

  async function hotCollectionsData() {
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections')
    setHotData(data)
  }

  useEffect(() => {
    hotCollectionsData()
  }, [])

  
  return (
    <div className='slider--container'>
      <Slider {...settings}>
        {hotData.map((data, index) => (
              <div className="card" key={index}>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <Link to="/item-details">
                      <img src={data.nftImage} className="lazy img-fluid" alt="" />
                    </Link>
                  </div>
                  <div className="nft_coll_pp">
                    <Link to="/author">
                      <img className="lazy pp-coll" src={data.authorImage} alt="" />
                    </Link>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    <Link to="/explore">
                      <h4>{data.title}</h4>
                    </Link>
                    <span>ERC-{data.code}</span>
                  </div>
                </div>
              </div>
            ))}
      </Slider>
    </div>
  )  
}