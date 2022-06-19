import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from '~/redux/types'

export const addToCart = (product, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity },
    }
}

export const updateCart = (product, quantity) => {
    return {
        type: UPDATE_CART,
        payload: { product, quantity },
    }
}

export const removeProduct = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product,
    }
}
