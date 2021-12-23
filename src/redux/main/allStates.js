import USACivilServicesData from '../../assets/USACivilServices';
import USMAP from '../../assets/US-MAP.png';

const FETCH_DATA_COUNTRY = 'FETCH_DATA_COUNTRY';
const apiURL = 'https://api.covid19tracking.narrativa.com/api/';

const initialState = false;

export const fetchData = (data) => ({
  type: FETCH_DATA_COUNTRY,
  payload: data,
});

export const fetchGetDataAllStates = (date, country) => async (dispatch) => {
  try {
    const covidAPI = await fetch(`${apiURL + date}/country/${country}`);
    if (covidAPI.ok) {
      const covidData = await covidAPI.json();

      const today = covidData.dates;
      const USinformation = Object.values(today)[0].countries[country];
      const usacases = USinformation.today_confirmed;
      const usaregions = [];

      USinformation.regions.forEach((state) => {
        let imageForState = USMAP;

        USACivilServicesData.getStates.forEach((data) => {
          if (state.name === data.state) {
            imageForState = data.map_image;
          }
        });

        usaregions.push({
          name: state.name,
          cases: state.today_confirmed,
          map_image: imageForState,
        });
      });

      dispatch(fetchData({ usacases, regions: usaregions }));
    }
  } catch (err) {
    dispatch(fetchData('Error'));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_COUNTRY:
      if (state !== initialState) {
        return state;
      }
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
