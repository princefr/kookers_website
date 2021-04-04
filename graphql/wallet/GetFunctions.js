import gql from "graphql-tag";


export const GET_BALANCE = gql`
    query Accountbalance($account_id: String!){
        accountbalance(account_id: $account_id){
            current_balance
            pending_balance
            currency
        }
    }
`



export const GET_IBANS = gql`
    query ListExternalAccount($accountId: String!){
        listExternalAccount(accountId: $accountId){
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


export const GET_BALANCE_TRANSACTIONS = gql`
    query GetBalanceTransaction($accountId: String!){
        getBalanceTransaction(accountId: $accountId){
            id
            object
            amount
            available_on
            created
            currency
            description
            fee
            net
            reporting_category
            type
            status
        }
    }
`