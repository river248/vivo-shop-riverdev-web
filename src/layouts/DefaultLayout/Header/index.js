import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import Search from '../../components/Search'
import config from '~/config'

const cx = classNames.bind(styles)

function Header() {
    const navigate = useNavigate()
    return (
        <header className={cx('wrapper')}>
            <Link to={config.routes.home} className={cx('logo')}>
                <img src={images.logo} alt="logo" />
            </Link>
            <div className={cx('left-container')}>
                <div className={cx('left-container-header')}>
                    <Button to={config.routes.login} className={cx('custom-btn')}>
                        Đăng nhập
                    </Button>
                    <span> hoặc </span>
                    <Button to={config.routes.signup} className={cx('custom-btn')}>
                        Tạo tài khoản
                    </Button>
                </div>
                <div className={cx('left-container-footer')}>
                    <Search />

                    <button onClick={() => navigate(config.routes.cart)}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        {/* <span className={cx('quantity-product')}>{cart.length > 99 ? '99+' : cart.length}</span> */}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
