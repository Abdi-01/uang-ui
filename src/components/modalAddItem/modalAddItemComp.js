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
    width: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    padding: 0;
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

export const FormRecord = styled.div`
    padding: 20px;
    text-align: center;
`

export const LeftForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    max-width: 600px;
    text-align: left;
    border-right: 2px solid black;
`

export const RightForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    text-align: left;
    max-width: 400px;
`


export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    p {
        margin-bottom: 1rem;
    }
    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`