import React from 'react'
import classNames from 'classnames/bind'

import styles from './SideContent.module.scss'
import Card from '~/components/Card'
import images from '~/assets/images'

const cx = classNames.bind(styles)

const listPosts = [
    { id: 1, title: 'Top 1 cách phối đồ cho nữ!', image: images.candytop, path: '/tip?number=1' },
    { id: 2, title: 'Top 2 cách phối đồ cho nữ!', image: images.candytop, path: '/tip?number=2' },
    { id: 3, title: 'Top 3 cách phối đồ cho nữ!', image: images.candytop, path: '/tip?number=3' },
    { id: 4, title: 'Top 4 cách phối đồ cho nữ!', image: images.candytop, path: '/tip?number=4' },
    { id: 5, title: 'Top 5 cách phối đồ cho nữ!', image: images.candytop, path: '/tip?number=5' },
]

function SideContent() {
    return (
        <div className={cx('wrapper')}>
            {listPosts.map((post) => (
                <Card
                    className={cx('post-card')}
                    key={post.id}
                    image={post.image}
                    ratio="ratio1x1"
                    title={post.title}
                    to={post.path}
                >
                    <span />
                </Card>
            ))}
        </div>
    )
}

export default SideContent
