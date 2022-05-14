import React from 'react'
import classNames from 'classnames/bind'

import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

function Wrapper({ children, flexWrapper = false }) {
    const classes = cx('wrapper', {
        flexWrapper,
    })

    return <div className={classes}>{children}</div>
}

export default Wrapper
