import React from 'react';
import classes from './Search.css';


const search = (props) => (
  <div className="home-container border-bottom border-right">
    <p>Find out how weird you are by selecting the GIFs that make you laugh. Well show you the least weird ones to start, but you can move the slider to make them weirder.</p>
    <p>When you find a GIF you like, press the <i>Like</i> button. Once you like 5 GIFs, well show you how weird you are.</p>

    <span>Search term</span>
    <button>Search</button>
  </div>
);

export default search;
