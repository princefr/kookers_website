import styles from '../styles/Home.module.css'
import React, { useState, useCallback, useMemo, useContext, useEffect } from "react";
import Head from 'next/head'
import Nav from "../components/nav"
import DatePicker, { registerLocale} from "react-datepicker";
import fr from 'date-fns/locale/fr';
import "react-datepicker/dist/react-datepicker.css";
import { useDropzone } from 'react-dropzone'
import { IngredientsContext } from '../utils/IngredientsContext'
import AddIngredientsComponents from '../components/AddIngredientsComponent';
import { FoodPreferencesContext } from '../utils/FoodPreferencesContext';
import ChipFoodPref from '../components/ChipFoodPref'
import ChipCuisinePref from '../components/ChipCuisinePref';
import { CuisinePreferencesContext } from '../utils/CuisinPreferencesContext';
import DifficultyComponent from '../components/DifficultyComponent';
import PlateTypeComponent from '../components/PlateTypeComponent';

import firebase from 'firebase/app'
import "firebase/storage"

import { UserContext } from '../utils/UserContext';
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import * as firebaseAdmin from "firebase-admin";
import { createNewCourse } from '../Helpers/GraphQLFunctions';
import { ToastContainer, toast} from 'react-toastify';
import uuid from 'react-uuid'
import { useRouter } from 'next/router';
import FirebaseClient from "../Helpers/firebase"
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../Helpers/GraphQlAddQueries';



registerLocale('fr', fr)

function Publish({userCookie}) {
    FirebaseClient()
    const router = useRouter()
    const storage = firebase.app().storage("gs://kookers-4e54e.appspot.com");
    const [startDate, setStartDate] = useState(new Date());


    const [useIngredients, setIngredients] = useState([]);
    const ingredientsValue = useMemo(() => ({ useIngredients, setIngredients }), [useIngredients, setIngredients])

    // 'Végétarien',
    // 'Vegan',
    // 'Sans gluten',
    // 'Hallal',
    // 'Adapté aux allergies alimentaires',
    // 'Cacherout'
    const [usePreferences, setPreferences] = useState([{name: "Végétarien", isActive: false}, {name: "Vegan", isActive: false}, {name: "Sans gluten",
     isActive: false}, {name: "Hallal", isActive: false}, {name: "Adapté aux allergies alimentaires", isActive: false}, {name: "Cacherout", isActive: false}])
    const foodPreferencesValue = useMemo(() => ({usePreferences, setPreferences}), [usePreferences, setPreferences])




    // cuisine type
    // Française
    // Indienne
    // thailandais
    // orientale
    // japonnaise
    // Amerique latine
    // Italienne
    // Americaince(burger etc)
    const [usecuisinePreferences, setcuisinePreferences] = useState([{name: "Française", isActive: false}, {name: "Indienne", isActive: false}, {name: "Thai",
     isActive: false}, {name: "Orientale", isActive: false}, {name: "Japonnaise", isActive: false}, {name: "Amérique latine", isActive: false}, {name: "Italienne", isActive: false}, {name: "Américaine (burger)", isActive: false}])
    const cuisinePreferencesValue = useMemo(() => ({usecuisinePreferences, setcuisinePreferences}), [usecuisinePreferences, setcuisinePreferences])

    const [useName, setName] = useState("")
    const [useDescription, setDescription] = useState("")
    const [difficulty, setDifficylty] = useState(0)
    const [plateType, setPlateType] = useState(0)
    const [courseDuration, setcourseDuration] = useState("")
    const [pricePerPerson, setpricePerPerson] = useState("")
    const [fee, setFee] = useState(0)
    const [displayImage, setDisplayImage] = useState("")
    const [brutFile, setBrutFile] = useState("")


    useEffect(() => {
        setFee(pricePerPerson - percentage(5, pricePerPerson)) 
    }, [pricePerPerson])


    const handlePrice = (e) => {
        setpricePerPerson(e)

        
    }

    const  percentage = (percent, total) => {
        const _fee = ((percent/ 100) * total).toFixed(2)
       return _fee
     }


     const [AddPost, {data, loading, error}] = useMutation(ADD_POST)



    const handlePublishPost = async (event) => {
        event.preventDefault();
        const ref = "cours/image" + uuid() + ".jpg"

        var metadata = {
            contentType: 'image/jpeg',
          };
        
        
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
              const binaryStr = reader.result
              storage.ref(ref).put(binaryStr, metadata).then(async () => {
               const url = await storage.ref(ref).getDownloadURL().catch(err => {throw err})
               const _cuisine_pref = usecuisinePreferences.filter((e) => e.isActive == true).map((e) => e.name)
               const _food_preferences = usePreferences.filter((e) => e.isActive == true).map(e => e.name)
               AddPost({
                   variables : {
                    course: {
                        name: useName,
                        price: pricePerPerson,
                        photoUrl: url,
                        duration : courseDuration,
                        description: useDescription,
                        ingredients: useIngredients,
                        plate_type: plateType,
                        cuisine_provenance: _cuisine_pref,
                        food_preferences: _food_preferences,
                        userId: "603f61214859eac52816f6f3",
                        difficulty: difficulty
                    },
                    resa : {
                        duedate: startDate.toISOString(),
                    }
                   }
               }).then(() => {
                    router.push("/dashboard")
               })
               
              }).catch(() => {
                toast.error("Une erreur s'est produite veuillez reessayer");
              })
              
            }
        reader.readAsArrayBuffer(brutFile)
        

    }



    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        setBrutFile(file)
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
              const binaryStr = reader.result
              setDisplayImage(binaryStr)
            }
        reader.readAsDataURL(file)
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div style={styles}>
            <Head>
                <title>Publier un cours</title>
            </Head>
            <main>
                <div className="flex flex-col w-screen">
                    <Nav></Nav>
                    <div className="flex flex-col p-24 container px-1 mx-auto">
                        <div className="text-3xl font-montserrat font-semibold border-b border-1 border-gray-100 pb-2">Publier un cours</div>
                        <div className="flex flex-row space-x-4 mt-4">

                        <div className="flex flex-col h-full w-1/2 rounded space-y-3 items-end">
                                <div className="flex flex-row w-full font-montserrat text-m justify-between items-center">
                                    <div>Image du plat {!displayImage.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}</div>
                                    {
                                        !displayImage.length ? null: <button onClick={(() => setDisplayImage(""))}>
                                        <svg  className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                    }
                                </div>
                                <div className="flex flex-col h-96 w-full items-center justify-center bg-gray-300" {...getRootProps()}>
                                    {
                                        !displayImage.length ? <div className="flex flex-col h-full w-full items-center justify-center">
                                            <input className=" bg-gray-300" {...getInputProps()} />
                                            <div className="flex flex-col items-center justify-center space-y-4">
                                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                                <p>Drop the file here ...</p>
                                            </div>
                                        </div> : 
                                            <div className="flex flex-wrap w-full h-96">
                                                <img className="object-cover w-full h-96" src={displayImage}></img>
                                            </div>
                                    }
                                    
                                </div>



                            </div>

                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-col w-full">
                                    <div className="font-montserrat text-m">Nom du plat {!useName.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}</div>
                                    <input value={useName} onChange={((e) => setName(e.target.value))} placeholder="Nom du plat" className="bg-gray-200 h-10 mt-2 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-full  font-montserrat"></input>
                                </div>

                                <div className="flex flex-col w-full mt-5">
                                    <div className="font-montserrat text-m">Description {!useDescription.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}</div>
                                    <textarea value={useDescription} rows="5" onChange={((e) => setDescription(e.target.value))} placeholder="Description" className="bg-gray-200 h-10 mt-2 py-3 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-full  font-montserrat"></textarea>
                                </div>

                                <div className="flex flex-col w-full mt-5">
                                    <div className="font-montserrat text-m">Type de cuisine {!usecuisinePreferences.filter(e => e.isActive).length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}</div>
                                    <div className="flex flex-wrap  mt-2 items-start justify-start space-x-2">
                                        <CuisinePreferencesContext.Provider value={cuisinePreferencesValue}>
                                            {
                                                usecuisinePreferences.map((cuisinepref) => {
                                                    return <ChipCuisinePref cuisinePref={cuisinepref} key={cuisinepref.name}></ChipCuisinePref>
                                                })
                                            }
                                        </CuisinePreferencesContext.Provider>
                                        


                                    </div>
                                </div>

                                <div className="flex flex-col w-full mt-5">
                                    <div className="font-montserrat text-m">Type de plat</div>
                                    <PlateTypeComponent plateValue={plateType} setPlate={setPlateType}></PlateTypeComponent>
                                </div>

                                <div className="flex flex-col w-full mt-5">
                                    <div className="font-montserrat text-m">Préférences alimentaires</div>
                                    <FoodPreferencesContext.Provider value={foodPreferencesValue}>
                                    <div className="flex flex-wrap  mt-2 items-start justify-start space-x-2">
                                        {
                                            usePreferences.map((foodPref) => {
                                            return <ChipFoodPref foodPref={foodPref} key={foodPref.name}></ChipFoodPref>  
                                            })  
                                        }
                                        

                                    </div>
                                    </FoodPreferencesContext.Provider>
                                </div>

                                <div className="flex flex-col w-full mt-5">
                                    <div className="font-montserrat text-m">Difficulté</div>
                                    <DifficultyComponent difficultyValue={difficulty} setDifficulty={setDifficylty}></DifficultyComponent>
                                </div>

                                

                                <div className="flex flex-col w-full mt-5">
                                    <div className="font-montserrat text-m">Date et heure</div>
                                    <div className="relative text-gray-600 bg-gray-200 w-full">
                                        <DatePicker selected={startDate} showTimeSelect dateFormat="MMMM d, yyyy h:mm" onChange={date => setStartDate(date)} className="bg-gray-200 h-10 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-96 font-montserrat" />
                                        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="text-xs font-montserrat font-extralight mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </div>


                                <div className="flex flex-col w-full mt-5">
                                    <div className="font-montserrat text-m">Durée du cours {!courseDuration.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}</div>
                                    <div className="relative text-gray-600 ">
                                        <input value={courseDuration} onChange={((e) => setcourseDuration(e.target.value))} placeholder="Durée du cours" className="bg-gray-200 h-10 mt-2 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-full  font-montserrat"></input>
                                        <div className="absolute right-0 top-2 mt-2 mr-4 text-sm font-montserrat">
                                            Minutes
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col w-full mt-5">
                                    <div className="font-montserrat text-m">Prix par personne {!pricePerPerson.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}</div>
                                    <input value={pricePerPerson} type="number" onChange= {((e) => handlePrice(e.target.value))} placeholder="Prix par personne" className="bg-gray-200 h-10 mt-2 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-full  font-montserrat"></input>
                                </div>
                                <div className="flex flex-row flex-wrap w-full mt-5 space-x-2 items-center justify-between">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <div className="text-sm font-montserrat flex-wrap">
                                        Ce que vous recevrez apres l'application de nos frais d'application
                                    </div>
                                    <div>
                                        {fee} €
                                    </div>
                                </div>

                                <IngredientsContext.Provider value={ingredientsValue}>
                                        <AddIngredientsComponents></AddIngredientsComponents>
                                </IngredientsContext.Provider>

                                <div className="mt-10 flex flew-row justify-end">
                                <button disabled={!courseDuration.length || !displayImage.length || !useName.length || !useDescription.length || !usecuisinePreferences.filter(e => e.isActive).length || !pricePerPerson.length || !useIngredients.length} 
                                onClick={handlePublishPost} className="text-sm w-60 flex-wrap  flex justify-center space-x-4  py-2 focus:outline-none focus:shadow-outline  hover:bg-gray-800 bg-black text-white  items-center font-medium disabled:opacity-40">
                                    {
                                      loading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg> : null
                                            }
                                    Publier le plat
                                </button>
                                
                                </div>

                            </div>


                        </div>
                    </div>
                    
                </div>
                <ToastContainer></ToastContainer>

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


export default withAuthUser({whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN, whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(Publish)