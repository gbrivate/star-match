import React from 'react';

import renderer from 'react-test-renderer';
import StarMatch from './App';

describe('StarMatch', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StarMatch />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
