import React from "react";

// Components
import Header from '../../components/Header/Header';
import BtnCross from "../../components/BtnCross/BtnCross";

// Assets
import unicorn from '../../assets/img/unicorn.png'

// Styles
import './Community.css'

export const Community = () => {
  return (
    <div>
      <Header />
      <div className="main-community">
        <div className="section-info-community">
          <h1>Join the Community</h1>
          <BtnCross />
          <p>
            We welcome our holders to journey with us into a community filled with creativity, diversity, and belonging.
            <br /> <br />
            A Metapolitan club in which networking is propelled into a whole other dimension…Literally.
          </p>
          <button>Join our Discord</button>
        </div>
        <div className="section-image">
          <img src={unicorn} alt="unicorn" className="img-unicorn" />
        </div>
      </div>
    </div>
  )
}

export default Community;