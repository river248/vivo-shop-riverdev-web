import { gql } from '@apollo/client'

export const GET_PRODDUCTS_BY_CATEGORY = gql`
    query Category($categoryId: ID!) {
        category(id: $categoryId) {
            products {
                id
                name
                thumbnail
                price
                soldOut
            }
        }
    }
`

export const GET_PRODDUCT = gql`
    query Product($productId: ID!) {
        product(id: $productId) {
            id
            name
            thumbnail
            description
            price
            sizes {
                name
                soldOut
            }
            soldOut
            category {
                products {
                    id
                    name
                    thumbnail
                    price
                    soldOut
                }
            }
        }
    }
`
