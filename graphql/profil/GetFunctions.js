import gql from "graphql-tag";








export const GET_USER = gql`
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
`



