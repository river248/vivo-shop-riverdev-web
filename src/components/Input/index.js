import React from 'react'
import classNames from 'classnames/bind'

import styles from './Input.module.scss'

const cx = classNames.bind(styles)

function Input({
    primary,
    size = 'md-size',
    textarea = false,
    shadow = '',
    className,
    onFocus,
    onBlur,
    onChange,
    ...passProps
}) {
    const _props = {
        onFocus,
        onBlur,
        onChange,
        ...passProps,
    }

    let Comp = textarea ? 'textarea' : 'input'

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        textarea,
        [size]: size,
        [shadow]: shadow,
    })
    return <Comp className={classes} {..._props} />
}

export default React.memo(Input)
