import { useState } from "react";
import Layout from "../components/Layout";
export default function Integration() {
  const [client, setClient] = useState({});
  const [code, setCode] = useState(1);

  async function getClient() {
    //1. this with async
    const resp = await fetch(`http://localhost:3000/api/clients/${code}`);
    const data = await resp.json();
    setClient(data);

    //or 2. this without async await
    // fetch(`http://localhost:3000/api/clients/${code}`)
    //   .then((resp) => resp.json())
    //   .then((data) => setClient(data));
  }

  return (
    <Layout>
      <div>
        <input
          type="number"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={getClient}>Get Client</button>
      </div>
      <ul>
        <li>Code: {client.id}</li>
        <li>Name: {client.nome}</li>
        <li>Email: {client.email}</li>
      </ul>
    </Layout>
  );
}
