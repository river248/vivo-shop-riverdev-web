import React from 'react'
import classNames from 'classnames/bind'

import styles from './ProductManagement.module.scss'

const cx = classNames.bind(styles)

function ProductManagement() {
    return <div className={cx('wrapper')}>ProductManagement</div>
}

export default ProductManagement
