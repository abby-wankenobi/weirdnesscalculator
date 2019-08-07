import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getLikes, deleteLike } from '../../actions/likeActions';


class LikedGifs extends Component {

  state = {}

  componentDidMount = () => {
    this.props.getLikes();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props && this.props.likes) {
      this.props.getLikes();
      this.setState({ likes: this.props.likes })
    }
  }

  // Conditionally render likes if user has liked any gifs
  renderLikes = () => {
    if (this.state.likes && this.state.likes.length > 0) {
      return (this.state.likes.map((like, i) =>
          <div key={i}>
            <p>{like.title}</p>
            <img src={like.url}></img>
            <button onClick={() => this.props.deleteLike(like.url)}>Delete</button>
          </div>
        )
      )
    }
  }

  render () {
    return (
      <Aux>
        <div className="home-container liked-container">
          <span>Liked Gifs</span>
          {this.renderLikes()}

        </div>
        <Link to="/results">
          <button>See Yours Results</button>
        </Link>
      </Aux>
    )
  }
}

const mapStateToProps = state => ({
  likes: state.likes.likes
})

export default connect(mapStateToProps, { getLikes, deleteLike })(LikedGifs);
