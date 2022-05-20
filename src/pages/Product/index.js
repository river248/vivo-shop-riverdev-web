import React from 'react'
import classNames from 'classnames/bind'

import styles from './Product.module.scss'
import Title from '~/components/Title'
import Card from '~/components/Card'
import { somis } from '~/data'
import { Wrapper as ProductWrapper, FlexWrapper } from '~/components/Popper'
import Button from '~/components/Button'
import { useQuery } from '~/hooks'

const cx = classNames.bind(styles)

const categories = [
    { id: 'ao-so-mi', name: 'áo sơ mi' },
    { id: 'ao-kieu', name: 'áo kiểu' },
    { id: 'ao-thun', name: 'áo thun' },
    { id: 'quan-jean', name: 'quần jean' },
    { id: 'quan-kieu', name: 'quần kiểu' },
    { id: 'chan-vay', name: 'chân váy' },
    { id: 'dam', name: 'đầm' },
]
function Product() {
    let query = useQuery().get('type')

    const title = categories.filter((category) => category.id === query)

    return (
        <div className={cx('wrapper')}>
            <Title content={title[0].name} />
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
            <Button text>Xem thêm...</Button>
        </div>
    )
}

export default Product
