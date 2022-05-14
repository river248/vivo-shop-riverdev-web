import React from 'react'
import classNames from 'classnames/bind'

import styles from './Title.module.scss'

const cx = classNames.bind(styles)

function Title({ content, rightContent }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('left-title')}>{content}</span>
            {rightContent && <span className={cx('right-title')}>{rightContent}</span>}
        </div>
    )
}

export default Title
