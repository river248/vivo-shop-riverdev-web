import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import { FlexWrapper, Wrapper as ProductWrapper } from '~/components/Popper'
import Card from '~/components/Card'
import convertLink from '~/utils/convertLink'
import config from '~/config'
import { formatMoney } from '~/utils'
import { fake5Data } from '~/utils/fakeData'
import Skeleton from '~/components/Skeleton'

function RelativeProducts({ categoryId }) {
    return (
        <ProductWrapper flexWrapper>
            {/* {!loading ? (
                <Fragment>
                    {data?.category.products.map((product) => (
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
                </Fragment>
            ) : (
                <Fragment>
                    {fake5Data.map((item) => (
                        <FlexWrapper key={item}>
                            <Skeleton image />
                        </FlexWrapper>
                    ))}
                </Fragment>
            )} */}
        </ProductWrapper>
    )
}

RelativeProducts.propTypes = {
    categoryId: PropTypes.string,
}

export default React.memo(RelativeProducts)
