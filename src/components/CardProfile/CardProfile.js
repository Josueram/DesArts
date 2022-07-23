import React from 'react';

// Assets

import twitter from '../../assets/icons/twitter.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';

// Styles
import './CardProfile.css'

export const CardProfile = ({imgProfile, name, position, iconTwitter, iconLinkedin, iconInsta}) => {

  return(
    <div className='card'>
      <img src={imgProfile} alt='profile' />
      <div className='basic-info'>
        <p>{name}</p>
        <p>{position}</p>
      </div>
      <div className='social-media'>
        <img src={iconTwitter || twitter} alt='twitter logo' className='social-media-icon' />
        <img src={iconLinkedin || linkedin} alt='linkedin logo' className='social-media-icon' />
        <img src={iconInsta || instagram} alt='instagram logo' className='social-media-icon' />
      </div>
    </div>
  )
  
}

export default CardProfile;