/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { getDownloadURL, ref } from 'firebase/storage'

import styles from './Image.module.scss'
import images from '~/assets/images'
import { storage } from '~/config/firebaseConfig'
const cx = classNames.bind(styles)

const Image = forwardRef(({ src, alt, ratio = '', className, ...props }, reference) => {
    const [fallback, setFallback] = useState('')
    const [imageURL, setImageURL] = useState('')
    useEffect(() => {
        let isSubcribe = true

        if (src && !src?.includes('/static'))
            getDownloadURL(ref(storage, `${src}`))
                .then((url) => {
                    if (isSubcribe) setImageURL(url)
                })
                .catch((error) => console.log(error))
        return () => {
            setImageURL('')
            isSubcribe = false
        }
    }, [src])

    const classes = cx('wrapper', {
        [className]: className,
        [ratio]: ratio,
    })
    const handleError = () => {
        setFallback(images.noImage)
    }
    return (
        <div className={classes}>
            <img
                ref={reference}
                src={(src.includes('/static') ? src : imageURL) || fallback}
                alt={alt}
                {...props}
                onError={handleError}
            />
        </div>
    )
})

export default Image
