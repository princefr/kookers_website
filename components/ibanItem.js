import { useContext, useEffect, useState } from "react"
import { UserContext } from "../utils/UserContext"


function IbanItem({iban}){
    // id
    // object
    // account_holder_name
    // account_holder_type
    // bank_name
    // country
    // currency
    // last4
    
    const {user, setUser}  = useContext(UserContext)
    const [isDefault, setIsDefault] = useState(false)

    useEffect(() => {
        console.log(iban.id)
        console.log(user.default_iban)
        if(iban.id === user.default_iban){
            setIsDefault(true)
        }else{
            setIsDefault(false)
        }
    }, [])

    return (
        <div className="flex flex-row h-12 w-full mt-1  justify-between">
            <div className="flex flex-row w-3/5 h-full  items-center">
                <div className="h-10 w-10 bg-blue-700 ml-5"></div>
                <div className="flex flex-col items-center">
                    <div className="text-xl font-light font-montserrat ml-5">**** **** **** {iban? iban.last4: "****"}</div>
                </div>
            </div>
            <div className="flex flex-row h-full items-center justify-end  w-2/5 space-x-5">
                <button className="flex flex-row items-center font-montserrat text-xs font-semibold bg-gray-300  text-gray-700 p-2 rounded-full focus:outline-none">
                    défault
                    {
                        isDefault? <svg className="w-4 h-4 ml-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        : null
                    }
                </button>
                <button>
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            </div>
    </div>
    )
}



export default IbanItem