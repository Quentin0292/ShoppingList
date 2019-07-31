import React from 'react'
import Article from './Article'

const ItemList = props => {
  return (
    <div>
      <h2>Liste</h2>
      <ul>
        {
          props.articles.map(article => <Article data={article} key={article.id} />)
        }
      </ul>
    </div>
  )
}

export default ItemList
