import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRouter } from './HomePage.test';
import LoginPage from '../pages/general/LoginPage';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Login page tests', () => {

  test('page shoud have 2 inputs; one for email and one for the password', () => {
    const { getByLabelText } = renderWithRouter(<LoginPage />)
    const input1 = getByLabelText(/Email/i)
    const input2 = getByLabelText(/senha/i)
    const inputs = [input1, input2]
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(inputs.length).toBe(2);
  })

  test('page should have entrar button', () => {
    const { getByText } = renderWithRouter(<LoginPage/>)
    const button = getByText(/ENTRAR/i);
    expect(button).toBeInTheDocument();
  })
});
