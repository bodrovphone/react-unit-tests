import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import TestElements from './TestElements'

afterEach(cleanup);

// So from some point in time it seemse like jest-dom/extend-expect was cut down as a dependecy and so if you don't include it
// then you have to use screen and adopt your test like this:
// (Ok got it because those matchers comes from jest-dom lib)

  // it('should equal to 0', () => {
  //   render(<TestElements />); 
  //   const elem = screen.getByTestId('counter');
    
  //   expect(elem.textContent).toBe("0");
  //  });


// Otherwise it works just fine as below
it('should equal to 0', () => {
  const { getByTestId } = render(<TestElements />); 
  expect(getByTestId('counter')).toHaveTextContent(0)
  });
// <=> Otherwise it works just fine as below


  it('should be enabled', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
  });
