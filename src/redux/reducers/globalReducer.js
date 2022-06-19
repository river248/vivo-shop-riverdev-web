import { LOADING } from '~/redux/types'

const initialState = {
    isLoading: false,
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return { ...state }
    }
}

export default globalReducer
