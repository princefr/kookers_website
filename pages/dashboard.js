
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Courses from './courses/courses'
import Nav from "../components/nav"

import {loadUser} from '../Helpers/GraphQLFunctions'

import * as firebaseAdmin from "firebase-admin";

import { useQuery } from '@apollo/client'


import {
    AuthAction,
    withAuthUser,
    withAuthUserTokenSSR
  } from 'next-firebase-auth'

import React, { useState} from "react"
import HomeChipFoodPref from '../components/HomeFoodPref'
import { GET_HOME_DATA } from '../graphql/dashboard/GetFunction'




  // https://tailblocks.cc/
  // https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular


function Dashboard({auth_id}) {
    const [usecuisinePreferences, setcuisinePreferences] = useState([{name: "Française", isActive: false}, {name: "Indienne", isActive: false}, {name: "Thai",
     isActive: false}, {name: "Orientale", isActive: false}, {name: "Japonnaise", isActive: false}, {name: "Amérique latine", isActive: false}, {name: "Italienne", isActive: false}, {name: "Américaine (burger)", isActive: false}])

     const [usePreferences, setPreferences] = useState([{name: "Végétarien", isActive: false}, {name: "Vegan", isActive: false}, {name: "Sans gluten",
     isActive: false}, {name: "Hallal", isActive: false}, {name: "Adapté aux allergies alimentaires", isActive: false}, {name: "Cacherout", isActive: false}])

    const handleClick = (foodPref) => {
        setPreferences(prevState => prevState.map((pref) => pref.name == foodPref.name ? {name: pref.name, isActive: !pref.isActive} : pref))
    }

  const handleClickCuisine = (foodPref) => {
    setcuisinePreferences(prevState => prevState.map((pref) => pref.name == foodPref.name ? {name: pref.name, isActive: !pref.isActive} : pref))
}

    const { loading, error, data } = useQuery(GET_HOME_DATA, {
      variables : {
          firebaseUid: auth_id,
      },
    })

    return (<div style={styles}>
        <Head>
            <title>Tableau de bord</title>
        </Head>
        <main>
            <div className="flex flex-col w-screen dark:bg-black">
                <Nav></Nav>
                <div className="flex flex-col p-24 container px-1 mx-auto">

                    <div className="relative flex flex-row border-b border-t border-1 p-2 items-center w-full">
                    <div className="flex flex-row border-gray-200 overflow-x-auto space-x-2">
                        <div className="space-x-5 flex flex-row items-center justify-start">
                            <div className="flex flex-row space-x-1 pr-1 text-xs font-montserrat text-center items-center justify-center">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                              <div>
                              Type de cuisine:
                              </div>
                            </div>
                            <div className="space-x-2">
                              {
                                  usecuisinePreferences.map((_pref) => {
                                  return  <HomeChipFoodPref foodPref={_pref} handleClick={handleClickCuisine} key={_pref.name}></HomeChipFoodPref>
                                  })
                                }       
                            </div>
                        </div>

                        <div className="space-x-5 flex flex-row items-center justify-start">
                          <div className="flex flex-row space-x-2 pr-2 text-xs font-montserrat text-center items-center justify-center">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                              <div>
                              Préférences alimentaires:
                              </div>
                            </div>
                            <div className="items-center flex-row space-x-2">
                              {
                                usePreferences.map((_pref) => {
                                 return  <HomeChipFoodPref foodPref={_pref} handleClick={handleClick} key={_pref.name}></HomeChipFoodPref>
                                })
                              }
                            </div>
                        </div>
                    </div>

                    <div className="absolute bg-green-100 bg-opacity-30 w-20 h-full flex  right-0 items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>                    </div>
                    </div>

                    <div className=" flex flex-col mt-6">
                        <Courses firebaseUid={auth_id} loading={loading} error={error} data={data}></Courses>
                    </div>
                </div>
            </div>
            
        </main>
        
    </div>)
}



export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.RENDER,
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
  })(async ({AuthUser}) => {
    await firebaseAdmin.auth().getUser(AuthUser.id)
    const { data } = await loadUser(AuthUser.id).catch((reason) => {
        console.log(reason)
      })

      if(data.usersExist == null){
          return {
            redirect: {
              permanent: false,
              destination: "/"
            }
          }
      }



      return {
        props: {
            auth_id: AuthUser.id
        }
      }
  })



export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN, whenUnauthed:AuthAction.REDIRECT_TO_LOGIN})(Dashboard)