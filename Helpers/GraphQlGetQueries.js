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




