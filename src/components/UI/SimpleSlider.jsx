import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function SimpleSlider () {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
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
    <Slider {...settings}>
      {hotData.map((data, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
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
  )  
}