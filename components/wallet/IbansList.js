import { useQuery } from "@apollo/client"
import { GET_IBANS } from "../../graphql/wallet/GetFunctions"
import IbanItem from "../ibanItem";





const IbanList = ({ firebaseUid }) => {
    const { loading, error, data, refetch } = useQuery(GET_IBANS, {
        variables: {
            accountId: firebaseUid
        }
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="flex flex-col h-60 overflow-auto w-full mt-2">
            {
                data.listExternalAccount.map((iban) => {
                    return <IbanItem key={iban.id} iban={iban} firebaseUid={firebaseUid} refetch={refetch}></IbanItem>
                })
            }
        </div>
    )
}



export default IbanList