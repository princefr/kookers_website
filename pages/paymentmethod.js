import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Nav from "../components/nav"
import AddCardButton from "../components/addCardButton"
import CardItem from '../components/CardItem'
import { GET_CARDS } from '../graphql/paymentmethod/GetFunction'
import { useQuery } from '@apollo/client'
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'



function PaymentMethod({auth_id}) {
    const { loading, error, data, refetch} = useQuery(GET_CARDS, {
        variables: {
            firebaseUid: auth_id
        }
    })



    return (
        <div style={styles}>
            <Head>
                <title>Mes méthodes de paiements</title>
            </Head>
            <main>
                <div className="flex flex-col w-screen">
                    <Nav />
                    <div className="flex flex-col p-24 container px-1 mx-auto">
                        <div className=" flex flex-row border-b border-1 border-gray-100 justify-between pb-3">
                            <div className="text-3xl font-montserrat font-semibold">
                                Méthodes de paiements
                            </div>
                            <div>
                                <AddCardButton refetch={refetch} firebaseUid={auth_id}/>
                            </div>
                        </div>


                        {(() => {
                            if(loading) return <div>loading</div>
                            if(error) return <div>{error.message}</div>
                            return <div className="flex flex-col space-y-4">
                            {
                                data.loadCartList.map((card) => {
                                    return <CardItem card={card} key={card.id} refetch={refetch}></CardItem>
                                })
                            }
                            </div>
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
            auth_id: AuthUser.id
        }
      }
  })



export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN})(PaymentMethod)

