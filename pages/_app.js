import '../styles/globals.css'
import { useEffect, useState, useMemo} from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../Helpers/Gtag'
import initAuth from '../utils/initAuth'
import {UserContext} from '../utils/UserContext'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { DataInPageContext } from '../utils/DataInPageContext'
import { DataInBuyerContext } from '../utils/DataInBuyerContext'
import { DataInSeellerContext } from '../utils/DataInSellerContext'
import { ApolloProvider } from '@apollo/client'
import client from '../Helpers/GraphQLClient'
import firebase from 'firebase/app'
import 'firebase/auth'
import { loadUser } from '../Helpers/GraphQLFunctions'
import NotificationProvider from '../components/notification/NotificationContext'

initAuth()
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (_user) => {
      if (_user) {
        const {data} = await loadUser(_user.uid)
        setUser(data.usersExist)
        }
    });
  }, [])

  const router = useRouter()

  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  const [pageData, setPageData] = useState(null);
  const dataInPageProviderValue = useMemo(() => ({pageData, setPageData}), [pageData, setPageData])


  const [pageSeller, setPageSeller] = useState(null);
  const dataInSellerProviderValue = useMemo(() => ({pageSeller, setPageSeller}), [pageSeller, setPageSeller])

  const [pageBuyer, setPageBuyer] = useState(null);
  const dataInBuyerProviderValue = useMemo(() => ({pageBuyer, setPageBuyer}), [pageBuyer, setPageBuyer])

  useEffect(() => { 
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])




  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={providerValue}>
        <NotificationProvider>
          <DataInPageContext.Provider value={dataInPageProviderValue}>
            <DataInBuyerContext.Provider value={dataInBuyerProviderValue}>
              <DataInSeellerContext.Provider value={dataInSellerProviderValue}>
              <Elements stripe={stripePromise}>
                <Component {...pageProps} />
              </Elements>
              </DataInSeellerContext.Provider>
            </DataInBuyerContext.Provider>
          </DataInPageContext.Provider>
        </NotificationProvider>

        
    </UserContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp
