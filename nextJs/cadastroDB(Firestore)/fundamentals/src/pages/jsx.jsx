export default function Jsx() {
    const titulo = <h1>JSX is a Central Concept</h1>

    function subtitle() {
        return  <h2>{"Awesome features".toUpperCase()}</h2>       
    }
    return (
        <div>
            {titulo}
            {subtitle()}
            <p>
                {JSON.stringify({name: 'Muhate', age: 32})}
            </p>
        </div>
    )
}