import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Roadmap from './pages/Roadmap/Roadmap';
import BehindTheDesign from './pages/BehindTheDesign/BehindTheDesign'
import Community from './pages/Community/Community';
import Faq from './pages/Faq/Faq';
import Team from './pages/Team/Team';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/aboutUs' element={ <AboutUs /> } />
        <Route path='/roadmap' element={ <Roadmap /> } />
        <Route path='/behind-the-Design' element={ <BehindTheDesign /> } />
        <Route path='/join-us' element={ <Community /> } />
        <Route path='/faq' element={ <Faq /> } />
        <Route path='/team' element={ <Team /> } />
      </Routes>
    </BrowserRouter>
  )
}