/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import CardData from './CardData';

describe('Card Render', () => {
    it('Card render With Cities props', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        render(<CardData dest={30} cityDest={'Alex'} cityOrigin={'Cairo'} />);
        const cardData = screen.getByText(/Cairo to Alex/);
        expect(cardData).toBeInTheDocument();
    });
});
