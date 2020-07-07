import styled from 'styled-components'

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #ff4a00;
    border: none;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const HeaderBackground = styled.div`
    background-color: #000;
    padding: 30px 0;
`

export const Post = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px;
    margin-top: 20px;
    flex-basis: 400px;
    height: 350px;
    overflow: hidden;
    &:hover {
        background-color: aliceblue;
    }
`

export const PostsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const PostHeader = styled.h2`
    margin: 0;
    font-size: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 370px;
    overflow: hidden;
`

export const PostBody = styled.p`
    font-size: 25px;
    max-height: 200px;
    overflow: hidden;
    margin-bottom: 0;
    max-width: 400px;
`

export const InputTitle = styled.input`
    box-sizing: border-box;
    width: 700px;
    font-size: 20px;
    padding: 10px;
`

export const InputBody = styled.textarea`
    box-sizing: border-box;
    width: 700px;
    resize: none;
    font-size: 20px;
    padding: 10px;
    height: 500px
`

export const Form = styled.form`
    margin: 0 auto;
    width: 700px;
`

export const PostHead = styled.h1`
    margin: 0;
    font-size: 30px;
`

export const PostText = styled.p`
    font-size: 25px;
`