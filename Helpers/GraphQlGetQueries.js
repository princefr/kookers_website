import gql from "graphql-tag";





export const GET_RESADATE = gql`
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
`


export const GET_HOME_DATA = gql`
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
`

export const GET_USER = gql`
query GetIfUSerExist($uid: String!) {
    usersExist(firebase_uid: $uid){
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
`