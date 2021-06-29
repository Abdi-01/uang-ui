import styled from 'styled-components';
import { MdClose } from 'react-icons/md'

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalWrapper = styled.div`
    width: 700px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    padding: 0;
    z-index: 100;
`

export const ModalHeader = styled.div`
    font-size: 20px;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid black;
`

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    padding: 0;
    z-index: 10;
`

export const DetailBill = styled.div`
    padding: 20px;
    text-align: center;
`

export const BillDetail = styled.div`
    border-bottom: 1px solid grey;
    margin: 10px 0;
`

export const CardItem = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Text = styled.p`
    margin: 0;
    font-size: 15px;
`

export const TexTotal = styled.p`
    margin: 0;
    font-size: 15px;
    font-weight: 700;
`

export const Payment = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    border-bottom: 1px solid grey;
`
