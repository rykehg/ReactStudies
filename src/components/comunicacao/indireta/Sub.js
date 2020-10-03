import React from "react";

//componente filho
export default (props) => {
    function acao() {
        props.onClicar(Math.random(), 'Gerado');
    }

    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    );
};

/*
Posso fazer o mesmo com arrow function
    return (
        <div>
            <button onClick={() => {
              props.onClicar(Math.random())
            }}>Alterar</button>
        </div>
    );
*/