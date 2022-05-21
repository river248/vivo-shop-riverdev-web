import React from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import { Link } from 'react-router-dom'

import styles from './Card.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function Card({ image, ratio = 'ratio3x4', title, textStyle = '', textAlign = '', className, children, to, onClick }) {
    let Comp = 'div'

    const _props = {
        onClick,
    }

    if (to) {
        _props.to = to
        Comp = Link
    }

    const classes = cx('wrapper', {
        [className]: className,
        [textStyle]: textStyle,
        [textAlign]: textAlign,
    })
    return (
        <div className={classes}>
            {image && <Image ratio={ratio} src={image} alt={title} />}
            <Tippy placement="bottom" content={<span className={cx('tool-tip')}>{title}</span>}>
                <Comp {..._props} className={cx('title')}>
                    {title}
                </Comp>
            </Tippy>
            <div className={cx('content')}>{children}</div>
        </div>
    )
}

export default React.memo(Card)
