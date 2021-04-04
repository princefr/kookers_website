import gql from "graphql-tag";






export const GET_CARDS = gql `
    query LoadCartList($firebaseUid: String!) {
        loadCartList(firebaseUid: $firebaseUid){
            id
            brand
            country
            customer
            cvc_check
            exp_month
            exp_year
            fingerprint
            funding
            last4
        }
    }
`


// export const GET_TRANSACTIONS = gql `
//     query GetBalanceTransaction($accountId: String){
//         getBalanceTransaction(accountId: $accountId) {

//         }
//     }

// `
