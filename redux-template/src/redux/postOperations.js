// import {
//   fetchPostsStart,
//   fetchPostSuccess,
//   fetchPostError,
// } from './postActions';

// export const fetchPosts = () => dispatch => {
//   dispatch(fetchPostsStart());

//   fetch('http://localhost:8086/posts')
//     .then(response => response.json())
//     .then(data => dispatch(fetchPostSuccess(data)))
//     .catch(error => dispatch(fetchPostError(error)));
// };

import { getPosts, deletePost, addPost } from './postActions';

export const getPostsOperation = () => dispatch => {
  dispatch(getPosts.start());

  fetch('http://localhost:8086/posts')
    .then(response => response.json())
    .then(data => dispatch(getPosts.success(data)))
    .catch(error => dispatch(getPosts.error(error)));
};

export const deletePostOperation = id => dispatch => {
  dispatch(deletePost.start());

  fetch(`http://localhost:8086/posts/${id}`, { method: 'DELETE' })
    .then(() => dispatch(deletePost.success(id)))
    .catch(error => dispatch(deletePost.error(error)));
};

export const addPostOperation = post => dispatch => {
  dispatch(addPost.start());

  fetch('http://localhost:8086/posts/', {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    method: 'POST',
    body: JSON.stringify(post),
  })
    .then(response => response.json())
    .then(data => dispatch(addPost.success(data)))
    .catch(error => dispatch(addPost.error(error)));
};
