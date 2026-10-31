import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from 'axios'
import Skeleton from '../../components/UI/Skeleton'
import ImageCarousel from '../../components/UI/SliderTool'


const NewItems = () => {
  const [itemsData, setItemsData] = useState([])
  const [loading, setLoading] = useState(true)

  async function getNewItems() {
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems')
    setItemsData(data)
    setLoading(false)
  }


  function expirationDate() {
    updateTime()
    requestAnimationFrame(expirationDate)
  }

  function updateTime() {
    const time = Date.now()
    const timeLeft = itemsData.expiryDate - time

    console.log(timeLeft)


    requestAnimationFrame(expirationDate)    
  }

  useEffect(() => {
    getNewItems()
  }, [])

    console.log(itemsData)

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {loading 
          ? 
          <Skeleton />
          :
          <ImageCarousel hotData={itemsData} />
          // itemsData.map((data, index) => (
          //   <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
          //     <div className="nft__item">
          //       <div className="author_list_pp">
          //         <Link
          //           to="/author"
          //           data-bs-toggle="tooltip"
          //           data-bs-placement="top"
          //           title="Creator: Monica Lucas"
          //         >
          //           <img className="lazy" src={data.authorImage} alt="" />
          //           <i className="fa fa-check"></i>
          //         </Link>
          //       </div>
          //       <div className="de_countdown">{expirationDate(data.expiryDate)}</div>

          //       <div className="nft__item_wrap">
          //         <div className="nft__item_extra">
          //           <div className="nft__item_buttons">
          //             <button>Buy Now</button>
          //             <div className="nft__item_share">
          //               <h4>Share</h4>
          //               <a href="/" target="_blank" rel="noreferrer">
          //                 <i className="fa fa-facebook fa-lg"></i>
          //               </a>
          //               <a href="/" target="_blank" rel="noreferrer">
          //                 <i className="fa fa-twitter fa-lg"></i>
          //               </a>
          //               <a href="/">
          //                 <i className="fa fa-envelope fa-lg"></i>
          //               </a>
          //             </div>
          //           </div>
          //         </div>

          //         <Link to="/item-details">
          //           <img
          //             src={data.nftImage}
          //             className="lazy nft__item_preview"
          //             alt=""
          //           />
          //         </Link>
          //       </div>
          //       <div className="nft__item_info">
          //         <Link to="/item-details">
          //           <h4>{data.title}</h4>
          //         </Link>
          //         <div className="nft__item_price">{data.price} ETH</div>
          //         <div className="nft__item_like">
          //           <i className="fa fa-heart"></i>
          //           <span>{data.likes}</span>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // ))}
}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
