// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from "./Display";

test('displays if gate is open/closed and if it is unlocked', () => {
    const { getByText } = render(<Display />);
    const div = getByText(/unlocked/i);
    fireEvent.click(div);
    getByText(/open/i);


})

test(`displays 'Closed' if the closed prop is true and 'Open' if otherwise`, () => {
    const { queryByText } = render(<Display />);
    const div = queryByText(/closed/i);
    fireEvent.click(div);
    queryByText(/closed/i);
})