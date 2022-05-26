import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { privateRoutes, protectedRoutes, publicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layouts'
import ScrollTopTop from '~/components/ScrollToTop'
import ProtectedRoute from '~/context/ProtectedRoute'
import PrivateRoute from '~/context/PrivateRoute'
import { logout } from '~/context/Auth'

function App() {
    return (
        <Router>
            <div className="App">
                <button onClick={() => logout()}>Signput</button>
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
                    <Route element={<ProtectedRoute />}>
                        {protectedRoutes.map((route, index) => {
                            const Page = route.component
                            return <Route key={index} path={route.path} element={<Page />} />
                        })}
                    </Route>
                    <Route element={<PrivateRoute />}>
                        {privateRoutes.map((route, index) => {
                            const Page = route.component
                            return <Route key={index} path={route.path} element={<Page />} />
                        })}
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
