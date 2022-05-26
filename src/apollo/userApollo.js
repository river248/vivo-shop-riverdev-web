import { makeVar } from '@apollo/client'

const data = JSON.parse(localStorage.getItem('isLoggedIn'))
export const isLoggedIn = data ? makeVar(data) : makeVar(false)
