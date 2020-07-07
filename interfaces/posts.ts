import { GET_POSTS, GET_POST, CLEAR_POST, CREATE_POST } from '../redux/types'


export type postType = {
  id: number
  title: string
  body: string
  date?: string
  comments?: []
}

export type postsType = {
  posts: Array<postType>
  loading: boolean
  post: postType | null
}

export type SetPosts = {
  type: typeof GET_POSTS
  payload: postsType
}

export type SetPost = {
  type: typeof GET_POST
  payload: postType
}

export type ClearPost = {
  type: typeof CLEAR_POST
  payload: null
}

export type PostParamsType = {
  id: string
}

export type CreatePost = {
  type: typeof CREATE_POST
  payload: postType
}