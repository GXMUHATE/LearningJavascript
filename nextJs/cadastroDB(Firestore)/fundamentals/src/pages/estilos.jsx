import styles from '../styles/Estilos.module.css'
import Link from 'next/link'

export default function Estilos() {
    return (
        <div className={styles.skyblue}>
            <Link href="/">Back</Link>
            <h1>Styling using CSS Modules</h1>
        </div>
    )
}