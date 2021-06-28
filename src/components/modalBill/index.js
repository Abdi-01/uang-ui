import React, { useRef } from 'react'
import { useSpring, animated } from "react-spring";
import {
  Background,
  CloseModalButton,
  ModalHeader,
  ModalWrapper,
} from "./modalBillComp";

const ModalBill = ({showModal, setShowModal, data}) => {
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

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                    <ModalWrapper>
                        <ModalHeader>
                            Bill Receipt
                        </ModalHeader>
                        <CloseModalButton onClick={() => setShowModal (prev => !prev)}/>
                    </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    )
}

export default ModalBill
