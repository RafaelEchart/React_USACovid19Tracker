import React from 'react';
// import { useDispatch } from 'react-redux';
import USMAP from '../../assets/US-MAP.png';
// import { loadRockets } from '../../redux/Rockets/rockets';
import './selectedCountryBanner.css';

const SelectedCountryBanner = () => {
  const hello = 'hello';
  console.log(hello);

  return (

    <div className='selectedCountryBannerContainer'>
        <img src={USMAP} className='img'/>
        <div className='mainBannerTextContainer'>
            <h1 className='mainBannerTitle'>ALABAMA</h1>
            <span className='mainBannerCases'>300 cases confirmed</span>
        </div>
    </div>

  );
};
// const dispatch = useDispatch();

// useEffect(() => {
//   if (document.readyState !== 'complete') {
//     dispatch(loadRockets());
//   }
// }, []);

export default SelectedCountryBanner;
