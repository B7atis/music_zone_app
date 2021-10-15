import React from 'react';
import { shallow } from 'enzyme';
import { ProductPageBoxComponent } from './ProductPageBoxBox';

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductPageBoxComponent />);
    expect(component).toBeTruthy();
  });
});