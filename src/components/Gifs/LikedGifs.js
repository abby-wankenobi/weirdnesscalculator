import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getLikes, deleteLike } from '../../actions/likeActions';
import { Container, Row, Col } from "react-bootstrap";


class LikedGifs extends Component {

  state = {
    disableButton: false,
  }

  componentDidMount = () => {
    console.log(this.props.getLikes());
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props && this.props.likes) {
      this.props.getLikes();
      this.setState({
        likes: this.props.likes,
      })
    }
  }

  // Conditionally render likes if user has liked any gifs
  renderLikes = () => {
    if (this.state.likes && this.state.likes.length > 0) {
      return (this.state.likes.map((like, i) =>
          <Col md={6}>
            <div key={i} className="p-y-20">
              <p>{like.title}</p>
              <img className="img-max p-b-10" src={like.url}></img>
              <br/>
              <button className="delete-button" onClick={() => this.props.deleteLike(like.url)}>Delete</button>
            </div>
          </Col>
        )
      )
    } else {
      return (
        <p>Enter a search term to find some weird Gifs!</p>
      )
    }
  }

  renderButton = () => {
    if(!this.state.likes || this.state.likes.length < 5) {
      return (
        <Link to={{
            pathname: "/results",
            state: this.state
          }}
        >
          <button className="main-button" disabled={true}>CALCULATE MY WEIRDNESS SCORE</button>
        </Link>
      )
    } else if (this.state.likes && this.state.likes.length === 5){
      return (
        <Link to={{
            pathname: "/results",
            state: this.state
          }}
        >
          <button className="main-button" disabled={false}>CALCULATE MY WEIRDNESS SCORE</button>
        </Link>
      )
    }
  }


  render () {
    console.log(this.state)
    return (
      <Aux>
        <div className="home-container liked-container">
          <span><strong>YOUR LIKED GIFS</strong></span>
          <br/>
            <Container>
              <Row>
                {this.renderLikes()}
              </Row>
            </Container>
          <br/>

          {this.renderButton()}

          {/* Refactor to count down how many more gifs the user needs to like in order to calculate their score */}
          <p>You must like 5 Gifs to calculate your score</p>
        </div>

      </Aux>
    )
  }
}

const mapStateToProps = state => ({
  likes: state.likes.likes
})

export default connect(mapStateToProps, { getLikes, deleteLike })(LikedGifs);
