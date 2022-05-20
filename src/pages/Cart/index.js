import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import { Helmet } from 'react-helmet-async'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './Cart.module.scss'
import HeaderImage from '~/components/HeaderImage'
import images from '~/assets/images'
import { FlexWrapper, Wrapper } from '~/components/Popper'
import Image from '~/components/Image'
import Input from '~/components/Input'
import Button from '~/components/Button'
import { cart } from '~/data'
import { formatMoney } from '~/utils'

const cx = classNames.bind(styles)

function Cart() {
    const total = cart.reduce((result, item) => {
        return result + item.product.price * item.quantity
    }, 0)

    return (
        <Fragment>
            <Helmet>
                <title>Giỏ Hàng</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <HeaderImage image={images.cartBanner} alt={'Cart'} />
                <div className={cx('container')}>
                    <Wrapper className={cx('row')} flexWrapper>
                        <FlexWrapper className={cx('item')} xxl={5} xl={5} lg={5}>
                            <span>Sản Phẩm</span>
                        </FlexWrapper>
                        <FlexWrapper className={cx('item', 'quantity')} xxl={2} xl={2} lg={2}>
                            <span>Số Lượng</span>
                        </FlexWrapper>
                        <FlexWrapper className={cx('item', 'price')} xxl={3} xl={3} lg={3}>
                            <span>Giá</span>
                        </FlexWrapper>
                        <FlexWrapper className={cx('item')} xxl={2} xl={2} lg={2} />
                    </Wrapper>
                    {cart.map((item) => (
                        <Wrapper key={item.product.id} flexWrapper className={cx('row')}>
                            <FlexWrapper className={cx('item')} xxl={5} xl={5} lg={5}>
                                <div className={cx('product')}>
                                    <div className={cx('image')}>
                                        <Image src={item.product.thumbnail} ratio="ratio3x4" alt={item.product.name} />
                                    </div>
                                    <span>{item.product.name}</span>
                                </div>
                            </FlexWrapper>
                            <FlexWrapper className={cx('item')} xxl={2} xl={2} lg={2}>
                                <button className={cx('change-quantity-btn')}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <Input
                                    min={1}
                                    max={999}
                                    value={item.quantity}
                                    className={cx('quantity-inp')}
                                    primary
                                    type="number"
                                    readOnly
                                    onChange={(e) => console.log(e.target.value)}
                                />
                                <button className={cx('change-quantity-btn')}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </FlexWrapper>
                            <FlexWrapper className={cx('item', 'price')} xxl={3} xl={3} lg={3}>
                                <span>{formatMoney(item.product.price)} VND</span>
                            </FlexWrapper>
                            <FlexWrapper className={cx('item')} xxl={2} xl={2} lg={2}>
                                <Button primary className={cx('remove-btn')}>
                                    Xóa
                                </Button>
                            </FlexWrapper>
                        </Wrapper>
                    ))}
                    <Wrapper flexWrapper>
                        <FlexWrapper xxl={5} xl={5} lg={5} />
                        <FlexWrapper className={cx('footer', 'quantity')} xxl={2} xl={2} lg={2}>
                            <h3>Tổng cộng: </h3>
                        </FlexWrapper>
                        <FlexWrapper className={cx('footer', 'price')} xxl={3} xl={3} lg={3}>
                            <span>{formatMoney(total)} VND</span>
                        </FlexWrapper>
                        <FlexWrapper className={cx('footer')} xxl={2} xl={2} lg={2}>
                            <Button to={'/payment'} primary className={cx('payment-btn')}>
                                Thanh Toán
                            </Button>
                        </FlexWrapper>
                    </Wrapper>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart
