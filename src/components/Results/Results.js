import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import classes from './Results.css';
import { Container, Row, Col } from "react-bootstrap";



class Results extends Component {

  calculateAverageScore = () => {
    let likes = this.props.location.state.likes;
    let count = likes.length;
    let total = 0;
    likes.forEach(i => {
      total += i.weirdness
    })
    let average = total/count;
    return Math.round(average);
  }

  renderLikedGifs = () => {
    let likes = this.props.location.state.likes;
      return likes.map((like,i) =>
        <Col >
          <div key={i}>
            <p>{like.title}</p>
            <img  className="img-max" src={like.url}></img>
            <p>{like.weirdness}/10</p>
          </div>
        </Col>
      )
  }

  render () {
    console.log(this.props.location.state)
    return (
      <div className="results-container">
        <p className="results-header">You scored a {this.calculateAverageScore()} out of 10 on the weirdness scale!</p>
        <p className="results-subhead">The Gifs you liked</p>
          <Container>
            <Row>
              {this.renderLikedGifs()}
            </Row>
          </Container>
        <Link to="/">
          <button className="results-button">H o m e</button>
        </Link>
      </div>
    )
  }
}


export default Results;
