import React from 'react'
import Header from './Header'
import SideContent from './SideContent'

function TipLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideContent />
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default TipLayout
