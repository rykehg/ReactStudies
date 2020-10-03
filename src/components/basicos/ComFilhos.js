import React from 'react'

//Recebendo outros componentes como parametro atraves do props.children, tudo oq é passado dentro da tag vai parar ai
export default props =>
  <div>
    <h2>Os filhos:</h2>
    <div>
      {props.children}
    </div>
  </div>