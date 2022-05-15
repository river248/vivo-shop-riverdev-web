import React from 'react'
import classNames from 'classnames/bind'

import styles from './Product.module.scss'
import Title from '~/components/Title'
import Card from '~/components/Card'
import { somis } from '~/data'
import { Wrapper as ProductWrapper, FlexWrapper } from '~/components/Popper'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function Product() {
    return (
        <div className={cx('wrapper')}>
            {' '}
            <Title content={'áo sơ mi'} />
            <ProductWrapper flexWrapper>
                {somis.map((somi) => (
                    <FlexWrapper key={somi.id}>
                        <Card
                            title={somi.name}
                            onClick={() => alert('say hi')}
                            image={somi.thumbnail}
                            textStyle={'capitalize'}
                        >{`${somi.price} VND`}</Card>
                    </FlexWrapper>
                ))}
            </ProductWrapper>
            <Button primary>Xem thêm...</Button>
        </div>
    )
}

export default Product
