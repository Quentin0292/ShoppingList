import React, { Component } from 'react'

class Form extends Component {
  state = {
    quantity: 0,
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    // ajout du produit et de sa quantité en paramètre de la fonction addArticle
    this.props.addArticle(this.state);
    // réinitialisation du state
    this.setState({ quantity: 0, name: '' });
  }

  render() {
    return (
      <div>
        <h2>Produit à ajouter à ma liste</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="number" value={this.state.quantity} onChange={event => this.setState({ quantity: event.target.value })} placeholder="quantité"/>
          <input type="text" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} placeholder="produit" />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    )
  }
}

export default Form
