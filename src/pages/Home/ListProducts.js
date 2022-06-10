import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { toast } from 'react-toastify'

import { Wrapper as ProductWrapper, FlexWrapper } from '~/components/Popper'
import ProductItem from '~/components/ProductItem'
import { GET_PRODUCT_BY_STATUS } from '~/apollo/productApollo/queries'
import Skeleton from '~/components/Skeleton'
import { fake5Data } from '~/utils/fakeData'

function ListProducts({ status }) {
    const { loading, error, data } = useQuery(GET_PRODUCT_BY_STATUS, {
        variables: {
            status: status,
        },
        skip: status === null,
    })

    if (error) {
        toast.error(error)
        return <></>
    }

    return (
        <ProductWrapper flexWrapper>
            {!loading ? (
                <Fragment>
                    {data?.listProducts.map((product) => (
                        <FlexWrapper key={product.id}>
                            <ProductItem product={product} />
                        </FlexWrapper>
                    ))}
                </Fragment>
            ) : (
                <Fragment>
                    {fake5Data.map((item) => (
                        <FlexWrapper key={item}>
                            <Skeleton image />
                        </FlexWrapper>
                    ))}
                </Fragment>
            )}
        </ProductWrapper>
    )
}

ListProducts.propTypes = {
    status: PropTypes.string,
}

export default React.memo(ListProducts)
