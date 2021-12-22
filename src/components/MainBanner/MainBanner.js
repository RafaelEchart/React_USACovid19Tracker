import React from 'react';
// import { useDispatch } from 'react-redux';
import USMAP from '../../assets/US-MAP.png';
// import { loadRockets } from '../../redux/Rockets/rockets';
import './mainBanner.css';

const MainBanner = () => {
  const hello = 'hello';
  console.log(hello);

  return (

    <div className='mainBannerContainer'>
        <img src={USMAP} className='img'/>
        <div className='mainBannerTextContainer'>
            <h1 className='mainBannerTitle'>UNITED STATES</h1>
            <span className='mainBannerCases'>6,958 cases</span>
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

export default MainBanner;
