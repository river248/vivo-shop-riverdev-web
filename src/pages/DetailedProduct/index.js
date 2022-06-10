import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import { useQuery } from '@apollo/client'

import styles from './DetailedProduct.module.scss'
import ProductInformation from '~/components/ProductInformation'
import { useQueryHook } from '~/hooks'
import { GET_PRODDUCT } from '~/apollo/productApollo/queries'
import { toast } from 'react-toastify'
import RelativeProducts from './RelativeProducts'
import Skeleton from '~/components/Skeleton'
import { FlexWrapper, Wrapper } from '~/components/Popper'
import { fake5Data } from '~/utils/fakeData'

const cx = classNames.bind(styles)

function DetailedProduct() {
    let productId = useQueryHook().get('product')

    const { loading, error, data } = useQuery(GET_PRODDUCT, {
        variables: {
            productId: productId,
        },
        skip: productId === null,
    })

    if (error) {
        toast.error(error)
        return <></>
    }

    return (
        <div className={cx('wrapper')}>
            <Fragment>
                {!loading ? <ProductInformation product={data?.product} /> : <Skeleton image />}
                <hr />
                <h2>SẢN PHẨM LIÊN QUAN</h2>
                {!loading ? (
                    <RelativeProducts categoryId={data?.product.category.id} />
                ) : (
                    <Wrapper flexWrapper>
                        {fake5Data.map((item) => (
                            <FlexWrapper key={item}>
                                <Skeleton image />
                            </FlexWrapper>
                        ))}
                    </Wrapper>
                )}
            </Fragment>
        </div>
    )
}

export default DetailedProduct
