import React from 'react';
import { render, screen } from '@testing-library/react';
import Greats from './Greats';

test('renders learn react link', () => {
    render(<Greats name="learn react" />);
    const linkElement = screen.getByText('learn react');
    expect(linkElement).toBeInTheDocument();
});

test('Guest User', () => {
    render(<Greats />);
    const linkElement = screen.getByText(/Guest/);
    expect(linkElement).toBeInTheDocument();
});
