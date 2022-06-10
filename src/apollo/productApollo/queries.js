import { gql } from '@apollo/client'

export const GET_PRODDUCTS_BY_CATEGORY = gql`
    query Category($categoryId: ID!) {
        category(id: $categoryId) {
            products {
                id
                name
                thumbnail
                category {
                    name
                }
                price
                soldOut
            }
        }
    }
`

export const GET_PRODUCT_BY_STATUS = gql`
    query ListProducts($status: String!) {
        listProducts(status: $status) {
            id
            name
            status
            thumbnail
            price
            soldOut
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
            category {
                id
            }
            soldOut
        }
    }
`
