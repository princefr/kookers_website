import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'



function LoginPage(){
    return (<div style={styles}>
            <Head>
                <title>Se connecter à Kookers</title>
            </Head>
            <main>
                <Navbar></Navbar>
                <Footer></Footer>
            </main>
        </div>)
}



export default LoginPage