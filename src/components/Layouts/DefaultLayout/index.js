import React from 'react'
import classNames from 'classnames/bind'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
            <div className={cx('container')}>{children}</div>
            <ToTop />
            <Footer />
        </div>
    )
}

export default DefaultLayout
