import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Nav from "../components/nav"
import AddIbanButton from '../components/addIbanButton'
import { useContext, useState } from 'react'
import { UserContext } from '../utils/UserContext'
import IbanItem from '../components/ibanItem'
import TransactionItem from '../components/transactionItem'
import { makePayout } from '../Helpers/GraphQLFunctions'
import AlertSuccess from '../components/alert_success'




function Wallet() {
    const {user, setUser} = useContext(UserContext);
    const {withdrawIsLoading, setWithdrawIsLoading} = useState(false);


    const withdraw = async (event) => {
        event.preventDefault();
        setWithdrawIsLoading(true)
        return makePayout(user.id, 0.0, user.currency, user.default_iban).then((success) => {
            setWithdrawIsLoading(false)
            console.log(success)
        }).catch((e) => {
            setWithdrawIsLoading(false)
            console.log(e)
        })
    }


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
                                <AddIbanButton/>
                                <button onClick={withdraw} 
                                    type="button"
                                    className="transition ease-out duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium"
                                >
                                    <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                                    <span className="font-montserrat text-sm">Retirer</span>

                                </button>
                            </div>
                        </div>
                        <div className="flex flew-row h-36 w-full mt-5">
                            <div className="flex flex-col w-1/5 h-full space-x-3 items-center justify-center border-r border-gray-300">
                                <div className="text-lg font-montserrat font-medium">
                                    Votre solde
                                </div>
                                <div className="text-4xl font-montserrat font-medium">
                                    { user? user.balance.current_balance + " "+ user.balance.currency: 0}
                                </div>
                            </div>
                            <div className="flex flex-col w-3/5 px-16 justify-center h-full text-justify">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                        </div>



                        <div className="flex flex-row h-10 mt-5 border-b border-gray-200">
                            <h2 className="text-lg font-montserrat font-medium">Mes ibans</h2>
                        </div>
                        <div className="flex flex-col h-60 overflow-auto w-full mt-2">
                            {
                                user ? user.ibans.map((iban) => {
                                    return <IbanItem key={iban.id} iban={iban}></IbanItem>
                                }): null
                            }
                        </div>
                        <div className="flex flex-row h-10 mt-5 border-b border-gray-200">
                            <h2 className="text-lg font-montserrat font-medium">Transactions</h2>
                        </div>

                        <div className="flex flex-col h-60 overflow-auto w-full mt-2">
                            {
                                user.transactions.length > 0 ? user.transactions.map((transction) => {
                                    return <TransactionItem key={transction.id} transction={transction}></TransactionItem>
                                }): <p>Vous n'avez aucune transaction</p>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}



export default Wallet