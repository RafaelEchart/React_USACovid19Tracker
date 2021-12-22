import React from 'react';
// import { useDispatch } from 'react-redux';
import SelectedCountryHeader from '../SelectedCountryHeader/SelectedCountryHeader';
import SelectedCountryBanner from '../SelectedCountryBanner/SelectedCountryBanner';
import FilterText from '../FilterText/FilterText';
import StateInfoCard from '../StateInfoCard/StateInfoCard';
import './selectedCountryPage.css';
import Footer from '../Footer/Footer';

const SelectedCountryPage = () => {
  const hello = 'hello';
  console.log(hello);
  return (

  <React.Fragment>

 <SelectedCountryHeader />
 <SelectedCountryBanner/>
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

export default SelectedCountryPage;
