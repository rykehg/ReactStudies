import React, { useState } from "react";

//controlled component:
//acontece um evento --> muda um valor --> estado muda --> interface grafica reflete o estado -- sempre nesse sentido
//Só da p mudar o componente por meio de função
//Ou colocar como readyOnly no componente
export default (props) => {
    const [nome, setNome] = useState('Pedro')
    return (
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome}
                onChange={e => setNome(e.target.value)} />
        </>
    );
};