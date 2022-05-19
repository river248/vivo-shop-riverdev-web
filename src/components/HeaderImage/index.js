import React from 'react'
import classNames from 'classnames/bind'

import styles from './HeaderImage.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function HeaderImage({ image, alt }) {
    return (
        <div className={cx('wrapper')}>
            <Image src={image} alt={alt} />
        </div>
    )
}

export default HeaderImage
