import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    `}>
      <Layout title='Simple Registration'>
      <span>Content</span>
      </Layout>
      
    </div>
  )
}
