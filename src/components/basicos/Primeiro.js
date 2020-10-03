import React from 'react'

//Não podemos retornar dois elementos JSX adijacentes só entre divs
function Primeiro() {
  return (
    <div>
      <div>
        <h2>Primeiro Componente</h2>
        <h3>Exemplo de um componente React</h3>
      </div>
      <>
        <h2>Primeiro Componente</h2>
        <h3>Mesmo que o primeiro porem não esta entre div</h3>
      </>
      <React.Fragment>
        <h2>Primeiro Componente</h2>
        <h3>Mesmo que o primeiro porem não esta entre div</h3>
      </React.Fragment>
    </div>
  )
}

export default Primeiro