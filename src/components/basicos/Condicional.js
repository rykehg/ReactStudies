import React from 'react'

//Usando condicionais para exibir componentes
export default props => {

  return(
    <div>
      <h2>O numero é {props.numero}</h2>
      { props.numero % 2 === 0 ?
        <span>Par</span> :
        <span>Ímpar</span>
      }
    </div>
  )
}