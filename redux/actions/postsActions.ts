import { Dispatch } from "react";
import { SetPosts, SetPost, ClearPost, CreatePost } from '../../interfaces/posts'
import axios, { AxiosResponse } from 'axios'
import { GET_POSTS, GET_POST, CLEAR_POST, CREATE_POST } from '../types'

export const getPosts = (): Function => (dispatch: Dispatch<SetPosts>): void => {
    axios.get('https://simple-blog-api.crew.red/posts')
        .then((res: AxiosResponse) => {
            dispatch({ type: GET_POSTS, payload: res.data })
        })
}

export const getPost = (id: string) => (dispatch: Dispatch<SetPost>): void => {
    axios.get(`https://simple-blog-api.crew.red/posts/${id}`, { params: { _embed: 'comments' } })
        .then((res: AxiosResponse) => {
            dispatch({ type: GET_POST, payload: res.data })
        })
}

export const clearPost = () => (dispatch: Dispatch<ClearPost>): void => {
    dispatch({ type: CLEAR_POST, payload: null })
}

export const createNewPost = (title: string, body: string) => (dispatch: Dispatch<CreatePost>): void => {
    axios.post('https://simple-blog-api.crew.red/posts', { title, body })
        .then((res: AxiosResponse) => {
            dispatch({ type: CREATE_POST, payload: res.data })
        })
}