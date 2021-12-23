import USACivilServicesData from '../../assets/USACivilServices';

const FETCH_DATA = 'FETCH_DATA';
const CLEAN_DATA = 'ERASE_DATA';
const apiURL = 'https://api.covid19tracking.narrativa.com/api/';

const initialState = false;

export const loadData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

export const handleCleanData = () => ({
  type: CLEAN_DATA,
});

export const fetchGetStates = (date, country, state) => async (dispatch) => {
  try {
    const res = await fetch(`${apiURL + date}/country/${country}/region/${state}`);
    if (res.ok) {
      const data = await res.json();
      const today = data.dates;
      const infoObj = Object.values(today)[0].countries[country].regions[0];
      const stateInfo = {
        name: infoObj.name,
        confirmed_cases: infoObj.today_confirmed,
        confirmed_death: infoObj.today_deaths,
        confirmed_recovered: infoObj.today_recovered,
        confirm_opencases: infoObj.today_open_cases,
        today_new_death: infoObj.today_new_deaths,
        today_new_cases: infoObj.today_new_confirmed,
        today_new_recovered: infoObj.today_new_recovered,
        today_new_opencases: infoObj.today_new_open_cases,
      };

      USACivilServicesData.getStates.forEach((data) => {
        if (infoObj.name === data.state) {
          stateInfo.map_image = data.map_image;
          stateInfo.seal = data.state_seal;
          stateInfo.population = data.population;
          stateInfo.website = data.website;
        }
      });

      dispatch(loadData(stateInfo));
    }
  } catch (err) {
    dispatch(loadData('Error'));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      if (state !== initialState) {
        return state;
      }
      return action.payload;

    case CLEAN_DATA:
      return false;
    default:
      return state;
  }
};

export default reducer;
