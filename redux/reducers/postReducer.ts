import { postsType } from '../../interfaces/posts'
import { GET_POSTS, GET_POST, CREATE_POST } from '../types'

const initialState: postsType = {
    posts: [],
    post: null,
    loading: false
}

const postsReducer = (state = initialState, action: any): postsType => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: action.payload }
        case GET_POST:
            return { ...state, post: action.payload }
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload] }
        default:
            return state
    }
}

export default postsReducer