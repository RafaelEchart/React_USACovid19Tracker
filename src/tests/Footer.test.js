import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer/Footer';

describe('Footer renders as required', () => {
  it('Footer UI matches the snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
