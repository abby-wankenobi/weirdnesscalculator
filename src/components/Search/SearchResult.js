import React from 'react';
import classes from './Search.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


const searchResult = (props) => (
  <div className="home-container border-right">
    <span><strong>YOUR RESULT</strong></span>
    <div>
      <span>{props.title}</span>
      <img src={props.url}></img>
      <button>Like</button>
    </div>
    <div>
      <Slider
        min={0}
        max={10}
        step={1}
        onAfterChange={(e) => props.setWeirdness(e)}
      />
    </div>
    <br/>
    <p>Weirdness: {props.weirdness}</p>

  </div>
);

export default searchResult;
