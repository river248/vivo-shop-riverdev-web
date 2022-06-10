import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import classNames from 'classnames/bind'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-toastify'

import styles from './Product.module.scss'
import Title from '~/components/Title'
import { Wrapper as ProductWrapper, FlexWrapper } from '~/components/Popper'
import Button from '~/components/Button'
import { useQueryHook } from '~/hooks'
import ProductItem from '~/components/ProductItem'
import { GET_PRODDUCTS_BY_CATEGORY } from '~/apollo/productApollo/queries'
import Skeleton from '~/components/Skeleton'

const cx = classNames.bind(styles)

const categories = [
    { id: 'ao-so-mi', name: 'Áo Sơ Mi' },
    { id: 'ao-kieu', name: 'Áo Kiểu' },
    { id: 'ao-thun', name: 'Áo Thun' },
    { id: 'quan-jean', name: 'Quần Jean' },
    { id: 'quan-kieu', name: 'Quần Kiểu' },
    { id: 'chan-vay', name: 'Chân Váy' },
    { id: 'dam', name: 'Đầm' },
]
function Product() {
    let query = useQueryHook().get('type')

    const categoryId = '62a2a5d368509e04fa8e2619'
    const title = categories.filter((category) => category.id === query)

    const { loading, error, data } = useQuery(GET_PRODDUCTS_BY_CATEGORY, {
        variables: {
            categoryId: categoryId,
        },
        skip: categoryId === null,
    })

    if (error) {
        toast.error(error)
        return <></>
    }

    return (
        <Fragment>
            <Helmet>
                <title>{title[0].name}</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <Title content={title[0].name} />
                <ProductWrapper flexWrapper>
                    {loading ? (
                        <FlexWrapper>
                            <Skeleton image />
                        </FlexWrapper>
                    ) : (
                        <Fragment>
                            {data.category.products.map((product) => (
                                <FlexWrapper key={product.id}>
                                    <ProductItem product={product} />
                                </FlexWrapper>
                            ))}
                        </Fragment>
                    )}
                </ProductWrapper>
                <Button text>Xem thêm...</Button>
            </div>
        </Fragment>
    )
}

export default Product
