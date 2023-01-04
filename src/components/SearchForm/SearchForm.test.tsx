/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';

describe('SearchForm Render', () => {
    it('SearchForm render ', () => {
        render(
            <Provider store={store}>
                <Router>
                    <SearchForm />
                </Router>
            </Provider>,
        );
        const SearchFormView = screen.getByText(/Submit/i);
        expect(SearchFormView).toBeInTheDocument();
    });
});
