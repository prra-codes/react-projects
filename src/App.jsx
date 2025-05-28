import { useState } from 'react';

import './App.css';
import Accordian from './components/accordion';
import RandomColor from './components/random_color';
import StarRating from './components/star-rating';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}
      {/* Random color component */}
      {/* <RandomColor /> */}
      {/* Star rating component
       */}
      {/* <StarRating noOfStars={10} /> */}
      {/* Load more products component */}
      {/* <LoadMoreData /> */}
      {/* Tree view component/menu UI component / recursive navigation menu */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
