import React from 'react';

// Assets
import logo from '../../assets/img/logo.png';
import twitter from '../../assets/icons/twitter.svg';
import discord from '../../assets/icons/discord.svg';
import instagram from '../../assets/icons/instagram.svg';
import email from '../../assets/icons/email.svg';


// Styles
import './Header.css'

export const Header = () => {

  return(
    <div className='header'>
      <img src={logo} alt="Desarts logo" />
      <div className='social-media-container'>
        <img src={twitter} alt='Twitter logo' />
        <img src={discord} alt='Discord logo' />
        <img src={instagram} alt='Instagram logo' />
        <img src={email} alt='Email logo' />
      </div>
    </div>
  )
  
}

export default Header