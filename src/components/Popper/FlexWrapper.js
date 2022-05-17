import React from 'react'
import classNames from 'classnames/bind'

import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

function FlexWrapper({ xxl = 0, xl = 0, lg = 0, md = 0, sm = 0, xs = 0, xxs = 0, className, children }) {
    const classes = cx('flex-item-wrapper', {
        [className]: className,
        [`col-xxl-${xxl}`]: xxl,
        [`col-xl-${xl}`]: xl,
        [`col-lg-${lg}`]: lg,
        [`col-md-${md}`]: md,
        [`col-sm-${sm}`]: sm,
        [`col-xs-${xs}`]: xs,
        [`col-xxs-${xxs}`]: xxs,
    })
    return <div className={classes}>{children}</div>
}

export default FlexWrapper
