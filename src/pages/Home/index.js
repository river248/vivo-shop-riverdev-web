import React from 'react'
import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import Title from '~/components/Title'
import images from '~/assets/images'
import { Wrapper as ProductWrapper, FlexWrapper } from '~/components/Popper'
import SlideShow from '~/components/SlideShow'
import Card from '~/components/Card'
import { hotProducts, newImports, newProducts } from '~/data'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img-bell')} src={images.bell} alt="bell" />
            <img className={cx('img-christmas')} src={images.christmas} alt="christmas" />
            <img className={cx('img-tree')} src={images.tree} alt="tree" />
            <SlideShow />
            <Title content={'sản phẩm mới'} rightContent={'Xem thêm...'} />
            <ProductWrapper flexWrapper>
                {newProducts.map((newProduct) => (
                    <FlexWrapper key={newProduct.id}>
                        <Card
                            title={newProduct.name}
                            onClick={() => alert('say hi')}
                            image={newProduct.thumbnail}
                            textStyle={'capitalize'}
                            content={`${newProduct.price} VND`}
                        />
                    </FlexWrapper>
                ))}
            </ProductWrapper>
            <hr />
            <Title content={'sản phẩm hot'} rightContent={'Xem thêm...'} />
            <ProductWrapper flexWrapper>
                {hotProducts.map((hotProduct) => (
                    <FlexWrapper key={hotProduct.id}>
                        <Card
                            title={hotProduct.name}
                            onClick={() => alert('say hi')}
                            image={hotProduct.thumbnail}
                            textStyle={'capitalize'}
                            content={`${hotProduct.price} VND`}
                        />
                    </FlexWrapper>
                ))}
            </ProductWrapper>
            <hr />
            <Title content={'hàng mới về'} rightContent={'Xem thêm...'} />
            <ProductWrapper flexWrapper>
                {newImports.map((newImport) => (
                    <FlexWrapper key={newImport.id}>
                        <Card
                            title={newImport.name}
                            onClick={() => alert('say hi')}
                            image={newImport.thumbnail}
                            textStyle={'capitalize'}
                            content={`${newImport.price} VND`}
                        />
                    </FlexWrapper>
                ))}
            </ProductWrapper>
        </div>
    )
}

export default Home
