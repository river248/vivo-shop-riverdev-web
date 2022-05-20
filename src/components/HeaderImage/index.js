import React from 'react'
import classNames from 'classnames/bind'

import styles from './HeaderImage.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function HeaderImage({ image, alt, className }) {
    const classes = cx('wrapper', {
        [className]: className,
    })
    return (
        <div className={classes}>
            <Image src={image} alt={alt} />
        </div>
    )
}

export default HeaderImage
