import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import Search from '../../components/Search'

const cx = classNames.bind(styles)

function Header() {
    const navigate = useNavigate()

    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="logo" />
            </div>
            <div className={cx('left-container')}>
                <div className={cx('left-container-header')}>
                    <Button to={'/login'} className={cx('custom-btn')}>
                        Đăng nhập
                    </Button>
                    <span> hoặc </span>
                    <Button to={'/signup'} className={cx('custom-btn')}>
                        Tạo tài khoản
                    </Button>
                </div>
                <div className={cx('left-container-footer')}>
                    <Search />

                    <button onClick={() => navigate('/cart')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
