import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import Skeleton from "../components/UI/Skeleton";

const ItemDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [detailsData, setDetailsData] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  async function fetchItemDetails(id) {
    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`)
    setDetailsData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchItemDetails(id)
  // eslint-disable-next-line
  }, [])

  return (
    loading ?
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <Skeleton width='100%' height='100%' borderRadius='5px' />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>
                    <Skeleton width='100px' height='35px' borderRadius='5px'/> 
                    #
                    <Skeleton width='55px' height='35px' borderRadius='5px'/>
                  </h2>
                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      <Skeleton width='25px' height='15px' borderRadius='5px'/>
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      <Skeleton width='25px' height='15px' borderRadius='5px'/>
                    </div>
                  </div>
                  <Skeleton width='100%' height='100%' borderRadius='5px' />
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${detailsData.ownerId}`}>
                            <Skeleton width='100%' height='100%' borderRadius='50%' />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${detailsData.authorId}`}>
                          <Skeleton width='100px' height='20px' borderRadius='5px' />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${detailsData.creatorId}`}>
                            <Skeleton width='100%' height='100%' borderRadius='50%' />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${detailsData.authorId}`}>
                          <Skeleton width='100px' height='20px' borderRadius='5px' />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <Skeleton width='20px' height='20px' borderRadius='5px' />
                      <span>
                        <Skeleton width='20px' height='20px' borderRadius='5px' />
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    :
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  src={detailsData.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{detailsData.title} #{detailsData.tag}</h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {detailsData.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {detailsData.likes}
                    </div>
                  </div>
                  <p>
                    {detailsData.description}
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${detailsData.ownerId}`}>
                            <img className="lazy" src={detailsData.ownerImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${detailsData.ownerId}`}>{detailsData.ownerName}</Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${detailsData.creatorId}`}>
                            <img className="lazy" src={detailsData.creatorImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${detailsData.creatorrId}`}>{detailsData.creatorName}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{detailsData.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
