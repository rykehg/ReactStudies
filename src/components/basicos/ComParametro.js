import React from 'react'

//Exemplo de componente passando parametro pode ser usado o nome qualquer porem usualmente usa-se props
//No JSX dentro de um par de chaves {} podemos colocar qualquer código javascript q ele será interpretado
export default (props) => {
    // props é somente leitura!!!!
    // props.titulo = "Outro Título";
    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>
    );
};