import gql from "graphql-tag";



export const ADD_METHOD_TO_USER = gql`
    mutation AddattachPaymentToCustomer($firebaseUid: String!, $methode_id: String!){
        addattachPaymentToCustomer(firebaseUid: $firebaseUid, methode_id: $methode_id){
        id,
        object
        }
    }
`


export const DELETE_CARD = gql`
    mutation RemovePaymentMethod($method_id: String){
        removePaymentMethod(method_id: $method_id)
    }

`



// export const CARD_AS_DEFAULT = gql`

// `




