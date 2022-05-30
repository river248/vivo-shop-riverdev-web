import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { privateRoutes, protectedRoutes, publicRoutes } from '~/routes'
import { DefaultLayout } from '~/layouts'
import ScrollTopTop from '~/components/ScrollToTop'
import ProtectedRoute from '~/context/ProtectedRoute'
import PrivateRoute from '~/context/PrivateRoute'
import useAuth from '~/hooks/useAuth'

function App() {
    const { user, logout } = useAuth()
    return (
        <Router>
            <div className="App">
                <button onClick={() => logout()}>Sign Out</button>
                <span>{user.name}</span>
                <ScrollTopTop />
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component

                        let Layout = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}

                    {protectedRoutes.map((route, index) => {
                        const Page = route.component
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ProtectedRoute>
                                        <Page />
                                    </ProtectedRoute>
                                }
                            />
                        )
                    })}
                    {privateRoutes.map((route, index) => {
                        const Page = route.component
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <PrivateRoute>
                                        <Page />
                                    </PrivateRoute>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
