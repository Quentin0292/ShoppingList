import React, { Component } from 'react'

class Article extends Component {
  render() {
    return (
      <div>
        <span>{this.props.data.quantity} - {this.props.data.name}</span>
      </div>
    )
  }
}

export default Article
