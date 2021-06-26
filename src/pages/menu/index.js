import React from 'react'
import CategoryComponent from '../../components/category'
import SidebarComponent from '../../components/sidebar'
import NavbarComponent from '../../components/navbar'
import BillComponent from '../../components/bill'
import { MenuWrapper, MainWrapper } from './menuPage'

const MenuPage = () => {
    return (
        <>
            <MenuWrapper>
                <SidebarComponent/>
                <MainWrapper>
                    <NavbarComponent />
                    <CategoryComponent/>
                </MainWrapper>
                <BillComponent/>
            </MenuWrapper>
        </>
    )
}

export default MenuPage
