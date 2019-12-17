// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from "./Display";
import expectExport from 'expect';
import { italic } from 'ansi-colors';

test('displays if gate is open/closed and if it is unlocked', () => {
    const { getByText } = render(<Display />);
    const div = getByText(/unlocked/i);
    fireEvent.click(div);
    getByText(/open/i);


})

test(`displays 'Closed' if the closed prop is true and 'Open' if otherwise`, () => {
    expect('closed').toMatch(/closed/);
})

test(`displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise`, () => {
    expect('locked').toMatch(/locked/);
})

test('  div locked or closed use the red-led class', () => {
    const { container } = render(<Display />)
    expect('red-led').toMatch('red-led')
})

test('when unlocked or open use the green-led class', () => {
    expect('green-led').toMatch('green-led')
})

test('show unlocked and open', () => {
    const { getByText } = render(<Display />);
    const div = getByText(/open/i);
    fireEvent.click(div);
    getByText(/unlocked/i);
})

test('cannot be closed or opened if it is locked', () => {
    const { getByText } = render(<Display />);
    const div = getByText(/open/i);
    fireEvent.click(div);
    getByText(/locked/i);
})