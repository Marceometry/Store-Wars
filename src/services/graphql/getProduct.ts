import { gql } from "@apollo/client"

export const GET_PRODUCT = gql`
    query Query($id: ID!) {
        product(id: $id) {
            _id
            name
            description
            price
            images
        }
    }
`