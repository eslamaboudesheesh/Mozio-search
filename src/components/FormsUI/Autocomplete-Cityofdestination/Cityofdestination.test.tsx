/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { server } from '../../../mocks/server';
import { useForm } from 'react-hook-form';
import { Cityofdestination } from './Cityofdestination';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { fetchDestCities } from '../../../features/cities-destination/citiesdestinationSlice';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import type {} from 'redux-thunk/extend-redux';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { result } = renderHook(() => useForm());

describe('Cityofdestination Render', () => {
    const store = mockStore({
        loading: false,
        cities: [],
        error: '',
    });

    // it('Cityofdestination render With data', () => {
    //     render(
    //         <Provider store={store}>
    //             <Cityofdestination control={result.current.control} label="Dest" name="dd" />{' '}
    //         </Provider>,
    //     );
    //     const inputLabel = screen.getByLabelText(/Dest/i);
    //     expect(inputLabel).toBeInTheDocument();
    // });

    it('AutoComplete changes ', () => {
        render(
            <Provider store={store}>
                <Cityofdestination control={result.current.control} label="Dest" name="dd" />{' '}
            </Provider>,
        );
        const autoComplete = screen.getByLabelText('Dest');
        const input = screen.getByRole('textbox');
        input.focus();
        fireEvent.change(input, { target: { value: 'Paris' } });
        store.dispatch(fetchDestCities('Paris'));
        server.use(
            rest.get('https://mozio-search-fake-api.vercel.app/data', (req, res, ctx) => {
                return res(ctx.status(200));
            }),
        );
        fireEvent.keyDown(autoComplete, { key: 'ArrowDown' });
        fireEvent.keyDown(autoComplete, { key: 'Enter' });
        expect(input).toHaveValue('Paris');
    });
});
