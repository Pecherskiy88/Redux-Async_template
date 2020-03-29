export const ActionType = {
  FETCH_POST_START: 'FETCH_POST_START',
  FETCH_POST_SUCCESS: 'FETCH_POST_SUCCESS',
  FETCH_POST_ERROR: 'FETCH_POST_ERROR',
  DELETE_POST_START: 'DELETE_POST_INIT',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR: 'DELETE_POST_ERROR',
  ADD_POST_START: 'ADD_POST_START',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_ERROR: 'ADD_POST_ERROR',
};

// export const fetchPostsStart = () => ({
//   type: ActionType.FETCH_POST_START,
// });

// export const fetchPostSuccess = posts => ({
//   type: ActionType.FETCH_POST_SUCCESS,
//   payload: { posts },
// });

// export const fetchPostError = error => ({
//   type: ActionType.FETCH_POST_ERROR,
//   payload: { error },
// });

export const getPosts = {
  start: () => ({
    type: ActionType.FETCH_POST_START,
  }),
  success: posts => ({
    type: ActionType.FETCH_POST_SUCCESS,
    payload: { posts },
  }),
  error: error => ({
    type: ActionType.FETCH_POST_ERROR,
    payload: { error },
  }),
};

export const deletePost = {
  start: () => ({
    type: ActionType.DELETE_POST_START,
  }),
  success: id => ({
    type: ActionType.DELETE_POST_SUCCESS,
    payload: { id },
  }),
  error: error => ({
    type: ActionType.DELETE_POST_ERROR,
    payload: { error },
  }),
};

export const addPost = {
  start: () => ({
    type: ActionType.ADD_POST_START,
  }),
  success: post => ({
    type: ActionType.ADD_POST_SUCCESS,
    payload: { post },
  }),
  error: error => ({
    type: ActionType.ADD_POST_ERROR,
    payload: { error },
  }),
};
