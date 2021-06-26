import React from 'react'
import { MenuWrapper, Logo, Caption } from './categoryComp'
import { IoFastFood } from 'react-icons/io5'
import { SiCoffeescript } from 'react-icons/si'
import { GiFruitBowl, GiFoodChain } from 'react-icons/gi'

const CategoryComponent = () => {
    return (
        <>
            <MenuWrapper>
                <Logo>
                    <IoFastFood />
                    <Caption>All</Caption>
                </Logo>
                <Logo>
                    <SiCoffeescript />
                    <Caption>Coffee</Caption>
                </Logo>
                <Logo>
                    <GiFruitBowl />
                    <Caption>Juice</Caption>
                </Logo>
                <Logo>
                    <GiFoodChain />
                    <Caption>Food</Caption>
                </Logo>
            </MenuWrapper>
        </>
    )
}

export default CategoryComponent
