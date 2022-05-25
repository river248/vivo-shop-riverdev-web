import React from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './Navigation.module.scss'
import Button from '~/components/Button'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { useLocation } from 'react-router-dom'
import routes from '~/config/routes'

const cx = classNames.bind(styles)

const navItems = [
    { name: 'TRANG CHỦ', path: routes.home },
    {
        name: 'ÁO',
        categories: [
            { id: 'somi', name: 'Sơ mi', path: `${routes.productTop}?type=ao-so-mi` },
            { id: 'aokieu', name: 'Áo kiểu', path: `${routes.productTop}?type=ao-kieu` },
            { id: 'thun', name: 'Áo thun', path: `${routes.productTop}?type=ao-thun` },
        ],
    },
    {
        name: 'QUẦN',
        categories: [
            { id: 'somi', name: 'Quần jean', path: `${routes.productBottom}?type=quan-jean` },
            { id: 'quankieu', name: 'Quần kiểu', path: `${routes.productBottom}?type=quan-kieu` },
        ],
    },
    {
        name: 'VÁY',
        categories: [
            { id: 'chanvay', name: 'Chân váy', path: `${routes.productBottomGirl}?type=chan-vay` },
            { id: 'dam', name: 'Đầm', path: `${routes.productBottomGirl}?type=dam` },
        ],
    },
    {
        name: 'TIPS',
        categories: [
            { id: 'tip1', name: 'Đi học mặc gì?', path: `${routes.tip}?number=1` },
            { id: 'tip2', name: 'Công sở mặc gì?', path: `${routes.tip}?number=2` },
            { id: 'tip3', name: 'Tips phối màu đỉnh', path: `${routes.tip}?number=3` },
        ],
    },
    { name: 'GIỚI THIỆU', path: routes.about },
    { name: 'LIÊN HỆ', path: routes.contact },
]

function Navigation() {
    const location = useLocation()

    return (
        <nav className={cx('wrapper')}>
            <ul>
                {navItems.map((navItem, index) => {
                    if (navItem.path) {
                        return (
                            <li key={index}>
                                <Button className={cx('custom-btn')} to={navItem.path}>
                                    {navItem.name}
                                </Button>
                                {navItem.path === location.pathname && <div className={cx('current-page')} />}
                            </li>
                        )
                    }
                    return (
                        <Tippy
                            key={index}
                            placement="bottom-start"
                            interactive
                            hideOnClick={false}
                            render={(attrs) => (
                                <div className={cx('dropdown-menu')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        {navItem.categories.map((category) => {
                                            return (
                                                <div key={category.id} className={cx('menu-item')}>
                                                    <Button
                                                        size="large"
                                                        className={cx('custom-dropdown-btn')}
                                                        to={category.path}
                                                    >
                                                        {category.name}
                                                    </Button>
                                                </div>
                                            )
                                        })}
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <li>
                                <Button className={cx('custom-btn')} text>
                                    {navItem.name}
                                </Button>
                                {navItem.categories[0].path.includes(location.pathname.concat('?')) && (
                                    <div className={cx('current-page')} />
                                )}
                            </li>
                        </Tippy>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation
