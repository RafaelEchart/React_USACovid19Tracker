import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import HomePageHeader from '../components/HomePageHeader/HomePageHeader';

test('It should Should display the header', () => {
  render(
    <Provider store={store}>
        <HomePageHeader />
    </Provider>,
  );
  const headerText = screen.getByText(/USA Covid-19 Tracker/i);
  expect(headerText).toEqual(headerText);
});