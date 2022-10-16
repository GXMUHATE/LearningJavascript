import Link from 'next/link'
import styles from '../styles/Navegador.module.css'

export default function Navigator(props){
    return (
        <Link href={props.destiny}>
            <div className={styles.navigator} style={{
                backgroundColor: props.color ?? 'darkturquoise'
            }}>
                {props.text}
            </div>
        </Link>
    )
}