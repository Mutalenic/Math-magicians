import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import Quote from '../components/Quotes';
// render tests for components
describe('Test the components', () => {
  test('Calculator render test', () => {
    const renderCal = render(<Calculator />);
    expect(renderCal).toMatchSnapshot();
  });

  test('test render Home', () => {
    const renderHome = render(<Home />);
    expect(renderHome).toMatchSnapshot();
  });

  test('test render Quotes', () => {
    const renderQuote = render(<Quote />);
    expect(renderQuote).toMatchSnapshot();
  });

  // test('Navigation bar render test', () => {
  //     const renderNav = render(<Navbar />);
  //     expect (renderNav).toMatchSnapshot();
  // });
});

// user interaction tests for components
describe('Test user interaction for components', () => {
  test('Navigation bar test', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const stringElement = screen.getByText('Math Magicians');
    expect(stringElement).toBeInTheDocument();
  });

  test('Calculator test', () => {
    render(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    );
    const stringElement = screen.getByText('Hai there! Lets do some Math');
    expect(stringElement).toBeInTheDocument();
  });
  test('Home test', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const stringElement = screen.getByText('Welcome To Our Page');
    expect(stringElement).toBeInTheDocument();
  });
  test('Quote test', () => {
    render(
      <BrowserRouter>
        <Quote />
      </BrowserRouter>,
    );
    const stringElement = screen.getByText('Math Quote');
    expect(stringElement).toBeInTheDocument();
  });
});
