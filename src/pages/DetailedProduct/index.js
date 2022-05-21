import React from 'react'
import classNames from 'classnames/bind'

import styles from './DetailedProduct.module.scss'
import { FlexWrapper, Wrapper, Wrapper as ProductWrapper } from '~/components/Popper'
import Image from '~/components/Image'
import Button from '~/components/Button'
import { newImports } from '~/data'
import Card from '~/components/Card'
import convertLink from '~/utils/convertLink'
import { addToCart } from '~/apollo/cartApollo'

const cx = classNames.bind(styles)

function DetailedProduct() {
    return (
        <div className={cx('wrapper')}>
            <Wrapper flexWrapper>
                <FlexWrapper xxl={3} xl={3} lg={3}>
                    <div className={cx('image')}>
                        <Image src={newImports[0].thumbnail} ratio="ratio3x4" alt="image" />
                    </div>
                </FlexWrapper>
                <FlexWrapper xxl={9} xl={9} lg={9} className={cx('container')}>
                    <div className={cx('header')}>
                        <h2>{newImports[0].name}</h2>
                        <h3>{newImports[0].price} VND</h3>
                    </div>
                    <div className={cx('content')}>
                        Áo Thun được thiết kế in hình gấu nâu tạo điểm nhấn. <br />
                        Chất liệu: Thun Cotton <br />
                        Form dáng: Croptop & Freesize <br />
                        Màu sắc: Xám Sản xuất: Việt Nam.
                    </div>
                    <div className={cx('footer')}>
                        <div className={cx('size')}>
                            <input id="sizeS" type={'checkbox'} />
                            <label htmlFor="sizeS">Size S</label>
                            <input id="sizeM" type={'checkbox'} />
                            <label htmlFor="sizeM">Size M</label>
                            <input id="sizeL" type={'checkbox'} />
                            <label htmlFor="sizeL">Size L</label>
                        </div>
                        <Button primary onClick={() => addToCart(newImports[0], 1)}>
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </FlexWrapper>
            </Wrapper>
            <hr />
            <h2>SẢN PHẨM LIÊN QUAN</h2>
            <ProductWrapper flexWrapper>
                {newImports.map((newImport) => (
                    <FlexWrapper key={newImport.id}>
                        <Card
                            to={`/detailed?product=${convertLink(newImport.name)}`}
                            title={newImport.name}
                            // onClick={() => alert('say hi')}
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

export default DetailedProduct
