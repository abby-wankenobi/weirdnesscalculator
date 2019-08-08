import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getLikes, deleteLike } from '../../actions/likeActions';


class LikedGifs extends Component {

  state = {
    disableButton: true,
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
        <div>
          <div key={i}>
            <p>{like.title}</p>
            <img src={like.url}></img>
            <button onClick={() => this.props.deleteLike(like.url)}>Delete</button>
          </div>
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
          <br/>
          {this.renderLikes()}
          <br/>
          <Link to={{
              pathname: "/results",
              state: this.state
            }}
          >
            <button disabled={this.state.likes < 5 ? false : true }>See Yours Results</button>

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
