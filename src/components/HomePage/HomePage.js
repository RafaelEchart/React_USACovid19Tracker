import React from 'react';
// import { useDispatch } from 'react-redux';
import HomePageHeader from '../HomePageHeader/HomePageHeader';
import MainBanner from '../MainBanner/MainBanner';
import FilterText from '../FilterText/FilterText';
import './homePage.css';

const HomePage = () => {
  const hello = 'hello';
  console.log(hello);
  return (

  <React.Fragment>

 <HomePageHeader />
 <MainBanner/>
 <FilterText/>

  </React.Fragment>

  );
};
// const dispatch = useDispatch();

// useEffect(() => {
//   if (document.readyState !== 'complete') {
//     dispatch(loadRockets());
//   }
// }, []);

export default HomePage;
