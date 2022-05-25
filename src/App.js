import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layouts'
import ScrollTopTop from '~/components/ScrollToTop'

function App() {
    return (
        <Router>
            <div className="App">
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
                </Routes>
            </div>
        </Router>
    )
}

export default App
