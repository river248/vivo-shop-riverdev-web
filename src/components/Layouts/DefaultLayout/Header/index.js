import React from 'react'
import classNames from 'classnames/bind'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    return <header className={cx('wrapper')}>header</header>
}

export default Header
