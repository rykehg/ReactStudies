import React, { useState } from "react";
import Sub from "./Sub";

//componente pai
//onClicar é uma propriedade do componente Sub
export default (props) => {

    const [texto, setTexto] = useState('Valor') //Hook para modificar estado
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto) {
        setNum(valorGerado)
        setTexto(texto)
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
};