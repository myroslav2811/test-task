import React, { ReactElement } from 'react'
import Link from 'next/link'
import { postType } from '../interfaces/posts'
import { Post, PostHeader, PostBody } from '../styles'

const PostItem = ({ id, title, body }: postType): ReactElement => {
    return (
        <Link href='/posts/[id]' as={`/posts/${id}`}>
            <Post>
                <PostHeader>{title}</PostHeader>
                <PostBody>{body}</PostBody>
            </Post>
        </Link>
    )
}

export default PostItem