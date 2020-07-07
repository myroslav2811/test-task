import React, { ReactElement } from 'react'
import Link from 'next/link'
import PostsList from '../components/PostsList'
import { Button, HeaderBackground, Container, HeaderWrapper } from '../styles'

function Index(): ReactElement {

    return (
        <>
            <HeaderBackground>
                <Container>
                    <HeaderWrapper>
                        <Link href='/posts/new'>
                            <Button>Create new post</Button>
                        </Link>
                    </HeaderWrapper>
                </Container>
            </HeaderBackground>
            <Container>
                <PostsList />
            </Container>
        </>
    )
}

export default Index