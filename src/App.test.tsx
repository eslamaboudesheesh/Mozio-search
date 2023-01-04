import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn App component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Mozio Demo/i);
    expect(linkElement).toBeInTheDocument();
});
