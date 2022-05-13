import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Navigation />
            <div className="container">{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout
