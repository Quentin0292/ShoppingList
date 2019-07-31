import React, { Component } from 'react'

import Form from './Form'
import ItemList from './ItemList'

class App extends Component {
  state = {
    articles: []
  }

  saveStateToLocalStorage = () => {
    // enregistrement du state dans le localStorage
    localStorage.setItem('state', JSON.stringify(this.state));
  };

  addArticle = article => {
    // récupération de l'état courant de notre state
    let oldArticle = this.state.articles;
    // création d'un id unique pour chaque article
    article.id = Date.now();
    // variable où sera stocker tous le contenu de l'ancien state et le nouvel article à l'aide du spread operator
    let newArticle = [...oldArticle, article]
    // mise à jour du state
    this.setState({ articles: newArticle }, this.saveStateToLocalStorage);
  };

  componentDidMount(){
    // récupération du state du localStorage
    const state = localStorage.getItem('state');
    if(state){
      this.setState(JSON.parse(state));
    }
  };

  render () {
    return (
      <div>
        <h1>Liste d'achat</h1>
        <Form addArticle={this.addArticle} />
        <ItemList articles={this.state.articles} />
      </div>
    )
  }
}

export default App
