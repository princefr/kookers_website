
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Nav from "../components/nav"
import { useEffect } from 'react'
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import dynamic from 'next/dynamic'
import * as firebaseAdmin from "firebase-admin";







function MyChannel() {


    
    useEffect(() => {
        

    }, [])

    return (
        <div style={styles}>
            <Head>
                <title>Ma chaine</title>
            </Head>
            <main>

                
                <div className="flex flex-col w-screen h-screen">
                    <Nav />
                    <div className="flex flex-col pt-24 pb-5 container container  mx-auto h-full">
                        <div className=" flex flex-row border-b border-1 border-gray-100 justify-between b-3 pb-2">
                            <div className="text-3xl font-montserrat font-semibold">
                                Ma chaine
                            </div>
                            <div className="flex flex-row justify-end space-x-5">
                                <button className="focus:outline-none">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </button>
                                <button
                                    type="button"
                                    className="transition ease-out duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium"
                                >
                                    <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                    <span className="font-montserrat text-sm">Commencer la diffusion</span>

                                </button>
                            </div>
                        </div>


                        <div className="flex flex-row h-full w-full mt-5  ">
                            <div className="flex w-3/5 h-full bg-green-700">

                            </div>
                            <div className="flex flex-col w-1/5 h-full">
                                <div className="h-1/5 w-full bg-yellow-400">

                                </div>
                                <div className="h-1/5 w-full bg-green-400">

                                </div>
                                <div className="h-1/5 w-full bg-black-400">

                                </div>
                                <div className="h-1/5 w-full bg-blue-400">

                                </div>
                                <div className="h-1/5 w-full bg-gray-700">

                                </div>

                            </div>
                            <div className="flex flex-col w-1/5 h-full">
                                <div className="flex flex-row h-12 items-center justify-between p-2 top-0">
                                    <div className="text-lg font-montserrat">
                                        Ingrédients
                                    </div>
                                    <div>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
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