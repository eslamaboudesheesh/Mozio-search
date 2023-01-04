/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import { Provider } from 'react-redux';

import store from '../../../store/index';
import { act } from 'react-dom/test-utils';
import { Cityoforigin } from './Cityoforigin';

const { result } = renderHook(() => useForm());

describe('Cityoforigin Render', () => {
    it('Cityoforigin render With data', async () => {
        render(
            <Provider store={store}>
                <Cityoforigin control={result.current.control} label="Dest" name="dd" />{' '}
            </Provider>,
        );
        const inputLabel = screen.getByLabelText(/Dest/i);
        expect(inputLabel).toBeInTheDocument();
    });

    it('AutoComplete Cityoforigin changes ', () => {
        render(
            <Provider store={store}>
                <Cityoforigin control={result.current.control} label="Dest" name="dd" />{' '}
            </Provider>,
        );
        const autoComplete = screen.getByLabelText(/Dest/i);
        const input = screen.getByRole('combobox');
        act(() => {
            input.focus();
            fireEvent.change(input, { target: { value: 'Paris' } });

            fireEvent.keyDown(autoComplete, { key: 'ArrowDown' });
            fireEvent.keyDown(autoComplete, { key: 'Enter' });
        });

        expect(input).toHaveValue('Paris');
    });
});
