import { useState } from 'react';

import './App.css';
import Accordian from './components/accordion';
import RandomColor from './components/random_color';
import StarRating from './components/star-rating';
import LoadMoreData from './components/load-more-data';

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
      <LoadMoreData />
    </div>
  );
}

export default App;
