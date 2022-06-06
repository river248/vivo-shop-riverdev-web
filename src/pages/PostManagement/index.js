import React, { Fragment } from 'react'
import classNames from 'classnames/bind'

import styles from './PostManagement.module.scss'
import { FlexWrapper, Wrapper } from '~/components/Popper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
const headerTable = [
    { column: 1, width: 5, name: 'Tiêu đề' },
    { column: 2, width: 2, name: 'Ngày đăng' },
    { column: 3, width: 3, name: 'Tác giả' },
    { column: 4, width: 1, name: '' },
    { column: 5, width: 1, name: '' },
]

const fakePosts = [
    { id: 1, name: 'Candy Top 1', date: '6/6/2022', author: 'Admin' },
    { id: 2, name: 'Candy Top 2', date: '6/6/2022', author: 'Admin' },
    { id: 3, name: 'Candy Top 3', date: '6/6/2022', author: 'Admin' },
    { id: 4, name: 'Candy Top 4', date: '6/6/2022', author: 'Admin' },
]

function PostManagement() {
    return (
        <div className={cx('wrapper')}>
            {' '}
            {fakePosts.length > 0 && (
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
            {fakePosts.map((fakePost) => (
                <Fragment key={fakePost.id}>
                    <Wrapper flexWrapper>
                        <FlexWrapper className={cx('col-item')} xxl={5} xl={5} lg={5}>
                            {fakePost.name}
                        </FlexWrapper>
                        <FlexWrapper className={cx('col-item')} xxl={2} xl={2} lg={2}>
                            {fakePost.date}
                        </FlexWrapper>
                        <FlexWrapper className={cx('col-item')} xxl={3} xl={3} lg={3}>
                            {fakePost.author}
                        </FlexWrapper>
                        <FlexWrapper xxl={1} xl={1} lg={1}>
                            <div className={cx('icon-btn', 'edit-icon')}>
                                <FontAwesomeIcon icon={faEdit} />
                            </div>
                        </FlexWrapper>
                        <FlexWrapper xxl={1} xl={1} lg={1}>
                            <div className={cx('icon-btn', 'remove-icon')}>
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </FlexWrapper>
                    </Wrapper>
                    <div className={cx('bottom-line')} />
                </Fragment>
            ))}
            {fakePosts.length < 1 && <h2 className={cx('no-post')}>Không có bài viết nào!</h2>}
            <div className={cx('add-post')}>
                <div className={cx('add-icon')}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <h3>Thêm bài viết</h3>
            </div>
        </div>
    )
}

export default PostManagement
