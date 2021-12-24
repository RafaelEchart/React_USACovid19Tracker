import allStatesReducer from '../redux/main/allStates';

test('should return the initial state', () => {
  expect(allStatesReducer(undefined, {})).toEqual(false);
});
