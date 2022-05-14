import React from 'react'
import classNames from 'classnames/bind'

import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

function FlexWrapper({ children }) {
    return <div className={cx('flex-item-wrapper')}>{children}</div>
}

export default FlexWrapper
