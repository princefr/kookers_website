import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Nav from "../components/nav"
import React, {  useContext} from "react";
import { UserContext } from '../utils/UserContext';





function Settings() {
    const {user, } = useContext(UserContext)


    
    return (
        <div style={styles}>
            <Head>
                <title>Mes paramètres</title>
            </Head>
            <main>
                <div className="flex flex-col w-screen">
                    <Nav></Nav>
                    <div className="flex flex-col p-24 container container px-1 mx-auto">
                        <div className="text-3xl font-montserrat font-semibold border-b border-1 border-gray-100 pb-2">Paramètres</div>
                        <div className="flex flex-row mt-10 h-36 w-full items-center justify-center">
                            <img src={user.photoUrl}
                                className="h-36 w-36 object-cover group-hover:shadow group-focus:shadow  rounded-full"
                                
                                alt="Avatar of Tailwind CSS Design"
                            />
                        </div>
                        <div className="flex flex-row mt-4 items-center w-full justify-center text-lg font-montserrat">
                            Prince ONDONDA
                        </div>

                        <div className="flex flex-row items-center w-full justify-center text-lg font-montserrat">
                            <div className="flex flex-row px-4 py-1 bg-gray-300 rounded items-center space-x-1">
                                <dt className="text-yellow-400">
                                    <svg className="w-4 h-4" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                </dt>
                                <dd className=" m-auto text-base font-montserrat">4.7 (200)</dd>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    )
}



export default Settings