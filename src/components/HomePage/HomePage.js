import React from 'react';
// import { useDispatch } from 'react-redux';
import HomePageHeader from '../HomePageHeader/HomePageHeader';
import MainBanner from '../MainBanner/MainBanner';
import FilterText from '../FilterText/FilterText';
import StateInfoCard from '../StateInfoCard/StateInfoCard';
import Footer from '../Footer/Footer';

const HomePage = () => {
  const hello = 'hello';
  console.log(hello);
  return (

  <React.Fragment>

 <HomePageHeader />
 <MainBanner/>
 <FilterText/>
 <StateInfoCard/>
 <Footer/>

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
