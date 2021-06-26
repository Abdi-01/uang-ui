import React from 'react'
import { Container, Logo, Caption } from './sidebarComp'
import { ImSpoonKnife } from 'react-icons/im'
import { IoFastFoodOutline, IoLogOutOutline } from 'react-icons/io5'
import { FaMoneyCheckAlt } from 'react-icons/fa'

const styleLink = {
    "background-color": "#795548",
    "color": "white"
}

const styleDeco = {
    "text-decoration": "none"
}

const SidebarComponent = () => {


    return (
        <>
            <Container>
                <Logo exact to="/manage" activeStyle={styleLink} style={styleDeco}>
                    <ImSpoonKnife />
                    <Caption>Manage</Caption>
                </Logo>
                <Logo exact to="/" activeStyle={styleLink} style={styleDeco}>
                    <IoFastFoodOutline />
                    <Caption>Menu</Caption>
                </Logo>
                <Logo exact to="/report" activeStyle={styleLink} style={styleDeco}>
                    <FaMoneyCheckAlt />
                    <Caption>Report</Caption>
                </Logo>
                <Logo exact to="/logout" activeStyle={styleLink} style={styleDeco}>
                    <IoLogOutOutline />
                    <Caption>Logout</Caption>
                </Logo>
            </Container>
        </>
    )
}

export default SidebarComponent
