// Test away!
import React from 'react';
import { render, fireEvent, getAllByText } from '@testing-library/react';
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

test('find toggledLocked', () => {
  // Arrange
  const { findByText } = render(<Controls />);
  // Act - getting the node by text
  findByText(/toggle-/i);
  findByText(/open gate/i);
  // Assertion is if ^^^ is truthy
});
test('the closed toggle button is disabled if the gate is locked', () => {
  const { findByText, queryByText } = render(<Controls locked={true} />)
  const disableButton = findByText(/disable/i)
  expect(findByText(/locked/i)).not.toBeFalsy()
});
//   const gate = getByText(/locked/i)
//   fireEvent.click(gate);
//   findByText(/unlock gate/i)

// })
