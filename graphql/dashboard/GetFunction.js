import gql from "graphql-tag";

export const GET_HOME_DATA = gql`
    query LoadCourseHome($firebaseUid: String!){
        loadCourseHome(firebaseUid: $firebaseUid) {
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
            poster {
                first_name
                last_name
                photoUrl
                is_online
            }
        }
    }
`