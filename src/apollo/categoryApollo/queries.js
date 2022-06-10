import { gql } from '@apollo/client'

export const GET_CATEGORY_BY_TYPE = gql`
    query ListCategories($type: String!) {
        listCategories(type: $type) {
            id
            name
            type
        }
    }
`
