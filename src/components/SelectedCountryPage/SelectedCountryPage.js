import React from 'react';
// import { useDispatch } from 'react-redux';
import SelectedCountryHeader from '../SelectedCountryHeader/SelectedCountryHeader';
import SelectedCountryBanner from '../SelectedCountryBanner/SelectedCountryBanner';
import SelectedCountryInfo from '../SelectedCountryInfo/SelectedCountryInfo';
import Footer from '../Footer/Footer';

const SelectedCountryPage = () => {
  const hello = 'hello';
  console.log(hello);
  return (

  <React.Fragment>

 <SelectedCountryHeader />
 <SelectedCountryBanner/>
 <SelectedCountryInfo/>

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
