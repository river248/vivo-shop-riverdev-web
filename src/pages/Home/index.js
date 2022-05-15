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
            <img className={cx('img-home', 'img-bell')} src={images.bell} alt="bell" />
            <img className={cx('img-home', 'img-christmas')} src={images.christmas} alt="christmas" />
            <img className={cx('img-home', 'img-tree')} src={images.tree} alt="tree" />
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
                        >
                            {`${newProduct.price} VND`}
                        </Card>
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
                        >
                            {`${hotProduct.price} VND`}
                        </Card>
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
                        >
                            {`${newImport.price} VND`}
                        </Card>
                    </FlexWrapper>
                ))}
            </ProductWrapper>
        </div>
    )
}

export default Home
