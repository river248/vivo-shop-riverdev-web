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
import { fake12Data } from '~/utils/fakeData'

const cx = classNames.bind(styles)

function Product() {
    let query = useQueryHook()

    const { loading, error, data } = useQuery(GET_PRODDUCTS_BY_CATEGORY, {
        variables: {
            categoryId: query.get('category'),
        },
        skip: query.get('category') === null || query.get('category') === undefined,
    })

    if (error) {
        toast.error(error)
        return <></>
    }

    return (
        <Fragment>
            <Helmet>
                <title>{data ? data.category.products[0].category.name : ''}</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <Title content={data ? data.category.products[0].category.name : 'LOADING...'} />
                <ProductWrapper flexWrapper>
                    {loading ? (
                        <Fragment>
                            {fake12Data.map((item) => (
                                <FlexWrapper key={item}>
                                    <Skeleton image />
                                </FlexWrapper>
                            ))}
                        </Fragment>
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
