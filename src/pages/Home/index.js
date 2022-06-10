import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import { Helmet } from 'react-helmet-async'

import styles from './Home.module.scss'
import Title from '~/components/Title'
import images from '~/assets/images'
import SlideShow from '~/components/SlideShow'
import ListProducts from './ListProducts'

const cx = classNames.bind(styles)

function Home() {
    return (
        <Fragment>
            <Helmet>
                <title>Vivo Shop</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <img className={cx('img-home', 'img-bell')} src={images.bell} alt="bell" />
                <img className={cx('img-home', 'img-christmas')} src={images.christmas} alt="christmas" />
                <img className={cx('img-home', 'img-tree')} src={images.tree} alt="tree" />
                <SlideShow />
                <Title content={'sản phẩm mới'} rightContent={'Xem thêm...'} />
                <ListProducts status="NEW" />
                <hr />
                <Title content={'sản phẩm hot'} rightContent={'Xem thêm...'} />
                <ListProducts status="HOT" />
                <hr />
                <Title content={'hàng mới về'} rightContent={'Xem thêm...'} />
                <ListProducts status="NEW_IMP" />
            </div>
        </Fragment>
    )
}

export default Home
