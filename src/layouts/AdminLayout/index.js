import React from 'react'
import classNames from 'classnames/bind'

import styles from './AdminLayout.module.scss'
import Header from './Header'
import Navigation from './Navigation'

const cx = classNames.bind(styles)

function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navigation />
            <div className={cx('container')}>{children}</div>
        </div>
    )
}

export default AdminLayout
