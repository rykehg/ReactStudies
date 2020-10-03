import React from 'react'

/* Transformando a função a seguir em arrow function
function Primeiro() {
  return (
      <React.Fragment>
        <h1>Primeiro Componente</h1>
        <h2>Exemplo de componente arrow</h2>
      </React.Fragment>
  )
}
export default Primeiro
*/

/* O export pode ficar na mesma linha da function e a palavra function se torna () =>
export default () => {
  return (
      <React.Fragment>
        <h1>Primeiro Componente</h1>
        <h2>Exemplo de componente arrow</h2>
      </React.Fragment>
  )
}
*/

// A partir dai podemos retirar as chaves e o return e usar <></>
export default () => 
  <>
    <h1>Primeiro Componente (Arrow) </h1>
    <h2>Exemplo de componente arrow</h2>
  </>