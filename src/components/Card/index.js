import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import { getDownloadURL, ref } from 'firebase/storage'

import styles from './Card.module.scss'
import Image from '~/components/Image'
import { storage } from '~/config/firebaseConfig'

const cx = classNames.bind(styles)

function Card({ image, ratio = 'ratio3x4', title, textStyle = '', className, children, onClick }) {
    const [imageURL, setImageURL] = useState('')
    const _props = {
        onClick,
    }

    useEffect(() => {
        let isSubcribe = true

        if (image && !image?.includes('/static'))
            getDownloadURL(ref(storage, `${image}`))
                .then((url) => {
                    if (isSubcribe) setImageURL(url)
                })
                .catch((error) => console.log(error))
        return () => {
            setImageURL('')
            isSubcribe = false
        }
    }, [image])

    const classes = cx('wrapper', {
        [className]: className,
        [textStyle]: textStyle,
    })
    return (
        <div className={classes} {..._props}>
            {image && (
                <>
                    {!image.includes('/static') ? (
                        <Image ratio={ratio} src={imageURL} alt={'candytop'} />
                    ) : (
                        <Image ratio={ratio} src={image} alt={'candytop'} />
                    )}
                </>
            )}
            <Tippy placement="bottom-start" content={<span className={cx('tool-tip')}>{title}</span>}>
                <div className={cx('title')}>{title}</div>
            </Tippy>
            <div className={cx('content')}>{children}</div>
        </div>
    )
}

export default React.memo(Card)
