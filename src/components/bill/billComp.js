import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 500px;
    background-color: white;
`

export const Subtotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
`

export const Tax = styled.div`
    display: flex;
    justify-content: space-between;
    color: grey;
    margin: 0;
    border-bottom: 1px solid grey;
`

export const Payment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-color: 2px solid #795548;
`

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
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
    font-size: 25px;
    width: 80px;
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

export const Button = styled.button`
    width: 100%;
    color: white;
    background-color: #795548;
    /* padding: 15px; */
    cursor: pointer;
    margin: 25px 0;
    border-radius: 15px;
    transition: 0.3s;

    :hover {
        background-color: #5d4037;
    }
`
    