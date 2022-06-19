import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import { toast } from 'react-toastify'

import styles from './DetailedProduct.module.scss'
import RelativeProducts from './RelativeProducts'
import ProductInformation from '~/components/ProductInformation'
import { useQueryHook } from '~/hooks'
import Skeleton from '~/components/Skeleton'
import { FlexWrapper, Wrapper } from '~/components/Popper'
import { fake5Data } from '~/utils/fakeData'

const cx = classNames.bind(styles)

function DetailedProduct() {
    let productId = useQueryHook().get('product')

    return (
        <div className={cx('wrapper')}>
            <Fragment>
                {/* {!loading ? <ProductInformation product={data?.product} /> : <Skeleton image />}
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
                )} */}
            </Fragment>
        </div>
    )
}

export default DetailedProduct
