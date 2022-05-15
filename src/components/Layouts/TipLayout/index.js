import React from 'react'
import ToTop from '~/components/ToTop'
import Header from './Header'
import SideContent from './SideContent'

function TipLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideContent />
                <div className="content">
                    {children}
                    <ToTop />
                </div>
            </div>
        </div>
    )
}

export default TipLayout
