import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  handleLike() {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  }

  handleDislike() {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
    }));
  }

  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  render() {
    return (
      <>
        <h1>Text Content Rating</h1>
        <div className='content-rating'>
          <p>Text</p>
          <div className='rating-buttons'>
            <button className="like-button" onClick={this.handleLike}>
              Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.handleDislike}>
              Dislike ({this.state.dislikes})
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
