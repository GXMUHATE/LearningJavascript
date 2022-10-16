import Layout from "../../../components/Layout";
import {useRouter} from 'next/router'

export default function ClientPerCode(){
    const router = useRouter()

    
    return(
        <Layout titulo="Dynamic Navigation">
            <div>Code = {router.query.code}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}