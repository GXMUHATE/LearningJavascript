import Header from "../components/Header";
import Layout from "../components/Layout";

export default function Example() {
    return (
        <Layout titulo="Using Components">
            <Header titulo="Next.Js & React" idade={345} estaBombar={true}/>
            <Header titulo="The best way of Learning to Code"/>
        </Layout>
        
    )
}