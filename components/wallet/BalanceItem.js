import { useQuery } from "@apollo/client"
import { GET_BALANCE } from "../../graphql/wallet/GetFunctions"




const BalanceItem = ({firebaseUid}) => {
    const { loading, error, data } = useQuery(GET_BALANCE, {
        variables: {
            account_id: firebaseUid
        }
    })
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="flex flew-row h-36 w-full mt-5">
        <div className="flex flex-col w-1/5 h-full space-x-3 items-center justify-center border-r border-gray-300">
            <div className="text-lg font-montserrat font-medium">
                Votre solde
            </div>
            <div className="text-4xl font-montserrat font-medium">
                { data.accountbalance.current_balance + " " + data.accountbalance.currency}
            </div>
        </div>
        <div className="flex flex-col w-3/5 px-16 justify-center h-full text-justify">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
    </div>
    )
}



export default BalanceItem