/* eslint-disable react/react-in-jsx-scope */
import { render, renderHook, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { FormInputDate } from './FormInputDate';

const { result } = renderHook(() => useForm());

describe('FormInputDate Render', () => {
    it('FormInputDate render With data', () => {
        render(<FormInputDate control={result.current.control} label="dateTest" name="dd" />);
        const inputLabel = screen.getByLabelText(/dateTest/i);
        expect(inputLabel).toBeInTheDocument();
    });
});
