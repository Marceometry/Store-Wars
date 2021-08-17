import { gql } from "@apollo/client"

export const GET_PRODUCTS = gql`
    query Query {
        products {
            _id
            name
            description
            price
            images
            tags
            categories
        }
    }
`