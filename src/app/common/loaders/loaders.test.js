import React from 'react';
import { shallow } from 'enzyme';
import EllipsisLoaderComponent from './EllipsisLoaderComponent';

describe('It should render the EllipsisLoader', () => {
  it('should render the EllipsisLoaderComponent', () => {
    const component = shallow(<EllipsisLoaderComponent />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
