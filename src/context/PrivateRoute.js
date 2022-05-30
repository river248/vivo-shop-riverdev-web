/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import config from '~/config'
import useAuth from '~/hooks/useAuth'

function ProtectedRoute({ children }) {
    const location = useLocation()
    const { user } = useAuth()

    return user.email ? children : <Navigate to={config.routes.login} replace state={{ from: location }} />
}

export default ProtectedRoute
