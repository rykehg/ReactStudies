import React from "react";

//O +e.target... é pa garantir q seja valor numerico
//Esse é um componente stateless, os dados são passados via props q é somente leitura
export default (props) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                onChange={(e) => props.onPassoChange(+e.target.value)}
            />
        </div>
    );
};