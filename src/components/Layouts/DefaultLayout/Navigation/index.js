import React from 'react'
import classNames from 'classnames/bind'

import styles from './Navigation.module.scss'

const cx = classNames.bind(styles)

function Navigation() {
    return <nav className={cx('wrapper')}>navigation</nav>
}

export default Navigation
