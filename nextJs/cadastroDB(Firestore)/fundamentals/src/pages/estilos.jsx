import styles from '../styles/Estilos.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estilos() {
    return (
        <Layout titulo="Example of CSS Modularized">
            <div className={styles.skyblue}>
                <h1>Styling using CSS Modules</h1>
            </div>
        </Layout>
    )
}