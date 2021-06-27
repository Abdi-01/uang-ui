import styled from 'styled-components'

export const Container = styled.div`
    background-color: #f5f5f5;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    width: 100vw;
`

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

export const CardWrapper = styled.div`
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 10px;
    align-items: flex-start;
`

export const Image = styled.img`
    width: 100px;
    margin: auto;
    display: block;
    border-radius: 15px;
`

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    justify-content: space-around;
    align-items: flex-start;
`

export const Title = styled.h4`
    margin: 0;
    padding: 0;
`

export const Text = styled.p`
    font-size: 15px;
    margin: 0;
`

export const ItemWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
    justify-content: flex-start;
    align-items: flex-start;
`

export const BillContainer = styled.div`
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

export const ButtonBill = styled.button`
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

export const BillCard = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const ImageBill = styled.img`
    border-radius: 5px;
    width: 100px;
    height: 100px;
`

export const ContentBill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 10px;
`

export const EditBill = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
`
