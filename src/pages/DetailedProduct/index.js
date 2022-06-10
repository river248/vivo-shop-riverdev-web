import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import { useQuery } from '@apollo/client'

import styles from './DetailedProduct.module.scss'
import { FlexWrapper, Wrapper as ProductWrapper } from '~/components/Popper'
import Card from '~/components/Card'
import convertLink from '~/utils/convertLink'
import config from '~/config'
import ProductInformation from '~/components/ProductInformation'
import { useQueryHook } from '~/hooks'
import { GET_PRODDUCT } from '~/apollo/productApollo/queries'
import { formatMoney } from '~/utils'
import { toast } from 'react-toastify'

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
                {!loading && <ProductInformation product={data?.product} />}
                <hr />
                <h2>SẢN PHẨM LIÊN QUAN</h2>
                {!loading && (
                    <ProductWrapper flexWrapper>
                        {data?.product.category.products.map((product) => (
                            <Fragment key={product.id}>
                                {!product.soldOut && (
                                    <FlexWrapper>
                                        <Card
                                            to={`${config.routes.detailed}?product=${product.id}&name=${convertLink(
                                                product.name,
                                            )}`}
                                            title={product.name}
                                            image={product.thumbnail}
                                            textStyle={'capitalize'}
                                        >
                                            {`${formatMoney(product.price)} VND`}
                                        </Card>
                                    </FlexWrapper>
                                )}
                            </Fragment>
                        ))}
                    </ProductWrapper>
                )}
            </Fragment>
        </div>
    )
}

export default DetailedProduct
