import styled from 'styled-components'

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    border-color: 2px solid #795548;
    margin: 20px 0;
`

export const Logo = styled.div`
    color: #fff;
    background: #d7ccc8;
    color: black;
    z-index: 1;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-size: 40px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        background: #795548;
        color: #fff;
    }
`

export const Caption = styled.p`
    color: black;
    font-size: 1rem;
    margin: 0;
    transition: 0.3s ease-in-out;
    ${Logo}:hover & {
        color: white;
    }
`