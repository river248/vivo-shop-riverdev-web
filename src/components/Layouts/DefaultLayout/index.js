import React from 'react'
import classNames from 'classnames/bind'

import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
import styles from './DefaultLayout.module.scss'
import ToTop from '~/components/ToTop'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navigation />
            <div className={cx('container')}>
                {children}
                <ToTop />
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout
