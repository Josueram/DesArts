import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import './BtnCross.css'

export const BtnCross = () => {
  return (
    <Link to ='/'> <span className='cross'></span> </Link>
  )
}

export default BtnCross;