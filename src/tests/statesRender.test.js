import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StateInfoCard from '../components/StateInfoCard/StateInfoCard';
import statesData from './__mocks__/apimock';

describe('State page and card load as intented', () => {
  it('Should be rendering 56 regions', () => {
    render(<BrowserRouter><StateInfoCard states={statesData} /></BrowserRouter>);

    expect(statesData.length).toBe(56);
  });

  it('Component should render the number Santa Catarina cases 14', () => {
    render(<BrowserRouter><StateInfoCard states={statesData} /></BrowserRouter>);

    expect(screen.getByText(/992851/i)).toBeInTheDocument();
  });

  it('Components has "California" title in it', () => {
    render(<BrowserRouter><StateInfoCard states={statesData} /></BrowserRouter>);

    expect(screen.getByText(/California/i)).toBeInTheDocument();
  });
});
