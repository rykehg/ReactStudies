import React from 'react'

import products from '../../data/products'
//Quando trabalhamos com repetição é importante usar a definição unica da repeticao com a palavra "key"
export default props => {

  function getProdutosListItem() {
    return products.map(prod => {
      return <li key={prod.id}>
        {prod.id} - {prod.nome} -- R$ {prod.preco}
        </li>
    })
  }
  return (
    <div>
      <h2>Repetição</h2>
      <ul>
        {getProdutosListItem()}
      </ul>
    </div>
  )
}