import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import SelectedCountryHeader from '../SelectedCountryHeader/SelectedCountryHeader';
import SelectedCountryBanner from '../SelectedCountryBanner/SelectedCountryBanner';
import SelectedCountryInfo from '../SelectedCountryInfo/SelectedCountryInfo';
import Footer from '../Footer/Footer';
import { fetchGetStates } from '../../redux/main/selectedCountry';

const SelectedCountryPage = () => {
  const selectedState = useSelector((state) => state.selectedState);
  const [infoToShow, setInfoToShow] = useState(undefined);
  const dispatch = useDispatch();
  const selectedStateID = useParams().idState;

  useEffect(() => {
    if (!selectedState) {
      try {
        // const todayDate = new Date().toISOString().slice(0, 10);
        dispatch(fetchGetStates('2021-12-22', 'US', selectedStateID));
      } catch (err) {
        setInfoToShow(undefined);
      }
    }
    setInfoToShow(selectedState);
  }, [selectedState]);

  return (
    <React.Fragment>
      {(infoToShow && selectedState !== 'Error') && (
        <React.Fragment>

          <SelectedCountryHeader
          stateName={infoToShow.name}
          seal={infoToShow.seal}
          website={infoToShow.website} />

          <SelectedCountryBanner
          stateName={infoToShow.name}
          population={infoToShow.population}
          stateMap={infoToShow.map_image} />

          <SelectedCountryInfo stateData={infoToShow} />
          <Footer />
        </React.Fragment>
      )}
      {(!infoToShow || selectedState === 'Error') && <LoadingScreen />}

    </React.Fragment>
  );
};

export default SelectedCountryPage;
