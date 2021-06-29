import React, { useRef, useState } from 'react'
import { useSpring, animated } from "react-spring";
import Button from '@material-ui/core/Button';
import { URL_API } from '../../helper'
import axios from 'axios'
import {
  Background,
  CloseModalButton,
  ModalHeader,
  ModalWrapper,
  DetailBill,
  CardItem,
  Text,
  BillDetail,
  TexTotal,
  Payment
} from "./modalBillComp";

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = new Date()

const ModalBill = ({showModal, setShowModal, data, payment}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
          duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
    };

    const printCardData = () => {
        return data.map((item) => {
            return  <CardItem>
                        <Text>{item.name} - {item.amount}</Text>
                        <Text>+ IDR {item.subtotal.toLocaleString()}</Text>
                    </CardItem>
        })
    }

    const printTotal = () => {
        let values = []
        data.forEach(element => {
            values.push(element.subtotal)
        })
        let result = values.reduce((accumulator, currentValue) => accumulator + currentValue)
        let changeValue = parseInt(payment.cash) + parseInt(payment.coupon) - result
        // console.log("Coupon value", result, parseInt(payment.coupon))
        return  <CardItem>
                    <TexTotal>TOTAL</TexTotal>
                    {
                        (payment.coupon !== "") ? <TexTotal>+ IDR {result - parseInt(payment.coupon)}</TexTotal>
                        : <TexTotal>+ IDR {result}</TexTotal>
                    }
                </CardItem>
    }

    console.log("Bill data in receipt", data)

    const printBill = async () => {
        try {
            let values = data
            let config = {
                method: 'post',
                url: URL_API + 'receipt/create',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: values
            }
            await axios(config)
            setShowModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                    <ModalWrapper>
                        <ModalHeader>
                            BILL RECEIPT
                        </ModalHeader>
                        <CloseModalButton onClick={() => setShowModal (prev => !prev)}/>
                        <DetailBill>
                            {today.toLocaleDateString('WIB', options)}
                            <BillDetail>
                                {printCardData()}
                            </BillDetail>
                            <CardItem>
                                <Text>Coupon</Text>
                                <Text>- IDR {(payment.coupon !== null ) ? parseInt(payment.coupon).toLocaleString(): 0}</Text>
                            </CardItem>
                            {printTotal()}
                            <Payment>
                                <CardItem>
                                    <Text>Cash</Text>
                                    <Text>IDR {(payment.cash !== null ) ? parseInt(payment.cash).toLocaleString(): 0}</Text>
                                </CardItem>
                            </Payment>
                            <Button variant="contained" color="primary" onClick={printBill}>
                                PrintBill
                            </Button>
                        </DetailBill>
                    </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    )
}

export default ModalBill
