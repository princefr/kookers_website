import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Nav from "../components/nav"
import Chip from '../components/chips'
import OrderItem from '../components/orderitem'
// import Link from 'next/link'
import { useContext} from 'react'

import { DataInBuyerContext } from '../utils/DataInBuyerContext'
import { useRouter } from 'next/router'
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import { useQuery } from '@apollo/client'
import { GET_ORDERS } from '../graphql/orders/GetFunctions'


function Orders({firebaseUid}) {
    const {pageBuyer, setPageBuyer} = useContext(DataInBuyerContext)
    const router = useRouter()

    const { loading, error, data} = useQuery(GET_ORDERS, {
        variables: {
            firebaseUid: firebaseUid
        }
    })

    


    const navigateToChild = (order) => {
        setPageBuyer(order)
        router.push("/orders/" + order._id)
    }
    return (
        <div style={styles}>
            <Head>
                <title>Mes ventes</title>
            </Head>
            <main>
                <div className="flex flex-col w-screen">
                    <Nav></Nav>
                    <div className="flex flex-col p-24 container container px-1 mx-auto">
                        <div className="text-3xl font-montserrat font-semibold border-b border-1 border-gray-100">Achats</div>
                        <div className="flex flex-row mt-4 justify-between items-center">
                            <div className="flex flex-row space-x-24 items-center">
                                <div className="relative text-gray-600">
                                    <input type="search" name="serch" placeholder="Rechercher...." className="bg-gray-200 h-10 px-5 pr-10 text-sm focus:outline-none w-64 font-montserrat" />
                                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </div>

                                <div className="space-x-4">
                                    <Chip />
                                    <Chip />
                                    <Chip />
                                </div>
                            </div>

                            <div className="flew flex-row space-x-3 items-center">
                                <div className="text-sm font-montserrat">Trier par: </div>
                            </div>
                        </div>
                        {(() => {
                            if(loading) return <p>...loading</p>
                            if(error) return <p>{error.message}</p>
                            data.getResaBuyerOrders.map((order) => {
                                return <a key={order._id} onClick={(() => navigateToChild(order))}>
                                <OrderItem key={order._id} order={order}/>
                            </a>
                            })
                        })()}

                        

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
            firebaseUid: AuthUser.id
        }
      }
  })


export default withAuthUser({whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN, whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(Orders)
