import React from 'react';
import './selectedCountryBanner.css';
import USMAP from '../../assets/US-MAP.png';

const SelectedCountryBanner = (props) => {
  const { stateName, population, stateMap } = props;

  return (

    <div className='selectedCountryBannerContainer'>
        <img src={stateMap || USMAP} className='imgSelectedState'/>
        <div className='mainBannerTextContainer'>
            <h1 className='mainBannerTitle'>{stateName}</h1>
            <span className='mainBannerCases'>Population: {population ? `${population}` : 'N/A'} </span>
        </div>
    </div>

  );
};

export default SelectedCountryBanner;
