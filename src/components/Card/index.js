import React from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'

import styles from './Card.module.scss'
import Image from '../Image'

const cx = classNames.bind(styles)

function Card({ image, title, content, uppercase, onClick }) {
    const _props = {
        onClick,
    }

    const classes = cx('wrapper', {
        uppercase,
    })
    return (
        <div className={classes} {..._props}>
            {image && <Image ratio="ratio3x4" url={image} alt={'candytop'} />}
            <Tippy placement="bottom-start" content={<span className={cx('tool-tip')}>{title}</span>}>
                <div className={cx('title')}>{title}</div>
            </Tippy>
            <div className={cx('content')}>{content}</div>
        </div>
    )
}

export default Card
