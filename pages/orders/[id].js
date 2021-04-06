import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Nav from "../../components/nav"
import { useContext } from 'react'
import { DataInBuyerContext } from '../../utils/DataInBuyerContext'
import CancelOrderButton from '../../components/buttons/CancelOrderButton'
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
// import Chip from '../../components/chips'


function Order() {
    const {pageBuyer, setPageBuyer} = useContext(DataInBuyerContext)

    return (
        <div style={styles}>
            <Head>
                <title>Mes ventes</title>
            </Head>

            <main>
                <div className="flex flex-col w-screen">
                    <Nav></Nav>
                    <div>
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-1 py-24 mx-auto">
                            <div className="lg:w-5/5 mx-auto flex flex-wrap">
                                <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src={pageBuyer? pageBuyer.course.photoUrl : null} />
                                <div className="lg:w-1/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Poulet au cumin</h1>
                                    <div className="bg-red-500 w-24  text-center text-white text-sm font-montserrat">Difficile</div>
                                    <div className="flex mb-4">
                                        <span className="flex items-center space-x-0.5">
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <span className="text-gray-600 ml-3">4 Reviews</span>
                                        </span>
                                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
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
                                    <div className="flex items-center justify-between space-x-3">
                                        <div className="flex items-center space-x-3">
                                            <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                            <div className="rounded-full bg-green-400 h-8 w-8">
                                                <svg className="w-6 h-6 mx-1 my-1 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                        </div>
                                        <CancelOrderButton order={pageBuyer}></CancelOrderButton>
                                    </div>
                                </div>

                                <div className="lg:w-1/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 border-l-1 border-gray-500">
                                    <div className="flex flex-col sm:flex-row mt-10">
                                        <div className="text-center sm:pr-2 sm:py-2 items-center">
                                            <div className="bg-yellow-500 p0.5 w-36 mx-auto text-white text-sm font-montserrat">Instructeur</div>
                                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mt-6 ring-1 ring-red-400 hover:ring-red-600">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col items-center text-center justify-center">
                                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
                                                <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                                                <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                                            </div>
                                            <div className="flex-row -space-x-2 mt-5 inline-flex">
                                                <div className="rounded-full h-8 w-8 ring-2 bg-black ring-blue-200"></div>
                                                <div className="rounded-full h-8 w-8 ring-2 bg-black ring-blue-200"></div>
                                                <div className="rounded-full h-8 w-8 ring-2 bg-black ring-blue-200"></div>
                                            </div>

                                            <div className="p-0.5 w-56 mx-auto mt-6">
                                                <button  className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 font-montserrat">Rejoindre le salon</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="container px-1 py-2 mx-auto">
                            that's the new one
                        </div>
                    </section>
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
      return {
        props: {
            auth_id: AuthUser.id
        }
      }
  })



export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN})(Order)



