import React from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './Navigation.module.scss'
import Button from '~/components/Button'
import { Wrapper as PopperWrapper } from '~/components/Popper'

const cx = classNames.bind(styles)

function Navigation() {
    const navItems = [
        { name: 'TRANG CHỦ', path: '/' },
        {
            name: 'ÁO',
            categories: [
                { id: 'somi', name: 'Sơ mi', path: '/top?type=somi' },
                { id: 'aokieu', name: 'Áo kiểu', path: '/top?type=aokieu' },
                { id: 'thun', name: 'Áo thun', path: '/top?type=aothun' },
            ],
        },
        {
            name: 'QUẦN',
            categories: [
                { id: 'somi', name: 'Quần jean', pahth: '/bottom?type=jean' },
                { id: 'quankieu', name: 'Quần kiểu', pahth: '/bottom?type=quankieu' },
            ],
        },
        {
            name: 'VÁY',
            categories: [
                { id: 'chanvay', name: 'Chân váy', path: '/bottom-girl?type=chanvay' },
                { id: 'dam', name: 'Đầm', path: '/bottom-girl?type=dam' },
            ],
        },
        {
            name: 'TIPS',
            categories: [
                { id: 'tip1', name: 'Đi học mặc gì?', path: '/tip/1' },
                { id: 'tip2', name: 'Công sở mặc gì?', path: '/tip/2' },
                { id: 'tip3', name: 'Tips phối màu đỉnh', path: '/tip/3' },
            ],
        },
        { name: 'GIỚI THIỆU', path: '/introduce' },
        { name: 'LIÊN HỆ', path: '/contact' },
    ]

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
                            </li>
                        )
                    }
                    return (
                        <Tippy
                            key={index}
                            placement="bottom-start"
                            interactive
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
                            </li>
                        </Tippy>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation
