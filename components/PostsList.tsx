import React, { ReactElement, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { postType } from '../interfaces/posts'
import { rootStateType } from '../interfaces/rootState'
import { getPosts } from '../redux/actions/postsActions'
import PostItem from './PostItem'
import { PostsContainer } from '../styles'

const PostsList = (): ReactElement => {

    const posts = useSelector((state: rootStateType) => state.postReducer.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <PostsContainer>
            {posts.map((post: postType) => <PostItem key={post.id}
                id={post.id}
                title={post.title}
                body={post.body} />)
            }
        </PostsContainer>
    )
}

export default PostsList;