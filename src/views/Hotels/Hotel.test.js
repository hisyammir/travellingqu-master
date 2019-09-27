import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme'
import Hotel from './Hotel';


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Hotel match={{params: {id: "1"}, isExact: true, path: "/hotels/:id", name: "Hotel Detail"}}/>
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Samppa Nori</strong>)).toEqual(true)
  wrapper.unmount()
});
