import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'

import { Wrapper as ProductWrapper, FlexWrapper } from '~/components/Popper'
import ProductItem from '~/components/ProductItem'
import Skeleton from '~/components/Skeleton'
import { fake5Data } from '~/utils/fakeData'
import { loading } from '~/redux/actions/globalAction'

function ListProducts({ status, isLoading, listProducts, loading }) {
    return (
        <ProductWrapper flexWrapper>
            {!isLoading ? (
                <Fragment>
                    {listProducts.map((product) => (
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

const mapStateToProps = (state) => {
    return {
        isLoading: state.globalReducer.loading,
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        loading: (status) => {
            dispatch(loading(status))
        },
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(React.memo(ListProducts))
