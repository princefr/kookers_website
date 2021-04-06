import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Nav from "../components/nav"
import AddIbanButton from '../components/addIbanButton'
import { AuthAction,  withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import BalanceItem from '../components/wallet/BalanceItem'
import IbanList from '../components/wallet/IbansList'
import TransactionList from '../components/wallet/TransactionList'
import WithdrawButton from '../components/buttons/WithdrawButton'




function Wallet({auth_id}) {


    return (
        <div style={styles}>
            <Head>
                <title>Mon portefeuille</title>
            </Head>
            <main>
                <div className="flex flex-col w-screen">
            
                    <Nav />
                    <div className="flex flex-col p-24 container container px-1 mx-auto">
                        <div className=" flex flex-row border-b border-1 border-gray-100 justify-between b-3 pb-2">
                            <div className="text-3xl font-montserrat font-semibold">
                                Portefeuille
                            </div>
                            <div className="flex flex-row space-x-4">
                                <AddIbanButton  firebaseUid={auth_id}/>
                                <WithdrawButton firebaseUid={auth_id}></WithdrawButton>
                            </div>
                        </div>
                        <BalanceItem firebaseUid={auth_id}></BalanceItem>
                        



                        <div className="flex flex-row h-10 mt-5 border-b border-gray-200">
                            <h2 className="text-lg font-montserrat font-medium">Mes ibans</h2>
                        </div>
                        <IbanList firebaseUid={auth_id}></IbanList>
                        <div className="flex flex-row h-10 mt-5 border-b border-gray-200">
                            <h2 className="text-lg font-montserrat font-medium">Transactions</h2>
                        </div>

                        <TransactionList firebaseUid={auth_id}></TransactionList>
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



export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN})(Wallet)
