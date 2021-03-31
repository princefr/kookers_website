import gql from "graphql-tag";



export const ADD_POST = gql`
    mutation CreateNewCourse($course: CourseInput!, $resa: ResaInput!){
        createNewCourse(course: $course, resa: $resa)
    }
`


export const ADD_INGREDIENTS = gql`
    mutation AddIngredientToAcourse($courseId: ID!, $ingredient: Ingredient!){
        addIngredientToAcourse(courseId: $courseId, ingredient: $ingredient){
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

export const DELETE_INGREDIENT = gql`
    mutation DeleteIngredients($courseId: ID!, $ingredient: Ingredient!){
        deleteIngredients(courseId: $courseId, ingredient: $ingredient) {
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

// export const ADD_USTENSILES = gql`

// `

// export const DELETE_USTENSILES = gql`

// `


export const ADD_NEW_DATE_ON_COURSE = gql`
    mutation AddResaToAcourse($resa: ResaInputToCreate!){
        addResaToAcourse(resa: $resa){
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

// export const CANCEL_THE_COURSE = gql`

// `


// export const CANCEL_ORDER_BUYER = gql`

// `