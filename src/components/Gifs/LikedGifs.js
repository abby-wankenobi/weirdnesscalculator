import React from 'react';
import Aux from '../../hoc/Aux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const likedGifs = (props) => (
  <Aux>
    <div className="home-container liked-container">
      <span>Liked Gifs</span>
    </div>
    <Link to="/results">
      <button>See Yours Results</button>
    </Link>
  </Aux>

);

export default likedGifs;
