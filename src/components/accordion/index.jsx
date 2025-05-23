// single selection
// multiple selection

import { useState } from 'react';
import data from './data';
import './styles.css';

export default function Accordian() {
  const [selected, setSelected] = useState(null); // At the start you will not select anything so the initially the value will be null
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // Intially multi selection will be turned off
  const [multipleIds, setMultipleIds] = useState([]); // Whenever you select multiple items, you have to store multiple ids

  // based on the id in data.js, we can track which accordian item I am selecting/clicking

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId); // we are setting the id we are getting when clicking the title into state

    // However, if the item has already been selected, and the same item is clicked, we set it to null to stop displaying the answer
  }

  function handleMultiSelection(getCurrentId) {
    // When clicking an item, we need to store the id in the multipleIds array, unless we click the same item array in which case we need to remove it
    let cpyMultipleIds = [...multipleIds];

    // checking index of multipleid, to see if it already in the multiple arrays or not. If the id is present that means we have already clicked on that, and it needs to be removed if clicked on again, or else we will add it to the array

    const findIndexOfCurrentId = cpyMultipleIds.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultipleIds.push(getCurrentId);
    // If the current id hasn't been clicked (is not in the multipleIds array), push the current id into the copyMultipleIds array
    else cpyMultipleIds.splice(findIndexOfCurrentId, 1); //if  the current is in the multipleIds array, remove that id

    setMultipleIds(cpyMultipleIds);
  }

  console.log('SELECTED ID', selected, 'MULTIPLE IDS', multipleIds);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                {/* passing id into handleSingleSelection function so we can target each item */}
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multipleIds.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multipleIds.iindexof(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
              {/* If the id of the item we have selected/clicked is the same as
              dataItem.id, we show only that div answer */}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
        {/* If the data exists, show data. if not, show "No data found" */}
      </div>
    </div>
  );
}
