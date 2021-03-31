import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Nav from "../components/nav"
import AddCardButton from "../components/addCardButton"
import CardItem from '../components/CardItem'
import { useContext } from 'react'
import { UserContext } from '../utils/UserContext'



function PaymentMethod() {
    const {user, } = useContext(UserContext)

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
                                <AddCardButton/>
                            </div>
                        </div>

                        {
                            user ? user.all_cards.map((card) => {
                                return <CardItem card={card} key={card.id}></CardItem>
                            }): null
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}



export default PaymentMethod