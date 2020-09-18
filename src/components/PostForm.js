import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../actions";
import Alert from "./Alert";

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
    const { createPost, showAlert } = this.props;

    if (!title.trim()) {
      return showAlert("Post title cannot be empty");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    createPost(newPost);
    this.setState({ title: "" });
  };

  changeInputHandler = (event) => {
    event.persist();
    console.log(this.state.title);
    this.setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  render() {
    const { submitHandler, changeInputHandler } = this;
    const { alert } = this.props;
    const { title } = this.state;

    return (
      <form onSubmit={submitHandler}>
        {alert && <Alert text={alert} />}
        <div className="form-group">
          <label className="h3" htmlFor="title">
            Post title for Sync Posts
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            name="title"
            onChange={changeInputHandler}
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
