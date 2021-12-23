import React from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import './loadingScreen.css';
import flag from '../../assets/american_flag.gif';

const LoadingScreen = () => {
  const mainUSStates = useSelector((state) => state.allStates);
  const selectedState = useSelector((state) => state.selectedState);

  return (
    <div className='loadingCover' >
        <img src={flag} />
        <Spin size='large' />
        {(mainUSStates === 'Error' || selectedState === 'Error') && <span className='ErrorSpinner'>An error has ocurred, reload the page!</span>}
        </div>
  );
};

export default LoadingScreen;