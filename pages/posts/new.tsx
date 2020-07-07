import React, { ReactElement, useState, SyntheticEvent, ChangeEvent } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { createNewPost } from '../../redux/actions/postsActions'
import Router from 'next/router'
import { Button, HeaderBackground, Container, HeaderWrapper, InputTitle, InputBody, Form } from '../../styles'

const newPost = (): ReactElement => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()

    const onSubmitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(createNewPost(title, body))
        setTimeout(() => {
            Router.push('/')
        }, 1000)
    }

    return (
        <>
            <HeaderBackground>
                <Container>
                    <HeaderWrapper>
                        <Link href='/'>
                            <Button>Back to all posts</Button>
                        </Link>
                    </HeaderWrapper>
                </Container>
            </HeaderBackground>
            <Container>
                <Form onSubmit={onSubmitHandler}>
                    <p>
                        <InputTitle placeholder='Put title here' value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                    </p>
                    <p>
                        <InputBody placeholder='Put post here' value={body} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)} />
                    </p>
                    <p>
                        <Button type='submit'>Create post</Button>
                    </p>
                </Form>
            </Container>
        </>
    )
}

export default newPost