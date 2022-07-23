import React from 'react';

// Components
import Header from '../../components/Header/Header';
import BtnCross from '../../components/BtnCross/BtnCross';

// Assets
import profile1 from '../../assets/img/DAIKI MIYAMA, [Mar 6, 2022 at 15_56]_https__15.gigafile 2.png';
import profile2 from '../../assets/img/DAIKI MIYAMA, [Mar 6, 2022 at 15_56]_https__15.gigafile 3.png';
import profile3 from '../../assets/img/Mozart.png';
import profile4 from '../../assets/img/Jeanne D’Arc.png';
import profile5 from '../../assets/img/Armstrong.png';
import profile6 from '../../assets/img/Chaplin.png';

// Styles
import './BehindTheDesign.css'

export const BehindTheDesign = () => {
  return (
    <div>
      <Header />
      <div className='main-btd'>
        <h1>Behind the Design</h1>
        <BtnCross />
        <p>
          Our collection presents influential individuals such as Aristotle, Einstein, Da Vinci, and Jeanne D’Arc amongst many other remarkable personalities. These extraordinary characters achieved the pinnacle of creativity through science, philosophy, and wisdom in their pursuit of elevating human consciousness.
          <br /> <br />
          We at Des Arts recognize these individuals as the embodiment of Art: we do not categorize art and we do not constrain the Artist.
        </p>
        <div className='container-profiles'>
          <p className='icon-row-left'> {'<'} </p>
          <img src={profile1} alt='profile one' />
          <img src={profile2} alt='profile one' />
          <img src={profile3} alt='profile one' />
          <img src={profile4} alt='profile one' />
          <img src={profile5} alt='profile one' />
          <img src={profile6} alt='profile one' />
          <p className='icon-row-right'> {'>'} </p>
        </div>
      </div>
    </div>
  )
}

export default BehindTheDesign;