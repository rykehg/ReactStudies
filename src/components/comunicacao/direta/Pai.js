import React from 'react'
import Filho from './Filho'

//Na comunicação direta o pai tem a capacidade de passar propriedades diretamente para o filho
//Diferentes formas de passar a propriedade para o filho
//No primeiro ele cria um novo objeto passando todas as propriedades para o filho
//No segundo pegando a propriedade especifica
export default props =>
    <div>
        <Filho {...props}><strong>João</strong></Filho>
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>