
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Nav from "../components/nav"
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import dynamic from 'next/dynamic'
import * as firebaseAdmin from "firebase-admin";


const AgoraComponent = dynamic(() => import('../components/agora/AgoraComponent'), {
    ssr: false
  });

function MyChannel() {



    return (
        <div style={styles}>
            <Head>
                <title>Ma chaine</title>
            </Head>
            <main>

                
                <div className="flex flex-col w-screen h-screen">
                    <Nav />
                    <AgoraComponent></AgoraComponent>
                </div>

                
                
                
            </main>
        </div>
    )
}


export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.RENDER,
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
  })(async ({AuthUser}) => {
    await firebaseAdmin.auth().getUser(AuthUser.id)
      return {
        props: {
        
        }
      }
  })


export default withAuthUser({whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN, whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(MyChannel)