import './Main.css'
import React, {Component, Fragment} from 'react'
import Header from './Header'

export default props =>
<React.Fragment>
    <Header/>
    <main className="content">
        Conteúdo
    </main>
</React.Fragment>