import React from 'react';
import './selectedCountryInfo.css';

const SelectedCountryInfo = () => {
  const filterWord = 'REGION BREAKDOWN - 2021-12-15';

  return (
    <div>

        <div className='selectedCountryInfoDate'>
            <span>{filterWord}</span>
        </div>

      <div>
        <div className='infoAlign info0'><span>Confirmed cases today:</span><span>79</span></div>
        <div className='infoAlign info1'><span>Number of deaths:</span><span>79</span></div>
        <div className='infoAlign info2'><span>Number of cases recovered:</span><span>79</span></div>
        <div className='infoAlign info3'><span>Number of open cases:</span><span>76</span></div>
      </div>

        <div className='selectedCountryInfoDate'>
            <span>REGION BREAKDOWN - OVERALL</span>
        </div>

      <div>
        <div className='infoAlign info0'><span>Confirmed cases:</span><span>794545</span></div>
        <div className='infoAlign info1'><span>Number of deaths:</span><span>79454</span></div>
        <div className='infoAlign info2'><span>Number of cases recovered:</span><span>79545</span></div>
        <div className='infoAlign info3'><span>Number of open cases:</span><span>76</span></div>
      </div>
    </div>
  );
};

export default SelectedCountryInfo;
