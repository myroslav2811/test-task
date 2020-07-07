import React, { ReactElement, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { rootStateType } from '../interfaces/rootState'
import { getPost } from '../redux/actions/postsActions'
import { PostHead, PostText } from '../styles'

type propsType = {
    id: string
}

const PostPage = ({ id }: propsType): ReactElement => {

    const post = useSelector((state: rootStateType) => state.postReducer.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost(id))
    }, [])


    return ( <>
                    <PostHead>{post && post.title}</PostHead>
                    <PostText>{post && post.body}</PostText>
                </>
    )
}

export default PostPage