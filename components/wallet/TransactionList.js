import { useQuery } from "@apollo/client"
import { GET_BALANCE_TRANSACTIONS } from "../../graphql/wallet/GetFunctions"
import TransactionItem from "../transactionItem";



const TransactionList = ({ firebaseUid }) => {
    const { loading, error, data } = useQuery(GET_BALANCE_TRANSACTIONS, {
        variables: {
            accountId: firebaseUid
        }
    })


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="flex flex-col h-60 overflow-auto w-full mt-2">
            {
                data.getBalanceTransaction.length > 0 ? data.getBalanceTransaction.map((transction) => {
                    return <TransactionItem key={transction.id} transction={transction}></TransactionItem>
                }) : <p>Vous n'avez aucune transaction</p>
            }
        </div>
    )
}



export default TransactionList