import React, { Fragment } from 'react'
import Tippy from '@tippyjs/react/headless'
import PropType from 'prop-types'
import { useQuery } from '@apollo/client'
import classNames from 'classnames/bind'
import { useLocation } from 'react-router-dom'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Navigation.module.scss'
import Button from '~/components/Button'
import { GET_CATEGORY_BY_TYPE } from '~/apollo/categoryApollo/queries'
import config from '~/config'
import convertLink from '~/utils/convertLink'
import { useQueryHook } from '~/hooks'
import { convertToLowerCase } from '~/utils/convertString'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

function SubNav({ subNavItem }) {
    const location = useLocation()
    let query = useQueryHook()

    const { loading, error, data } = useQuery(GET_CATEGORY_BY_TYPE, {
        variables: {
            type: subNavItem.type,
        },
        skip: subNavItem.type === undefined,
    })

    if (error) {
        toast.error(error)
        return <></>
    }

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <Tippy
                placement="bottom-start"
                interactive
                hideOnClick={false}
                render={(attrs) => (
                    <div className={cx('dropdown-menu')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {subNavItem.categories ? (
                                <Fragment>
                                    {subNavItem.categories.map((category) => {
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
                                </Fragment>
                            ) : (
                                <Fragment>
                                    {!loading &&
                                        data?.listCategories.map((category) => {
                                            return (
                                                <div key={category.id} className={cx('menu-item')}>
                                                    <Button
                                                        size="large"
                                                        className={cx('custom-dropdown-btn')}
                                                        to={`${config.routes.product}?type=${convertToLowerCase(
                                                            category.type,
                                                        )}&category=${category.id}&name=${convertLink(category.name)}`}
                                                    >
                                                        {category.name}
                                                    </Button>
                                                </div>
                                            )
                                        })}
                                </Fragment>
                            )}
                        </PopperWrapper>
                    </div>
                )}
            >
                <li>
                    <Button className={cx('custom-btn')} text>
                        {subNavItem.name}
                    </Button>
                    {location.pathname === query.get('category') && <div className={cx('current-page')} />}
                </li>
            </Tippy>
        </div>
    )
}

SubNav.propTypes = {
    subNavItem: PropType.object,
}

export default React.memo(SubNav)
