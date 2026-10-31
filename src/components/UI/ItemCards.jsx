import React, { useState, useEffect } from 'react'
import ExpirationDate from '../../components/UI/ExpirationDate'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Skeleton from './Skeleton'

const ItemCards = () => {

  const [itemsData, setItemsData] = useState([])
  const [loading, setLoading] = useState(true)

  async function getNewItems() {
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems')
    setItemsData(data)
    setLoading(false)
  }

  useEffect(() => {
    getNewItems()
  }, [])

  return (loading ?
    <Skeleton />
    :
    itemsData.map((data, index) => (
      <div className="card" key={index}>
        <div className="nft__item">
          <div className="author_list_pp">
            <Link
              to="/author"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Creator: Monica Lucas"
            >
              <img className="lazy" src={data.authorImage} alt="" />
              <i className="fa fa-check"></i>
            </Link>
          </div>
          <div className="de_countdown">{ExpirationDate(itemsData.expiryDate)}</div>

          <div className="nft__item_wrap">
            <div className="nft__item_extra">
              <div className="nft__item_buttons">
                <button>Buy Now</button>
                <div className="nft__item_share">
                  <h4>Share</h4>
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-envelope fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <Link to="/item-details">
              <img
                src={data.nftImage}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/item-details">
              <h4>{data.title}</h4>
            </Link>
            <div className="nft__item_price">{data.price} ETH</div>
            <div className="nft__item_like">
              <i className="fa fa-heart"></i>
              <span>{data.likes}</span>
            </div>
          </div>
        </div>
      </div>
    ))
  )
}

export default ItemCards
