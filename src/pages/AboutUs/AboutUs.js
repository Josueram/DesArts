import React from 'react';

// Components
import Header from '../../components/Header/Header';
import BtnCross from '../../components/BtnCross/BtnCross';

// Styles
import './AboutUs.css'

export const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className='main-about-us'>
        <h1>About us</h1>
        <BtnCross />
        <p>
          Des Arts NFT is a collection of 8,888 NFTs built on the Ethereum blockchain. <br />
          The Metapolitan Society offers you the special opportunity to not only make new connections but also work towards building a prosperous future for the Metaverse in which art and entrepreneurialism are reinvented. As such, Des Arts brings a variety of backgrounds and unparalleled experiences to the art world, redefining conventional norms.
        </p>
        <p className='btn-whitepaper'> {'>'} Whitepaper</p>
      </div>
    </div>
  )
}

export default AboutUs;