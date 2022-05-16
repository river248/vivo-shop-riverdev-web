import React from 'react'
import classNames from 'classnames/bind'

import styles from './Title.module.scss'
import Button from '../Button'

const cx = classNames.bind(styles)

function Title({ content, rightContent }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('left-title')}>{content}</span>
            {rightContent && (
                <Button text className={cx('right-title')}>
                    {rightContent}
                </Button>
            )}
        </div>
    )
}

export default Title
