import { useMutation } from "@apollo/client"
import { WITHDRAW_MONEY } from "../../graphql/wallet/AddFunction"
import { useNotification } from "../notification/NotificationContext"



const WithdrawButton = ({firebaseUid}) => {

    const [DeleteIbanToUSer, {data, loading, error}] = useMutation(WITHDRAW_MONEY)
    const dispatch = useNotification()

    const handleWithDraw = (event) => {
        event.preventDefault()
        DeleteIbanToUSer({
            variables: {
                firebaseUid: firebaseUid
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Retrait d'argent",
                    message:"Votre retrait a été validée et est en cours d'acheminement."
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Retrait d'argent",
                    message: err.message
                }
            })
        })
    }

    return (
        <button onClick={handleWithDraw}
            type="button"
            className="transition ease-out duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium"
        >
            {
                loading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg> : <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            }
            <span className="font-montserrat text-sm">Retirer</span>

        </button>
    )
}


export default WithdrawButton