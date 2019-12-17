// Test away!
import React from 'react';
import { render, fireEvent, getAllByText } from '@testing-library/react';
import Controls from './Controls';

test('the closed toggle button is disabled if the gate is locked', () => {
    const { getAllByText } = render(<Controls />)
    const button = getAllByText(container, /lock/i);
    fireEvent.click(button);
    getAllByText(/unlock/i)
});
// test('buttons toggle the closed and locked states based on toggleLocked ', () => {
//     const { getAllByLabelText } = render(<Controls toggleLocked />);
//     let buttonUnlock = getAllByLabelText(toggleLocked.text)
//     fireEvent.click(buttonUnlock)
//     expect(buttonUnlock.toggleLocked).toBe()

//     fireEvent.click(buttonUnlock)
//     expect(buttonUnlock.toggleLocked).toBe()
// })

// 
// test('button text changes to reflect the state the door will be in if clicked', () => {
//     var textConfirmButtonNode =
//         .findRenderedDOMComponentWithTag(textConfirmButton, 'button');

//     expect(textConfirmButtonNode.disabled).toEqual(true)
// })