import React, { Fragment } from 'react'
import classNames from 'classnames/bind'

import styles from './PackageManagement.module.scss'
import { FlexWrapper, Wrapper } from '~/components/Popper'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

const fakePackages = [
    {
        id: 'askjahsd1jq',
        packageInfo: 'x2 Quần Jean, size M\nx1 Áo Thun, size M\nx1 Áo Kiểu, size M',
        userInfo: 'Đào Đại Dương\nĐại chỉ: KTX khu B, Đại học Quốc gia TPHCM',
        totalPrice: '549 000 VND',
    },
    {
        id: 'asdjhasdjkh',
        packageInfo: 'x2 Quần Jean, size M\nx1 Áo Thun, size M\nx1 Áo Kiểu, size M',
        userInfo: 'Đào Đại Dương\nĐại chỉ: KTX khu B, Đại học Quốc gia TPHCM',
        totalPrice: '549 000 VND',
    },
    {
        id: 'kjasdkjasds',
        packageInfo: 'x2 Quần Jean, size M\nx1 Áo Thun, size M\nx1 Áo Kiểu, size M',
        userInfo: 'Đào Đại Dương\nĐại chỉ: KTX khu B, Đại học Quốc gia TPHCM',
        totalPrice: '549 000 VND',
    },
]

const headerTable = [
    { column: 1, width: 2, name: 'Mã đơn hàng' },
    { column: 2, width: 3, name: 'Người nhận hàng' },
    { column: 3, width: 2, name: 'Đơn hàng' },
    { column: 4, width: 2, name: 'Tổng tiền' },
    { column: 5, width: 3, name: '' },
]

function PackageManagement() {
    return (
        <div className={cx('wrapper')}>
            {fakePackages.length > 0 && (
                <Fragment>
                    <Wrapper flexWrapper>
                        {headerTable.map((item) => (
                            <Fragment key={item.column}>
                                <FlexWrapper xxl={item.width} xl={item.width} lg={item.width} md={item.width}>
                                    <strong>{item.name}</strong>
                                </FlexWrapper>
                            </Fragment>
                        ))}
                    </Wrapper>
                    <div className={cx('bottom-line')} />
                </Fragment>
            )}
            {fakePackages.map((fakePackage) => (
                <Fragment key={fakePackage.id}>
                    <Wrapper flexWrapper>
                        <FlexWrapper className={cx('package-col-info')} xxl={2} xl={2} lg={2} md={2}>
                            {fakePackage.id}
                        </FlexWrapper>
                        <FlexWrapper className={cx('package-col-info')} xxl={3} xl={3} lg={3} md={3}>
                            {fakePackage.userInfo}
                        </FlexWrapper>
                        <FlexWrapper className={cx('package-col-info')} xxl={2} xl={2} lg={2} md={2}>
                            {fakePackage.packageInfo}
                        </FlexWrapper>
                        <FlexWrapper className={cx('package-col-info')} xxl={2} xl={2} lg={2} md={2}>
                            {fakePackage.totalPrice}
                        </FlexWrapper>
                        <FlexWrapper className={cx('package-col-info')} xxl={3} xl={3} lg={3} md={3}>
                            <Button primary className={cx('confirm-btn')}>
                                Xác nhận
                            </Button>
                            <Button primary className={cx('remove-btn')}>
                                Xóa
                            </Button>
                        </FlexWrapper>
                    </Wrapper>
                    <div className={cx('bottom-line')} />
                </Fragment>
            ))}
            {fakePackages.length < 1 && <h2 className={cx('no-package')}>Không có đơn hàng nào!</h2>}
        </div>
    )
}

export default PackageManagement
