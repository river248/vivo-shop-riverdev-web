import React from 'react'
import classNames from 'classnames/bind'

import styles from './Image.module.scss'

const cx = classNames.bind(styles)

function Image({ ratio = '', url, alt }) {
    const classes = cx('wrapper', {
        [ratio]: ratio,
    })
    return (
        <div className={classes}>
            <img src={url} alt={alt} />
        </div>
    )
}

export default Image
