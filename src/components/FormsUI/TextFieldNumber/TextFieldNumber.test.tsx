/* eslint-disable react/react-in-jsx-scope */
import { render, renderHook, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import { FormInputText } from './TextFieldNumber';
const { result } = renderHook(() => useForm());

describe('FormInputText Render', () => {
    it('FormInputText render With data', () => {
        render(<FormInputText control={result.current.control} label="ff" name="dd" />);
        const inputLabel = screen.getByLabelText(/ff/i);
        expect(inputLabel).toBeInTheDocument();
    });
});
