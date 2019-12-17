// Test away!
import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import Dashboard from '../dashboard/Dashboard';
import Controls from './Controls';
import expectExport from 'expect';
{/* <div className="controls panel">
      <button disabled={!closed} onClick={toggleLocked} className="toggle-btn" data-testid="close">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div> */}


//test('button text changes to reflect the state the door when clicked')
it('Controls button  changes from open to close', () => {
  const { getByText, findByText } = render(<Controls />)
  const gate = getByText(/close gate/i)
  fireEvent.click(gate);
  findByText(/unlock gate/i);
})

test('buttons text changes to reflect the state the door will be in if clicked', () => {
  // Arrange
  const { getByText } = render(<Dashboard><Controls /></Dashboard>);
  // Act - getting the node by text
  const gateButton = getByText(/close/i);
  fireEvent.click(gateButton)
  getByText(/open gate/i);
  // Assertion is if ^^^ is truthy
});
test('the closed toggle button is disabled if the gate is locked', () => {
  const { findByText, queryByText } = render(<Controls locked={true} />)
  const disableButton = findByText(/disable/i)
  expect(findByText(/locked/i)).not.toBeFalsy()
});

test('the locked toggle button is disabled if the gate is open', () => {
  const { findByText } = render(<Controls closed={true} />)
  const disableButton = findByText(/disable/i)
  expect(findByText(/open/i)).toBeTruthy()

});
