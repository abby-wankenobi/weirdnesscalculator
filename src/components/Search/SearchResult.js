import React from 'react';
import classes from './Search.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import { newLikes } from '../../actions/likeActions';




const searchResult = (props) => (
  <div className="home-container border-right">
    <span><strong>YOUR RESULT</strong></span>
    <div>
      <span>{props.title}</span>
      <img src={props.url}></img>
    </div>

    { props.hasData ?
      <Aux>
        <div>
          <Slider
            min={0}
            max={10}
            step={1}
            onAfterChange={(e) => props.setWeirdness(e)}
          />
        </div>
        <br/>
        <p>Weirdness: {props.weirdness}</p>
        <button
          onClick={() => props.newLikes(
            {
              title: props.title,
              url: props.url,
              id: props.id,
              weirdness: props.weirdness,
              searchTerm: props.searchTerm
            }
          )}
        >
          Like
        </button>
      </Aux>
      :
      null
    }


  </div>
);

const mapStateToProps = state => ({
  likes: state.likes.likes
})

export default connect(mapStateToProps, { newLikes })(searchResult);
