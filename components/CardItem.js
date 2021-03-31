import { useContext, useEffect, useState } from "react"
import { setDefaultCard } from "../Helpers/GraphQLFunctions";
import { UserContext } from "../utils/UserContext"
import CardLogo from "./CardLogo";



function CardItem({card}){

    // id
    // brand
    // country
    // customer
    // cvc_check
    // exp_month
    // exp_year
    // fingerprint
    // funding
    // last4

    const {user, } = useContext(UserContext)
    const [isDefault, setIsDefault] = useState(false)

    useEffect(() => {
        user.all_cards.forEach((eachCard) => {
            if(eachCard.id == user.default_source){
                setIsDefault(true)
            }
        })
    }, []);

    const setDefault = async (event) => {
        event.preventDefault();
        if(card.id == user.default_source){
            // the card is already in default mode
            return;
        }
        setDefaultCard(card.id, user.id).then((saved) => {
                console.log("ok saved", saved)
        }).catch((err) => {
            console.log("there is an error", err)
        })
    }

    const deleteCard = async (event) => {
        event.preventDefault();
        if(user.all_cards.length == 1){
            console.log("you cannot delete it")
        }else{
            console.log("you can delete this card")
        }
    }
    return (
      <div className="flex flex-row h-12 w-full mt-1  justify-between">
        <div className="flex flex-row w-3/5 h-full  items-center">
            <div className="h-10 w-10">
                <CardLogo logoName={card.brand}></CardLogo>
            </div>
            <div className="flex flex-col pl-7">
                <div className="text-xl font-light font-montserrat ml-5">**** **** **** {card.last4}</div>
                <div className="ml-5 text-xs font-light font-montserrat">Expire le {card.exp_month} {card.exp_year}</div>
            </div>
        </div>
        <div className="flex flex-row h-full items-center justify-end  w-2/5 space-x-5">
            <button onClick={setDefault} className="flex flex-row items-center font-montserrat text-xs font-semibold bg-green-200  text-green-700 p-2 rounded-full focus:outline-none">
                défault
                {
                    isDefault? <svg className="w-4 h-4 ml-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    : null
                }
            </button>
            <button onClick={deleteCard}>
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
        </div>
    </div>
    )
}


export default CardItem