import React from 'react'
import { Container, Subtotal, Tax, Payment, LogoWrapper, Logo, Caption, Button } from './billComp'
import { GiCash } from 'react-icons/gi'
import { RiCoupon2Fill } from 'react-icons/ri'


const BillComponent = () => {
    return (
        <>
            <Container>
                <h2>Bills</h2>
                <Subtotal>
                    <p>Subtotal</p>
                    <p>IDR 10,000</p>
                </Subtotal>
                <Tax>
                    <p>Tax (10%)</p>
                    <p>IDR 1,000</p>
                </Tax>
                <Payment>
                    <h2>Payment Method</h2>
                    <LogoWrapper>
                        <Logo>
                            <GiCash />
                            <Caption>Cash</Caption>
                        </Logo>
                        <Logo>
                            <RiCoupon2Fill />
                            <Caption>Coupon</Caption>
                        </Logo>
                    </LogoWrapper>
                </Payment>
                <Button><h3>Print Bill</h3></Button>
            </Container>
        </>
    )
}

export default BillComponent
