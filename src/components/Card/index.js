import React from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'

import styles from './Card.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function Card({ image, ratio = 'ratio3x4', title, textStyle = '', className, children, onClick }) {
    const _props = {
        onClick,
    }

    const classes = cx('wrapper', {
        [className]: className,
        [textStyle]: textStyle,
    })
    return (
        <div className={classes} {..._props}>
            {image && <Image ratio={ratio} src={image} alt={title} />}
            <Tippy placement="bottom-start" content={<span className={cx('tool-tip')}>{title}</span>}>
                <div className={cx('title')}>{title}</div>
            </Tippy>
            <div className={cx('content')}>{children}</div>
        </div>
    )
}

export default React.memo(Card)
