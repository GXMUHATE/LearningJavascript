import Link from 'next/link'
import Navigator from '../components/Navigator'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navigator text="Estilo" destiny="/estilos"/>
            <Navigator text="Example" destiny="/example" color="#9400de"/>
            <Navigator text="JSX" destiny="/jsx" color="crimson"/>
        </div>
    )
}