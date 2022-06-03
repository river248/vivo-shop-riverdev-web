import React, { Fragment, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './UserManagement.module.scss'
import { FlexWrapper, Wrapper } from '~/components/Popper'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

//When having API, remove it
const fakeUsers = [
    { id: 1, name: 'Đào Đại Dương', role: 'Admin', email: 'daodaiduong2000@gmail.com', phone: '084 634 6869' },
    { id: 2, name: 'Phạm Viết Chiến', role: 'User', email: 'phamvietchien2000@gmail.com', phone: '012 345 6789' },
    { id: 3, name: 'Phạm Minh Nhi', role: 'User', email: 'daodaiduong2000@gmail.com', phone: '098 765 4321' },
]

function UserManagenment() {
    // When haing API, remove it
    const [listUser, setListUser] = useState([...fakeUsers])

    const handleRemoveUser = (userId) => {
        let currentUsers = listUser.filter((user) => user.id !== userId)
        setListUser([...currentUsers])
    }

    return (
        <div className={cx('wrapper')}>
            {listUser.map((user) => (
                <Fragment key={user.id}>
                    <Wrapper flexWrapper>
                        <FlexWrapper className={cx('user-col-info')} xxl={4} xl={4} lg={4} md={4}>
                            {user.name}
                        </FlexWrapper>
                        <FlexWrapper className={cx('user-col-info')} xxl={5} xl={5} lg={5} md={5}>
                            <div>{user.phone}</div>
                            <div>{user.email}</div>
                        </FlexWrapper>
                        <FlexWrapper className={cx('user-col-info')} xxl={2} xl={2} lg={2} md={2}>
                            {user.role}
                        </FlexWrapper>
                        <FlexWrapper className={cx('user-col-info')} xxl={1} xl={1} lg={1} md={1}>
                            <Button primary className={cx('remove-btn')} onClick={() => handleRemoveUser(user.id)}>
                                Xóa
                            </Button>
                        </FlexWrapper>
                    </Wrapper>
                    <div className={cx('bottom-line')} />
                </Fragment>
            ))}
            {!listUser.length && <h2 className={cx('no-user')}>HIỆN TẠI CHƯA CÓ USER NÀO !</h2>}
        </div>
    )
}

export default UserManagenment
