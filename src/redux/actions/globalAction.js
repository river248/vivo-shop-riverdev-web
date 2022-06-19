import { LOADING } from '~/redux/types'

export const loading = (status) => {
    return {
        type: LOADING,
        payload: status,
    }
}
