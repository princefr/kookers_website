
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Courses from './courses/courses'
import Nav from "../components/nav"

import {loadUser, loadCourseHome} from '../Helpers/GraphQLFunctions'

import * as firebaseAdmin from "firebase-admin";



import {
    AuthAction,
    withAuthUser,
    withAuthUserTokenSSR
  } from 'next-firebase-auth'

import React, { useState} from "react"
import HomeChipFoodPref from '../components/HomeFoodPref'
import nookies from 'nookies'



  // https://tailblocks.cc/
  // https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular


function Dashboard({kookerUser}) {
    

  

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

    return (<div style={styles}>
        <Head>
            <title>Tableau de bord</title>
        </Head>
        <main>
            <div className="flex flex-col w-screen dark:bg-black">
                <Nav />
                <div className="flex flex-col p-24 container px-1 mx-auto">

                    <div className="space-x-12 flex flex-row border-b border-1 p-2">
                        <div className="space-x-5 flex flex-row items-center justify-center">
                            <div className="pr-2 text-xs font-montserrat text-center items-center justify-center">Type de cuisine:</div>
                            <div className="items-center">
                              {
                                  usecuisinePreferences.map((_pref) => {
                                  return  <HomeChipFoodPref foodPref={_pref} handleClick={handleClickCuisine} key={_pref.name}></HomeChipFoodPref>
                                  })
                                }       
                            </div>
                        </div>

                        <div className="space-x-5 flex flex-row items-center justify-center">
                            <div className="pr-2 text-xs font-montserrat text-center items-center">Préférences alimentaires:</div>
                            <div className="items-center">
                              {
                                usePreferences.map((_pref) => {
                                 return  <HomeChipFoodPref foodPref={_pref} handleClick={handleClick} key={_pref.name}></HomeChipFoodPref>
                                })
                              }
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col mt-6">
                        <Courses></Courses>
                    </div>
                </div>
            </div>
        </main>
    </div>)
}



export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.RENDER,
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
  })(async ({AuthUser, req, res}) => {
    const user  = await firebaseAdmin.auth().getUser(AuthUser.id)
    const { data } = await loadUser(user.phoneNumber).catch((reason) => {
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

      nookies.set({req, res}, "auth", data.usersExist, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      return {
        props: {
            kookerUser: null
        }
      }
  })



export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN, whenUnauthed:AuthAction.REDIRECT_TO_LOGIN})(Dashboard)