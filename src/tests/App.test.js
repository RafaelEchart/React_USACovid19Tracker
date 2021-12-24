import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import App from '../App';

describe('App component renders as intended', () => {
  it('App component matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
