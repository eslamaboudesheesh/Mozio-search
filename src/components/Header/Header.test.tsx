/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('App Header Render', () => {
    it('Header render With text', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        render(<Header />);
        const HeaderName = screen.getByText(/Mozio Demo/i);
        expect(HeaderName).toBeInTheDocument();
    });
});
