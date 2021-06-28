import React, { useRef, useState } from 'react'
import { useSpring, animated } from "react-spring";
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

    // console.log("Bill data", data, payment)

    const printCardData = () => {
        return data.map((item) => {
            return  <CardItem>
                        <Text>{item.name} - {item.amount}</Text>
                        <Text>IDR {item.subtotal.toLocaleString()}</Text>
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
        // console.log(changeValue)
        return  <CardItem>
                    <TexTotal>TOTAL</TexTotal>
                    <TexTotal>IDR {result.toLocaleString()}</TexTotal>
                </CardItem>
    }

    console.log(data, payment)

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
                            {printTotal()}
                            <Payment>
                                <CardItem>
                                    <Text>Cash</Text>
                                    <Text>IDR {(payment.cash !== null ) ? parseInt(payment.cash).toLocaleString(): 0}</Text>
                                </CardItem>
                                <CardItem>
                                    <Text>Coupon</Text>
                                    <Text>IDR {(payment.coupon !== null ) ? parseInt(payment.coupon).toLocaleString(): 0}</Text>
                                </CardItem>
                            </Payment>
                        </DetailBill>
                    </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    )
}

export default ModalBill
