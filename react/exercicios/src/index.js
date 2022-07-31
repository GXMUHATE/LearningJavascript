import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
// import BomDia from './components/BomDia'
import Multi, { BoaNoite } from './components/Multiplos';

//before
// ReactDOM.render(<BomDia nome="Muhate"/>, document.getElementById('root'))


// After
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<div>
<Multi.BoaTarde nome="Muhate" />
<BoaNoite nome="Graçane" />
</div>
);



