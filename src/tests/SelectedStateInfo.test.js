import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectedCountryInfo from '../components/SelectedCountryInfo/SelectedCountryInfo';

describe('Region card loads as it should', () => {
  const infoToShow = {
    confirm_opencases: 506023,
    confirmed_cases: 1034731,
    confirmed_death: 19963,
    confirmed_recovered: 508745,
    map_image: 'https://cdn.civil.services/us-states/maps/massachusetts-large.png',
    name: 'Massachusetts',
    population: 6692824,
    seal: 'https://cdn.civil.services/us-states/seals/massachusetts-large.png',
    today_new_cases: 8602,
    today_new_death: 36,
    today_new_opencases: 8566,
    today_new_recovered: 0,
    website: 'http://www.mass.gov',
  };

  it('Component has the number of confirmed cases today', () => {
    render(<BrowserRouter><SelectedCountryInfo stateData={infoToShow} /></BrowserRouter>);

    expect(screen.getByText(/8602/i)).toBeInTheDocument();
  });

  it('Component has the number of today new recovered', () => {
    render(<BrowserRouter><SelectedCountryInfo stateData={infoToShow} /></BrowserRouter>);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('Component has the name of death today', () => {
    render(<BrowserRouter><SelectedCountryInfo stateData={infoToShow} /></BrowserRouter>);

    expect(screen.getByText(/36/i)).toBeInTheDocument();
  });
});
