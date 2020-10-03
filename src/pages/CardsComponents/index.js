import React from 'react'

import './CardsComp.css'

import Primeiro from '../../components/basicos/Primeiro'
import PrimeiroAF from '../../components/basicos/PrimeiroArrowFunc'
import ComParametro from '../../components/basicos/ComParametro'
import ComFilhos from '../../components/basicos/ComFilhos'
import Card from '../../components/layout/Card'
import Repeticao from '../../components/basicos/Repeticao'
import Condicional from '../../components/basicos/Condicional'
import CondicionalConIf from '../../components/basicos/CondicionalConIf'
import Pai from'../../components/comunicacao/direta/Pai'
import Super from'../../components/comunicacao/indireta/Super'
import Input from "../../components/form/Input";
import Contador from "../../components/contador/Contador";
import Mega from '../../components/mega/Mega'

export default function App() {
  return ( 
    <div className='CardsComp App'>
      <Card titulo="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
      <Card titulo="#02 - Primeiro Arrow Function" color="#92B06A">
        <PrimeiroAF />
      </Card>
      <Card titulo="#03 - Componente com parametro" color="#FF85CB">
        <ComParametro titulo="Esse é o título"
          subtitulo="Esse é o subtítulo" />
      </Card>
      <Card titulo="#04 - Componente com filhos" color="#D96459">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#05 - Repetição" color="#008BBA">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="#06 - Condicional v1" color="#E94C6F">
        <Condicional numero={10}></Condicional>
      </Card>
      <Card titulo="#07 - Condicional v2" color="#FA6900">
        <CondicionalConIf numero={11}></CondicionalConIf>
      </Card>
      <Card titulo="#08 - Comunicação Direta" color="#4298B5">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo="#09 - Comunicação Indireta" color="#000">
        <Super></Super>
      </Card>
      <Card titulo="#10 - Input" color="#9C0F5F">
        <Input></Input>
      </Card>
      <Card titulo="#11 - Contador" color="#293E6A">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo="#11 - Mega" color="#73503C">
          <Mega qtdeNumero={8}></Mega>
      </Card>
    </div>
  );
}