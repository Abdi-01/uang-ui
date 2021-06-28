import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
    /* position: fixed; */
    height: 100vh;
    min-width: 100px;
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
`

export const Logo = styled(NavLink)`
    color: #fff;
    background: white;
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
