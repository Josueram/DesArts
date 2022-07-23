import React from 'react';

// Components
import Header from '../../components/Header/Header';
import BtnCross from '../../components/BtnCross/BtnCross';

// Assets
import regular from '../../assets/img/regular.png'
// import desarts from '../../assets/img/desarts.png'

// Styles
import './Roadmap.css'

export const Roadmap = () => {

  return (
    <div>
      <Header />
      <div className='main-roadmap'>
        <div className='section-info-roadmap'>
          <h1>Roadmap</h1>
          <BtnCross />
          <p>
            We are all aware of the struggles coming into the Web 3.0 ecosystem. Funding and Talent being at the core of these challenges. Des Arts is here to provide the infrastructure and resources to build Web 3.0 for the future. We want each of our holders to have direct access to what is needed to become successful, in and out of the metaverse. 
          </p>
          <p>
            The current structures involve several intermediaries and procedures that have proven to be difficult for the common Web 3.0 enthusiast. 
          </p>
        </div>
        <div className='section-scheme-roadmap'>
          <div className='container-projects'>
            <img src={regular} className='img-change' alt='regular project' />
            <div className='container-btn'>
              <button className='btn-regular'>Regular Project</button>  {/* Falta agregar funcionabilidad */}
              <button className='btn-desarts'>DesArts Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap;