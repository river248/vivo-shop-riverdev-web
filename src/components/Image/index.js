import React, { forwardRef, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './Image.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)

const Image = forwardRef(({ src, alt, ratio = '', className, ...props }, ref) => {
    const [fallback, setFallback] = useState('')
    const classes = cx('wrapper', {
        [className]: className,
        [ratio]: ratio,
    })
    const handleError = () => {
        setFallback(images.noImage)
    }
    return (
        <div className={classes}>
            <img ref={ref} src={src || fallback} alt={alt} {...props} onError={handleError} />
        </div>
    )
})

export default Image
