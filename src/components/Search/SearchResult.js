import React, { Component } from 'react';
import classes from './Search.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import { newLikes, getLikes } from '../../actions/likeActions';

class SearchResult extends Component {

  state = {
    disableButton: false
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props && this.props.likes) {
      this.props.getLikes();
      if (this.props.likes.find( like => like.searchTerm === this.props.searchTerm)) {
        console.log("disabling button")
        this.setState({
          disableButton: true
        })
      }

      if (prevProps.searchTerm !== this.props.searchTerm) {
        console.log("enable")
      }


      else {
        console.log('enable button')
        this.setState({
          disableButton: false
        })
      }
      // this.setState({ likes: this.props.likes })
    }
  }


  render() {

    return (
      <div className="home-container border-right">
        <span><strong>YOUR RESULT</strong></span>
        <div>
          <span>{this.props.title}</span>
          <img src={this.props.url}></img>
        </div>

        { this.props.hasData ?
          <Aux>
            <div>
              <Slider
                min={0}
                max={10}
                step={1}
                onAfterChange={(e) => this.props.setWeirdness(e)}
              />
            </div>
            <br/>
            <p>Weirdness: {this.props.weirdness}</p>
            <button
              disabled={this.state.disableButton}
              onClick={() => this.props.newLikes(
                {
                  title: this.props.title,
                  url: this.props.url,
                  id: this.props.id,
                  weirdness: this.props.weirdness,
                  searchTerm: this.props.searchTerm
                }
              )}
            >
              Like
            </button>
          </Aux>
          :
          null
        }
        {this.props.likes && this.props.likes[0] ? this.props.likes[0].title : 'nope'}


      </div>
    )
  }
}

const mapStateToProps = state => ({
  likes: state.likes.likes
})

export default connect(mapStateToProps, { newLikes, getLikes })(SearchResult);
