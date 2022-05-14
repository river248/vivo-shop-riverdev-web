import React from 'react'
import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import Title from '~/components/Title'
import images from '~/assets/images'
import { Wrapper as ProductWrapper, FlexWrapper } from '~/components/Popper'
import SlideShow from '~/components/SlideShow'
import Card from '~/components/Card'

const cx = classNames.bind(styles)

function Home() {
    const products = [1, 2, 3, 4, 5]

    return (
        <div className={cx('wrapper')}>
            <img className={cx('img-bell')} src={images.bell} alt="bell" />
            <img className={cx('img-christmas')} src={images.christmas} alt="christmas" />
            <img className={cx('img-tree')} src={images.tree} alt="tree" />
            <SlideShow />
            <Title content={'sản phẩm mới'} rightContent={'Xem thêm...'} />
            <ProductWrapper flexWrapper>
                {products.map((product) => (
                    <FlexWrapper key={product}>
                        <Card
                            title={'ao thun asdasdasdasdasd asdasdasd'}
                            onClick={() => alert('say hi')}
                            image={images.candytop}
                            uppercase
                            content={'200,000 VND'}
                        />
                    </FlexWrapper>
                ))}
            </ProductWrapper>
            <hr />
            <Title content={'sản phẩm hot'} rightContent={'Xem thêm...'} />
            <ProductWrapper flexWrapper>
                {products.map((product) => (
                    <FlexWrapper key={product}>
                        <Card
                            title={'ao thun'}
                            onClick={() => alert('say hi')}
                            image={images.candytop}
                            uppercase
                            content={'200,000 VND'}
                        />
                    </FlexWrapper>
                ))}
            </ProductWrapper>
            <hr />
            <Title content={'hàng mới về'} rightContent={'Xem thêm...'} />
            <ProductWrapper flexWrapper>
                {products.map((product) => (
                    <FlexWrapper key={product}>
                        <Card
                            title={'ao thun'}
                            onClick={() => alert('say hi')}
                            image={images.candytop}
                            uppercase
                            content={'200,000 VND'}
                        />
                    </FlexWrapper>
                ))}
            </ProductWrapper>
        </div>
    )
}

export default Home
