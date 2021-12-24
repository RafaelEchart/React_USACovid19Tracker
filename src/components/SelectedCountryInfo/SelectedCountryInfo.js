import React from 'react';
import './selectedCountryInfo.css';

const SelectedCountryInfo = (props) => {
  const { stateData } = props;

  return (
    <div>

        <div className='selectedCountryInfoDate'>
            <span>{stateData.name.toUpperCase()} BREAKDOWN - TODAY</span>
        </div>

      <div>
        <div className='infoAlign info0'><span>Confirmed cases today:</span><span>{stateData.today_new_cases}</span></div>
        <div className='infoAlign info1'><span>Deaths today:</span><span>{stateData.today_new_death}</span></div>
        <div className='infoAlign info2'><span>Cases recovered today:</span><span>{stateData.today_new_recovered}</span></div>
        <div className='infoAlign info3'><span>Open cases today:</span><span>{stateData.today_new_opencases}</span></div>
      </div>

        <div className='selectedCountryInfoDate'>
            <span>{stateData.name.toUpperCase()} BREAKDOWN - OVERALL</span>
        </div>

      <div>
        <div className='infoAlign info0'><span>Confirmed cases:</span><span>{stateData.confirmed_cases}</span></div>
        <div className='infoAlign info1'><span>Number of deaths:</span><span>{stateData.confirmed_death}</span></div>
        <div className='infoAlign info2'><span>Number of cases recovered:</span><span>{stateData.confirmed_recovered}</span></div>
        <div className='infoAlign info3'><span>Number of open cases:</span><span>{stateData.confirmed_cases}</span></div>
      </div>
    </div>
  );
};

export default SelectedCountryInfo;
