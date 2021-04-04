
import gql from "graphql-tag";

export const ADD_IBAN = gql`
    mutation CreateBankAccountOnConnect($firebaseUid: String!, $account_number: String!){
        createBankAccountOnConnect(firebaseUid: $firebaseUid, account_number: $account_number){
            id
            object
            account_holder_name
            account_holder_type
            bank_name
            country
            currency
            last4
        }
    }

`

export const DELETE_IBAN = gql`
    mutation RemoveExternalAccount($firebaseUid: String!, $bankId: String!){
         deleteExternalAccount(firebaseUid: $firebaseUid, bankId: $bankId)
    }
`

// export const IBAN_AS_DEFAULT = gql`

// `


export const WITHDRAW_MONEY = gql`
    mutation MakePayout($firebaseUid: String!){
        makePayout(firebaseUid: $firebaseUid)
    }
`