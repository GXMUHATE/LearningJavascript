import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX is a Central Concept</h1>

    function subtitle() {
        return  <h2>{"Awesome features".toUpperCase()}</h2>       
    }
    return (
        <Layout titulo="Understanding JSX">
            <div>
                {titulo}
                {subtitle()}
                <p>
                    {JSON.stringify({name: 'Muhate', age: 32})}
                </p>
            </div>
        </Layout>
    )
}