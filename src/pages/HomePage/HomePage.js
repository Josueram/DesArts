import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from '../../components/Header/Header';

// Styles
import './HomePage.css'

export const HomePage = () => {
  return (
    <div>
      <Header />
      <div className='main'>
        <div className='left-side'>
          <p>Launching Soon</p>
          <h1>DES ARTS</h1> 
          <h2>METAPOLITAN SOCIETY</h2>
          <p>Building Web 3.0 for the future, one unicorn at a time…</p>
        </div>
        <div className='right-side'>
          <div className='row1'>
            <Link to ='/aboutUs'> About us </Link>
          </div>
          <div className='row2'>
            <Link to ='/roadmap' className='roadmap'> Roadmap </Link>
            <Link to ='/join-us' className='join-us'> Join Us </Link>
            <Link to ='/faq' className='faq'> FAQ </Link>
          </div>
          <div className='row3'>
            <Link to ='/behind-the-Design' className='design'> Behind the Design </Link>
            <Link to ='/team' className='team'> Meet the Team </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;