import gql from "graphql-tag";







export const GET_USER_SELLS = gql`
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
`