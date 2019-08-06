import React from 'react';
import classes from './Search.css';


const searchResult = (props) => (
  <div className="home-container border-right">
    <span>SearchResult</span>
    <span>{props.title}</span>
  </div>
);

export default searchResult;
