import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders some dank text', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/hi there/i);
  expect(headerElement).toBeInTheDocument();
});
