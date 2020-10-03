import React from 'react'
import If from './If'

//Usando condicional porem com uma função if externa
export default props => {

  return(
    <div>
      <h2>O numero é {props.numero}</h2>
      <If test={props.numero % 2 === 0}>
        <span>Par</span>
      </If>
      <If test={props.numero % 2 === 1}>
        <span>Ímpar</span>
      </If>
    </div>
  )
}