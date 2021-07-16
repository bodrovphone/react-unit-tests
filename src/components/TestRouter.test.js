import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import TestRouter from './TestRouter';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <Router history={history}>
        {component}
      </Router>
    )
    }
};

it('should render the home page', () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);

  const navbar = getByTestId('navbar');

const link = getByTestId('home-link');

expect(container.innerHTML).toMatch('Home page');
expect(navbar).toContainElement(link);
})

it('should navigate to about page', () => {
  
  const { container, getByTestId } = renderWithRouter(<TestRouter />);

  const link = getByTestId('about-link');

  fireEvent.click(link);

  expect(container.innerHTML).toMatch('About page');

})

it('should navigate to contact page', () => {
  const { container, getByTestId } = renderWithRouter(<TestRouter />);

  const link = getByTestId('contact-link');

  fireEvent.click(link);

  expect(container.innerHTML).toMatch('Contact');

})