import { FETCH_LIKES, NEW_LIKE, DELETE_LIKE } from '../actions/types';

const initialState = {
  likes: []
}

// Refactor this (state.state??)
export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_LIKES:
      return { state }
    case NEW_LIKE:
      let likesArray = state.state.likes
      let i = likesArray.find(like => like.id === action.payload.id);
      if (i) {
        alert('alredy on list')
      } else {
        likesArray.push(action.payload)
        return { ...state, likes: likesArray }
      }
    case DELETE_LIKE:
      let deleteFromLikeArray = state.state.likes.filter(like =>
        like.url !== action.payload)
      return { ...state, likes: deleteFromLikeArray }
    default:
      return state;
  }
}
