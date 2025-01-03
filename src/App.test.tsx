import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders app logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText("logo");
  expect(logoElement).toBeInTheDocument();
});
