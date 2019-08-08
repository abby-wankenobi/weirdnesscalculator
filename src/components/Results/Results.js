import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Results extends Component {
  render () {
    console.log(this.props.location.state)
    return (
      <Aux>
        results
        <Link to="/">
          <button>Home</button>
        </Link>
      </Aux>
    )
  }
}


export default Results;
