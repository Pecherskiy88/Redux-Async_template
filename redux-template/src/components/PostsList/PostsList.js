import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getPostsOperation,
  deletePostOperation,
  addPostOperation,
} from '../../redux/postOperations';

class PostsList extends Component {
  state = {
    author: '',
    title: '',
  };

  componentDidMount() {
    this.props.getPosts();
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addPost({ ...this.state });

    this.setState({
      author: '',
      title: '',
    });
  };

  render() {
    const { posts, onDelete } = this.props;
    const { author, title } = this.state;

    const renderItems =
      posts.length > 0 &&
      posts.map(el => (
        <li key={el.id}>
          <h2>{el.author}</h2>
          <p>{el.title}</p>
          <button type="button" onClick={() => onDelete(el.id)}>
            DELETE
          </button>
        </li>
      ));

    return (
      <>
        <form>
          <input
            type="text"
            name="author"
            value={author}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            ADD
          </button>
        </form>
        <ul>{renderItems}</ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  getPosts: getPostsOperation,
  onDelete: deletePostOperation,
  addPost: addPostOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
