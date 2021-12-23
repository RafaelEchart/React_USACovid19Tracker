import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import HomePageHeader from '../HomePageHeader/HomePageHeader';
import MainBanner from '../MainBanner/MainBanner';
import FilterText from '../FilterText/FilterText';
import StateInfoCard from '../StateInfoCard/StateInfoCard';
import Footer from '../Footer/Footer';
import { fetchGetDataAllStates } from '../../redux/main/allStates';
import { handleCleanData } from '../../redux/main/selectedCountry';
import './homePage.css';

const HomePage = () => {
  const mainUSStates = useSelector((state) => state.allStates);
  const [statesToShow, setStatesToShow] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!mainUSStates) {
      try {
        // const todayDate = new Date().toISOString().slice(0, 10);
        dispatch(fetchGetDataAllStates('2021-12-22', 'US'));
      } catch (err) {
        setStatesToShow(undefined);
      }
    }
    setStatesToShow(mainUSStates.regions);
  }, [mainUSStates]);

  useEffect(() => {
    dispatch(handleCleanData());
  }, []);

  const handleSearchBar = (input) => {
    const filteredData = mainUSStates.regions.filter((state) => Object.values(state.name).join('').toLowerCase().includes(input.toLowerCase()));
    setStatesToShow(filteredData);
  };

  const handleMenu = (state) => {
    console.log(state);
    const favoriteList = JSON.parse(localStorage.getItem('favoriteStates'));

    if (favoriteList && favoriteList.length) {
      if (state) {
        const newState = [];
        mainUSStates.regions.forEach((oneState) => {
          favoriteList.forEach((favState) => {
            if (oneState.name === favState) {
              newState.push(oneState);
            }
          });
        });
        setStatesToShow(newState);
      } else {
        setStatesToShow(mainUSStates.regions);
      }
    }

    if (!favoriteList) {
      if (state) {
        setStatesToShow([]);
      } else {
        setStatesToShow(mainUSStates.regions);
      }
    }
  };

  return (
    <React.Fragment>
      {(statesToShow && mainUSStates !== 'Error') && (
        <React.Fragment>
          <HomePageHeader handleSearch={handleSearchBar} handleMenu={handleMenu} />
          <MainBanner cases={mainUSStates.usacases} />
          <FilterText />
          <StateInfoCard states={statesToShow} />
          {!statesToShow.length && <React.Fragment>
          <div className='noMatchesFound'>
            <span>No matches found!</span>
          </div>
        </React.Fragment>}
          <Footer />
        </React.Fragment>
      )}

      {(!statesToShow || mainUSStates === 'Error') && <LoadingScreen />}

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
