import React from "react";
import Filho from "./Filho";

export default props =>
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        <Filho nome="Alana" sobrenome={props.sobrenome}/>
        <Filho {...props} />
        <Filho {...props} nome="Deolinda" />
    </ul>
</div>