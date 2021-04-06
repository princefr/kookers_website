import { useContext, useState } from "react"
import { setDefaultCard } from "../Helpers/GraphQLFunctions";
import { UserContext } from "../utils/UserContext"
import RemoveCardButton from "./buttons/RemoveCardButton";
import CardLogo from "./CardLogo";



function CardItem({card, refetch}){

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
            <RemoveCardButton card={card} refetch={refetch}></RemoveCardButton>
        </div>
    </div>
    )
}


export default CardItem