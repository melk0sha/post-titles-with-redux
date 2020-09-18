import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../actions";
import { Alert } from "./Alert";

/**
 * Using connect function from 'react-redux' with class component to work with Redux
 *
 * Combination of Redux store and React state
 */

class PostForm extends Component {
  state = {
    title: "",
  };

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return this.props.showAlert("Post title cannot be empty");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="form-group">
          <label className="h3" htmlFor="title">
            Post title for Sync Posts
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ alert: state.app.alert });

const mapDispatchToProps = {
  createPost,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
