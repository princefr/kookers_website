import client from './GraphQLClient'
import { gql } from '@apollo/client';





export const getResaBuyerOrders = async(userId) => {
    return client.query({
        query: gql`
            query GetResaBuyerOrders($userId: ID!){
                getResaBuyerOrders(userId: $userId){
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
        `,
        variables: {
            userId: userId
        }
    })
}



export const loadResaForACourse = async (courseId) => {
    return client.query({
        query: gql`
            query LoadResaForAcourse($courseId: ID!){
                loadResaForAcourse(courseId: $courseId){
                    _id
                    duedate
                    status
                    participants 
                    cancel_date
                    createdAt
                    updatedAt
                }
            }
        `,
        variables: {
            courseId: courseId
        }
    })
}


export const buyAcours = async (courseId, resa_id, quantity, userId, sellerId) => {
    return client.mutate({
        mutation: gql`
           mutation BuyACourse($courseId: ID!, $resa_id:ID, $quantity: Int, $userId:ID!, $sellerId: ID!){
                buyACourse(courseId: $courseId, resa_id:$resa_id, quantity: $quantity, userId:$userId, sellerId:$sellerId)
            }
        `,
        variables: {
            courseId: courseId,
            resa_id: resa_id,
            quantity: quantity,
            userId: userId,
            sellerId: sellerId
        }
    })
}

export const loadCourseHome = async (userId) => {
    return client.query({
        query: gql`
            query LoadCourseHome($userId: ID!){
                loadCourseHome(userId: $userId) {
                    _id
                    name
                    price
                    photoUrl
                    duration
                    description
                    ingredients {
                        name
                        quantity
                    }
                    plate_type
                    cuisine_provenance
                    food_preferences
                    userId
                    shortId
                    createdAt
                    updatedAt
                    difficulty
                }
            }
        `,
        variables: {
            userId: userId
        }
    })
}


export const getCoursesMadeByUser = async (firebaseUid) => {
    return client.query({
        query: gql`
            query GetCoursesMadeByUser($firebaseUid: String!){
                getCoursesMadeByUser(firebaseUid: $firebaseUid){
                    _id
                    name
                    price
                    photoUrl
                    duration
                    description
                    ingredients {
                        name
                        quantity
                    }
                    plate_type
                    cuisine_provenance
                    food_preferences
                    userId
                    shortId
                    createdAt
                    updatedAt
                    difficulty
                }
            }
        `,
        variables : {
            firebaseUid: firebaseUid
        }
    })
}

export const updateUserImage = async (userId, imgUrl) => {
    return client.mutate({
        mutation: gql`
            mutation UpdateUserImage($userID: String!, $imageUrl: String!) {
                updateUserImage(userID: $userID, imageUrl: $imageUrl){
            _id
            email
            first_name
            last_name
            phonenumber
            customerId
            country
            currency
            default_source
            default_iban
            stripe_account
            is_seller
            settings {
                food_preferences
                food_price_ranges
                distance_from_seller
                updatedAt
            }

            stripeAccount {
            charges_enabled
            payouts_enabled
            requirements {
                    currently_due
                    eventually_due
                    past_due
                    pending_verification
                    disabled_reason
                    current_deadline
            }
            }

            balance {
            current_balance
            pending_balance
            currency
            }

            transactions {
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

            all_cards {
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

            ibans {
                id
                object
                account_holder_name
                account_holder_type
                bank_name
                country
                currency
                last4
            }

            createdAt
            photoUrl
            updatedAt
            adresses {title, location {latitude, longitude}, is_chosed}
            fcmToken
                }
            }
        `,
        variables: {
            userId: userId,
            imgUrl: imgUrl
        }
    })
}

export const setDefaultCard = async (source, userId) => {
    return client.mutate({
        mutation: gql`
            mutation UpdateDefaultSource($userId: String!, $source: String!){
                updateDefaultSource(userId: $userId, source: $source)
            }
        `,
        variables: {
            userId: userId,
            source: source,
        }
    })
}

export const setDefaultIban = async (iban, userId) => {
    return client.mutate({
        mutation: gql`
            mutation UpdateIbanSource($userId: String!, $iban: String!){
                updateIbanSource(userId: $userId, iban: $iban)
            }
        `,
        variable: {
            userId: userId,
            iban: iban
        }
    })
}

export const createBankAccount = async (account_id, country, currency, account_number) => {
    return client.mutate({
        mutation: gql`
        mutation CreateBankAccountOnConnect($account_id: String!, $country:String!, $currency: String!, $account_number: String!) {
            createBankAccountOnConnect(account_id: $account_id, country: $country, currency: $currency, account_number: $account_number){
              id
              object
              account_holder_name
              account_holder_type
              bank_name
            }
          }
        `,
        variables: {
            account_id: account_id,
            country: country,
            currency: currency,
            account_number: account_number
        }
    })
}

export const makePayout = async (account_id, amount, currency, destination) => {
    return client.mutate({
        mutation: gql`
            mutation MakePayout($account_id: String!, $amount: Int!, $currency: String!, $destination: String!) {
                makePayout(account_id: $account_id, amount: $amount, currency: $currency, destination: $destination){
                    id
                    object
                    arrival_date
                    amount
                    type
                    status
                    description
                }
            }
        `,
        variables: {
            account_id: account_id,
            amount: amount,
            currency: currency,
            destination: destination
        }
    })
}

export const createNewCourse =  async (name, price, photoUrl, duration, description, ingredients, duedate, plate_type, cuisine_provenance, food_preferences, userId, difficulty) => {
    console.log("creating the new course")
    return client.mutate({
        mutation: gql`
            mutation CreateNewCourse($course: CourseInput!, $resa: ResaInput!){
                createNewCourse(course: $course, resa: $resa)
            }
        `,
        variables: {
            course: {
                name: name,
                price: price,
                photoUrl: photoUrl,
                duration : duration,
                description: description,
                ingredients: ingredients,
                
                plate_type: plate_type,
                cuisine_provenance: cuisine_provenance,
                food_preferences: food_preferences,
                userId: userId,
                difficulty: difficulty
            },

            resa : {
                duedate: duedate,
            }


        }
    })
}

export const attachPaymentToCustomer = async (methodeId, customer) => {
    return client.mutate({
        mutation: gql`
            mutation AddattachPaymentToCustomer($customer_id: String!, $methode_id: String!){
                addattachPaymentToCustomer(customer_id: $customer_id, methode_id: $methode_id){
                id,
                object
                }
            }
        `,
        variables: {
            customer_id: customer,
            methode_id: methodeId,
        }
    })
}
export const loadUser = async (firebase_uid) => {
    return client.query({
        query: gql`
        query GetIfUSerExist($firebase_uid: String!) {
            usersExist(firebase_uid: $firebase_uid){
                _id
                email
                first_name
                last_name
                is_seller
                phonenumber
                customerId
                country
                currency
                default_source
                default_iban
                stripe_account
                notificationPermission
                fee
                is_online
        
                settings {
                    food_preferences
                    food_price_ranges
                    food_type
                    distance_from_seller
                    updatedAt
                }
        
                stripeAccount {
                    charges_enabled
                    payouts_enabled
                    requirements {
                        currently_due
                        eventually_due
                        past_due
                        pending_verification
                        disabled_reason
                        current_deadline
                    }
                }
        
        
                createdAt
                photoUrl
                updatedAt
                adresses {title, location {latitude, longitude}, is_chosed}
                fcmToken
            }
        }
        `,
        variables: {
            firebase_uid: firebase_uid
        }

    })
}