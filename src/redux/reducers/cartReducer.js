import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from '~/redux/types'

const data = JSON.parse(localStorage.getItem('shopping-cart'))

const initialState = data ? data : []

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const clone = [...state]
            const index = findProdInCart(state, action.payload.product)
            if (index === -1)
                clone.push({
                    product: action.payload.product,
                    quantity: action.payload.quantity,
                })
            else clone[index].quantity += action.payload.quantity
            state = clone
            localStorage.setItem('shopping-cart', JSON.stringify(state))
            return state
        case UPDATE_CART:
            const updateArr = [...state]
            const elem = findProdInCart(state, action.payload.product)
            if (elem !== -1) updateArr[elem].quantity += action.payload.quantity
            state = updateArr
            localStorage.setItem('shopping-cart', JSON.stringify(state))
            return state
        case REMOVE_FROM_CART:
            const cloneArr = [...state]
            const prod = findProdInCart(state, action.payload)
            if (prod !== -1) cloneArr.splice(prod, 1)
            state = cloneArr
            localStorage.setItem('shopping-cart', JSON.stringify(state))
            return state
        default:
            return [...state]
    }
}

const findProdInCart = (cart, product) => {
    const id = product._id
    for (let index in cart) {
        if (cart[index].product._id === id && cart[index].product.size === product.size) return index
    }
    return -1
}

export default cartReducer
