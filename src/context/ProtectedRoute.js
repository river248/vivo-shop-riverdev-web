/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { isLoggedIn } from '~/apollo/userApollo'
import routes from '~/config/routes'
import { getToken } from './Auth'

function ProtectedRoute() {
    const location = useLocation()
    const [token, setToken] = useState(isLoggedIn())

    useEffect(() => {
        getToken()
            .then((res) => {
                console.log(res)
                setToken(true)
                isLoggedIn(true)
                localStorage.setItem('isLoggedIn', isLoggedIn())
            })
            .catch((err) => {
                setToken(false)
                localStorage.removeItem('isLoggedIn')
            })
    }, [isLoggedIn(), token])

    return !token ? <Outlet /> : <Navigate to={routes.home} replace state={{ from: location }} />
}

export default ProtectedRoute
