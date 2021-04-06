// import client from '../../Helpers/GraphQLClient';
// import { gql } from '@apollo/client';
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { useContext, useState } from "react";
import PaymentAskConfirmation from '../../components/payment_confirmation_panel'
import Nav from '../../components/nav'
import { AuthAction, withAuthUser } from 'next-firebase-auth';
import { DataInPageContext } from '../../utils/DataInPageContext';
import ResaItem from '../../components/resaItem';
import { useQuery } from '@apollo/client';
import { GET_RESA_FOR_COURSE } from '../../graphql/courses/GetFunctions';



function Course() {
    const {pageData, } = useContext(DataInPageContext)
    const [showAskConfirmPanel, setshowAskConfirmPanel] = useState(false);
    const [resa, setResa] = useState()
    const [exit, setExit] = useState(false)

    const toggleAskConfirmPanel = (resaID) => {
        setResa(resaID)
        setshowAskConfirmPanel(!showAskConfirmPanel);
    }


    const handleCloseConfirmation = () => {
        setExit(true)
        setTimeout(() => {
            setshowAskConfirmPanel(!showAskConfirmPanel);
            setExit(false)
        }, 400)
    }


    const { loading, error, data} =  useQuery(GET_RESA_FOR_COURSE, {
        variables : {
            courseId: pageData._id
        }
    })

 




    return (
        <div style={styles}>
            <Head>
                <title>Tableau de bord</title>
            </Head>
            <main>
                <div className="flex flex-col flex-auto w-screen">
                    {
                        showAskConfirmPanel ? <PaymentAskConfirmation exit={exit} toggleAskConfirmPanel={handleCloseConfirmation} courseId={pageData._id} resa_id={resa} sellerId={pageData.userId}></PaymentAskConfirmation> : null
                    }
                    <Nav/>

                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-1 py-24 mx-auto">
                            <div className="lg:w-5/5 mx-auto flex flex-wrap">
                                <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src={pageData?pageData.photoUrl : null} />
                                <div className="lg:w-1/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Poulet au cumin</h1>
                                    <div className="bg-red-500 w-24  text-center text-white text-sm font-montserrat">Difficile</div>
                                    <div className="flex mb-4">
                                        <span className="flex items-center space-x-1">
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <span className="text-gray-600 ml-3">4 Reviews</span>
                                        </span>
                                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                            <a className="text-gray-500">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="text-gray-500">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="text-gray-500">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                    <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                                    </div>
                                </div>

                                <div className="lg:w-1/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 border-l-1 border-gray-500">
                                    <div className="flex flex-col sm:flex-row mt-10">
                                        <div className="text-center sm:pr-2 sm:py-2 items-center">
                                            <div className="bg-yellow-500 p0.5 w-36 mx-auto text-white text-sm font-montserrat">Instructeur</div>
                                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mt-6 ring-1 ring-red-400 hover:ring-red-600">
                                                <img src={pageData.poster.photoUrl} className="w-20 h-20 object-contain rounded-full ring-1 ring-black"></img>
                                            </div>
                                            <div className="flex flex-col items-center text-center justify-center">
                                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{pageData.poster.first_name} {pageData.poster.last_name}</h2>
                                                <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                                                <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="container px-1 py-2 mx-auto">
                        <div className="flex flex-col">
                                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Date
                                                            </th>
                                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                L'heure
                                                            </th>
                                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Durée
                                                            </th>
                                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Participants
                                                            </th>
                                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Status
                                                            </th>
                                                            <th scope="col" className="relative px-4 py-3">
                                                                <span className="sr-only">Acheter</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                            {
                                                                data? data.loadResaForAcourse.map((_resa) => {
                                                                    return <ResaItem resa= {_resa} toggleAskConfirmPanel={toggleAskConfirmPanel} key={_resa._id}></ResaItem>
                                                                }) : null
                                                            }
                                                        

                                                        {/* <!-- More items... --> */}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}





export default withAuthUser({ whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN})(Course)