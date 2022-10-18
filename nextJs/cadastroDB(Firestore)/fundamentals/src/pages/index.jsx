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
            <Navigator text="Navigation #01" destiny="/navigation" color="purple"/>
            <Navigator text="Navigation #02" destiny="/client/mpt/123" color="green"/>
            <Navigator text="Component with state" destiny="/state" color="orange"/>
            <Navigator text="Integration with API #01" destiny="/integrationAPI" color="red"/>
        </div>
    )
}