import React, { ReactElement } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import axios from 'axios'

import { postType } from '../../interfaces/posts'
import { PostParamsType } from '../../interfaces/posts'
import PostPage from '../../components/PostPage'
import { Button, HeaderBackground, Container, HeaderWrapper } from '../../styles'

const Post = ({ id }: PostParamsType): ReactElement => {


    return (
        <>
            <HeaderBackground>
                <Container>
                    <HeaderWrapper>
                        <Link href='/'>
                            <Button>Back to all posts</Button>
                        </Link>
                        <Link href='/posts/new'>
                            <Button>Create new post</Button>
                        </Link>
                    </HeaderWrapper>
                </Container>
            </HeaderBackground>
            <Container>
                <PostPage id={id} />
            </Container>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get('https://simple-blog-api.crew.red/posts');
    const posts = res.data;

    const paths = posts.map((post: postType) => ({
        params: { id: post.id.toString() },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id
        return { props: { id } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}

export default Post