// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders the controls and display components', () => {
    const { findByLabelText, rerender } = render(<Dashboard />);
    findByLabelText(/controls/i);

    rerender(<Dashboard />);
    findByLabelText(/display/i);

})