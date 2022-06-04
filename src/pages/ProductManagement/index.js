import React, { Fragment, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

import styles from './ProductManagement.module.scss'
import { FlexWrapper, Wrapper } from '~/components/Popper'
import Image from '~/components/Image'
import images from '~/assets/images'

const cx = classNames.bind(styles)
const headerTable = [
    { column: 1, width: 1, name: '' },
    { column: 2, width: 3, name: 'Tên' },
    { column: 3, width: 2, name: 'Thể loại' },
    { column: 4, width: 2, name: 'Giá' },
    { column: 5, width: 2, name: 'Trạng thái' },
    { column: 6, width: 1, name: '' },
    { column: 7, width: 1, name: '' },
]

const fakeProducts = [
    { id: 1, image: images.candytop, name: 'Candy Top 1', type: 'Áo kiểu', price: '190000 VND', status: 'Hàng mới về' },
    { id: 2, image: images.candytop, name: 'Candy Top 2', type: 'Áo kiểu', price: '190000 VND', status: 'Hàng mới về' },
    { id: 3, image: images.candytop, name: 'Candy Top 3', type: 'Áo kiểu', price: '190000 VND', status: 'Hàng mới về' },
    { id: 4, image: images.candytop, name: 'Candy Top 4', type: 'Áo kiểu', price: '190000 VND', status: 'Hàng mới về' },
    { id: 5, image: images.candytop, name: 'Candy Top 5', type: 'Áo kiểu', price: '190000 VND', status: 'Hàng mới về' },
    { id: 6, image: images.candytop, name: 'Candy Top 6', type: 'Áo kiểu', price: '190000 VND', status: 'Hàng mới về' },
    { id: 7, image: images.candytop, name: 'Candy Top 7', type: 'Áo kiểu', price: '190000 VND', status: 'Hàng mới về' },
]

function ProductManagement() {
    //When having APIs, remove it
    const [products, setProducts] = useState([...fakeProducts])

    const handleRemoveProduct = (productId) => {
        const cloneArr = products.filter((product) => product.id !== productId)
        setProducts([...cloneArr])
    }

    return (
        <div className={cx('wrapper')}>
            {products.length > 0 && (
                <Fragment>
                    <Wrapper flexWrapper>
                        {headerTable.map((item) => (
                            <Fragment key={item.column}>
                                <FlexWrapper xxl={item.width} xl={item.width} lg={item.width} md={item.width}>
                                    {item.name}
                                </FlexWrapper>
                            </Fragment>
                        ))}
                    </Wrapper>
                    <div className={cx('bottom-line')} />
                </Fragment>
            )}
            {products.map((product) => (
                <Fragment key={product.id}>
                    <Wrapper flexWrapper>
                        <FlexWrapper xxl={1} xl={1} lg={1}>
                            <div className={cx('image-container')}>
                                <Image src={product.image} alt="candy top" ratio="ratio3x4" />
                            </div>
                        </FlexWrapper>
                        <FlexWrapper className={cx('col-item')} xxl={3} xl={3} lg={3}>
                            {product.name}
                        </FlexWrapper>
                        <FlexWrapper className={cx('col-item')} xxl={2} xl={2} lg={2}>
                            {product.type}
                        </FlexWrapper>
                        <FlexWrapper className={cx('col-item')} xxl={2} xl={2} lg={2}>
                            {product.price}
                        </FlexWrapper>
                        <FlexWrapper className={cx('col-item')} xxl={2} xl={2} lg={2}>
                            {product.status}
                        </FlexWrapper>
                        <FlexWrapper xxl={1} xl={1} lg={1}>
                            <div className={cx('icon-btn', 'edit-icon')}>
                                <FontAwesomeIcon icon={faEdit} />
                            </div>
                        </FlexWrapper>
                        <FlexWrapper xxl={1} xl={1} lg={1}>
                            <div className={cx('icon-btn', 'remove-icon')}>
                                <FontAwesomeIcon icon={faTrash} onClick={() => handleRemoveProduct(product.id)} />
                            </div>
                        </FlexWrapper>
                    </Wrapper>
                    <div className={cx('bottom-line')} />
                </Fragment>
            ))}
            {products.length < 1 && <h2 className={cx('no-product')}>Không có sản phẩm nào!</h2>}
            <div className={cx('add-product')}>
                <div className={cx('add-icon')}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <h3>Thêm sản phẩm</h3>
            </div>
        </div>
    )
}

export default ProductManagement
