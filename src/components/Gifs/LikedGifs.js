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
            <div key={i}>
              <p>{like.title}</p>
              <img className="img-max p-b-20" src={like.url}></img>
              <br/>
              <button onClick={() => this.props.deleteLike(like.url)}>Delete</button>
            </div>
          </Col>
        )
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
          <Link to={{
              pathname: "/results",
              state: this.state
            }}
          >
            <button className="main-button" disabled={this.state.disableButton}>See Yours Results</button>

          </Link>
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
