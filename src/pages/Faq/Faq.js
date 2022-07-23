import React from "react";
import { Link } from 'react-router-dom';

// Components
import Header from '../../components/Header/Header';
import BtnCross from "../../components/BtnCross/BtnCross";

// Styles
import './Faq.css'

export const Faq = () => {
  return (
    <div>
      <Header />
      <div className="main-faq">
        <h1>FAQ</h1>
        <BtnCross />
        <Link to ='#'> {'>'} How can I join the Metapolitan Club? </Link>
        <Link to ='#'> {'>'} How can I join the Metapolitan Club? </Link> { /* Falta hacer el toggle list */}
        <Link to ='#'> {'>'} When will I be able to mint my NFT? </Link>
        <Link to ='#'> {'>'} How many Des Arts NFTs will be available? </Link>
        <Link to ='#'> {'>'} What Blockchain will you be using? </Link>
        <Link to ='#'> {'>'} What are your secondary royalty fees? </Link>
        <Link to ='#'> {'>'} Who is backing Des Arts Ventures? </Link>
        <Link to ='#'> {'>'} How do I pitch my idea?  </Link>
        <Link to ='#'> {'>'} How do I get Whitelisted? </Link>
        <Link to ='#'> {'>'} When will Project Pegasus be revealed? </Link>
      </div>
    </div>
  )
}

export default Faq;