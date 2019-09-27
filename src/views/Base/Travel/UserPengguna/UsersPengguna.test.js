import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import UsersPengguna from './UsersPengguna';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><UsersPengguna /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
