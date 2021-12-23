import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Input } from 'antd';
import stateData from './__mocks__/apimock';

describe('Input field renders as intended', () => {
  it('Should be rendering 56 regions', () => {
    render(<BrowserRouter><Input data={stateData} /></BrowserRouter>);

    expect(stateData.length).toBe(56);
  });

  it('Should be rendering only 3 States', () => {
    const stateData = [
      {
        id: 'California',
        today_confirmed: 123,
      },
      {
        id: 'North Carolina',
        today_confirmed: 456,
      },
      {
        id: 'Florida',
        today_confirmed: 789,
      },
    ];
    render(<BrowserRouter><Input data={stateData} /></BrowserRouter>);

    expect(stateData.length).toBe(3);
  });

  it('Input includes "Hawaii" ', () => {
    render(<BrowserRouter><Input value='Hawaii' readOnly /></BrowserRouter>);

    expect(screen.getByDisplayValue('Hawaii')).toBeInTheDocument();
  });

  it('Input includes California', () => {
    render(<BrowserRouter><Input value='California' readOnly /></BrowserRouter>);

    expect(screen.getByDisplayValue('California')).toBeInTheDocument();
  });

  it('Component has number of cases in Virginia', () => {
    render(<BrowserRouter><Input value='1034107' readOnly /></BrowserRouter>);

    expect(screen.getByDisplayValue('1034107')).toBeInTheDocument();
  });
});
