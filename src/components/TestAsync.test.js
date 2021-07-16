import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import TestAsync from './TestAsync';

afterEach(cleanup);

it('Increments counter after 0.5 s', async () => {
  const { getByTestId, getByText } = render(<TestAsync />);

  fireEvent.click(getByTestId('button-up'));

  const counter = await waitForElement(() => getByText('1'));

  expect(counter).toHaveTextContent('1');
})