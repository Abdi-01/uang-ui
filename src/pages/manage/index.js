import React, { useState } from 'react'
import ModalAddItem from '../../components/modalAddItem'
import SidebarComponent from '../../components/sidebar'
import { ManageWrapper, MenuWrapper } from './managePage'
import Button from '@material-ui/core/Button';
import ItemTableComponent from '../../components/table';

const ManagePage = () => {
    const [showModal, setShowModal] = useState(false)

    // open modal function
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <>
            <MenuWrapper>
                <SidebarComponent/>
                <ManageWrapper>
                    <h1>Manage Page</h1>
                    <Button variant="contained" color="primary" onClick={openModal}>
                        Add Item
                    </Button>
                    <ItemTableComponent/>
                </ManageWrapper>
            </MenuWrapper>
            <ModalAddItem showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default ManagePage
