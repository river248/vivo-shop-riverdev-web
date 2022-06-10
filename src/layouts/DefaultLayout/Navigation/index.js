import React from 'react'
import classNames from 'classnames/bind'

import styles from './Navigation.module.scss'
import Button from '~/components/Button'
import { useLocation } from 'react-router-dom'
import config from '~/config'
import SubNav from './SubNav'

const cx = classNames.bind(styles)

const navItems = [
    { name: 'TRANG CHỦ', path: config.routes.home },
    {
        name: 'ÁO',
        type: 'TOP',
    },
    {
        name: 'QUẦN',
        type: 'BOT',
    },
    {
        name: 'VÁY',
        type: 'BOT_FM',
    },
    {
        name: 'TIPS',
        categories: [
            { id: 'tip1', name: 'Đi học mặc gì?', path: `${config.routes.tip}?number=1` },
            { id: 'tip2', name: 'Công sở mặc gì?', path: `${config.routes.tip}?number=2` },
            { id: 'tip3', name: 'Tips phối màu đỉnh', path: `${config.routes.tip}?number=3` },
        ],
    },
    { name: 'GIỚI THIỆU', path: config.routes.about },
    { name: 'LIÊN HỆ', path: config.routes.contact },
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
                    return <SubNav key={index} subNavItem={navItem} />
                })}
            </ul>
        </nav>
    )
}

export default Navigation
