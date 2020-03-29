import { ActionType } from './postActions';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_POST_START:
      return state;
    case ActionType.FETCH_POST_SUCCESS:
      return payload.posts;
    case ActionType.FETCH_POST_ERROR:
      return payload.error;
    case ActionType.DELETE_POST_START:
      return state;
    case ActionType.DELETE_POST_SUCCESS:
      return state.filter(el => el.id !== payload.id);
    case ActionType.DELETE_POST_ERROR:
      return [...state, payload.error];
    case ActionType.ADD_POST_START:
      return state;
    case ActionType.ADD_POST_SUCCESS: {
      return [...state, payload.post];
    }
    case ActionType.ADD_POST_ERROR:
      return payload.error;
    default:
      return state;
  }
};

export default postsReducer;
