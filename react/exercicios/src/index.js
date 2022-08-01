import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import Saudacao from './components/Saudacao';
// import BomDia from './components/BomDia'
//import Multi, { BoaNoite } from './components/Multiplos';

//before
// ReactDOM.render(<BomDia nome="Muhate"/>, document.getElementById('root'))


// After
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<div>
<Saudacao tipo="Boa Tarde" nome="Muhate" />
</div>
);



