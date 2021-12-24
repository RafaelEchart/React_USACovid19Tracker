import React from 'react';
import USMAP from '../../assets/US-MAP.png';
import './mainBanner.css';

const MainBanner = (props) => {
  const { cases } = props;
  return (

    <div className='mainBannerContainer'>
        <img src={USMAP} className='img'/>
        <div className='mainBannerTextContainer'>
            <h1 className='mainBannerTitle'>UNITED STATES</h1>
            <span className='mainBannerCases'>{cases} cases</span>
        </div>
    </div>

  );
};

export default MainBanner;
