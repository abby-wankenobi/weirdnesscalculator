import { FETCH_LIKES, NEW_LIKE, DELETE_LIKE } from './types';

export const getLikes = () => dispatch => {
  dispatch({type: "FETCH_LIKES"})
}

export const newLike = (like) => dispatch => {
  dispatch({type: "NEW_LIKE", payload: like})
}

export const deleteLike = (like) => dispatch => {
  dispatch({type: "DELETE_LIKE", payload: like})
}
