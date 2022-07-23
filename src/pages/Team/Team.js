import React from "react";

// Components
import Header from '../../components/Header/Header';
import BtnCross from "../../components/BtnCross/BtnCross";
import CardProfile from "../../components/CardProfile/CardProfile";

// Assets
import manager from '../../assets/img/KK-2.png';
import manager2 from '../../assets/img/KK-2-1.png';
import manager3 from '../../assets/img/KK-2-2.png';
import manager4 from '../../assets/img/KK-2-3.png';

import investors from '../../assets/img/KK-2-4.png';
import investors2 from '../../assets/img/KK-2-5.png';
import investors3 from '../../assets/img/KK-3.png';
import investors4 from '../../assets/img/KK-3.png';
import investors5 from '../../assets/img/KK-3.png';
import investors6 from '../../assets/img/KK-3.png';

import darkTwitter from '../../assets/icons/dark-twitter.svg';
import darkLinkedin from '../../assets/icons/dark-linkedin.svg';
import darkInsta from '../../assets/icons/dark-insta.svg';


// Styles
import './Team.css';

export const Team = () => {
  return (
    <div>
      <Header />
      <div className="main-team">
        <p className="title">Project Management team</p>
        <BtnCross />
        <div className="container-management-profiles">
          <CardProfile  
            imgProfile = {manager}
            name = 'Patrick C.'
            position = 'CEO'
          />
          <CardProfile  
            imgProfile = {manager2}
            name = 'Seika L.'
            position = 'COO'
          />
          <CardProfile  
            imgProfile = {manager3}
            name = 'Zayed Z.'
            position = 'CTO'
          />
          <CardProfile  
            imgProfile = {manager4}
            name = 'Markus Oasis.'
            position = 'CMO'
          />
        </div>
        <p className="title">Investors / VCs</p>
        <div className="investors-profiles">
          <CardProfile  
            imgProfile = {investors}
            name = 'Markus Oasis.'
            position = 'CMO'
          />
          <CardProfile  
            imgProfile = {investors2}
            name = 'Markus Oasis.'
            position = 'CMO'
          />
          <CardProfile  
            imgProfile = {investors3}
            name = 'To Be'
            position = 'Revealed'
            iconTwitter = {darkTwitter}
            iconLinkedin = {darkLinkedin}
            iconInsta = {darkInsta}
          />
          <CardProfile  
            imgProfile = {investors4}
            name = 'To Be'
            position = 'Revealed'
            iconTwitter = {darkTwitter}
            iconLinkedin = {darkLinkedin}
            iconInsta = {darkInsta}
          />
          <CardProfile  
            imgProfile = {investors5}
            name = 'To Be'
            position = 'Revealed'
            iconTwitter = {darkTwitter}
            iconLinkedin = {darkLinkedin}
            iconInsta = {darkInsta}
          />
          <CardProfile  
            imgProfile = {investors6}
            name = 'To Be'
            position = 'Revealed'
            iconTwitter = {darkTwitter}
            iconLinkedin = {darkLinkedin}
            iconInsta = {darkInsta}
          />
        </div>
        <p>More Investors and VC’s to be revealed.</p>
      </div>
    </div>
  )
}

export default Team;