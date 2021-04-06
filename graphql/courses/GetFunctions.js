import gql from "graphql-tag";




export const GET_RESA_FOR_COURSE = gql`
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