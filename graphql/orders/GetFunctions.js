import gql from "graphql-tag";




export const GET_ORDERS = gql`
    query GetResaBuyerOrders($firebaseUid: String!){
        getResaBuyerOrders(firebaseUid: $firebaseUid){
            _id
            quantity
            status
            paiementId
            createdAt
            updatedAt
            resa {
                _id
            }
            course {
                _id
                photoUrl
            }
        }

    }
`