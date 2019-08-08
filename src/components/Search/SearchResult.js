import React, { Component } from 'react';
import classes from './Search.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import { newLike, getLikes } from '../../actions/likeActions';
import { Container, Row, Col } from "react-bootstrap";


class SearchResult extends Component {

  state = {
    disableButton: false
  }

  componentDidUpdate = (prevProps) => {
    if (this.state.alreadyExistingLikes) {
      const checkForTerm = this.state.alreadyExistingLikes.find( like => like.searchTerm === this.props.searchTerm);

      if (this.props.likes) {
        if (checkForTerm) {
          this.setState({ disableButton: true })
        }
      }

      if (prevProps.searchTerm !== this.props.searchTerm) {
        if (checkForTerm === undefined) {
          this.setState({ disableButton: false })
        }
      }
    }

    if (prevProps.likes) {
      this.setState({ alreadyExistingLikes: prevProps.likes})
    }
  }

  render() {
    return (
      <div className="home-container border-right">
        <span><strong>YOUR RESULT</strong></span>
        <Container className="result-gif text-center">
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <div>
                <span>{this.props.title}</span>
                <br/>
                <img className="img-max p-b-20" src={this.props.url}></img>
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
                    onClick={() => this.props.newLike(
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
              {this.props.likes && this.props.likes[0] ? this.props.likes[0].title : null}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  likes: state.likes.likes
})

export default connect(mapStateToProps, { newLike, getLikes })(SearchResult);
