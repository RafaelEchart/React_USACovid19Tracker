import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dataReducerSelectedState from './main/selectedCountry';
import dataReducerAllStates from './main/allStates';

const reducer = combineReducers({
  selectedState: dataReducerSelectedState,
  allStates: dataReducerAllStates,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
