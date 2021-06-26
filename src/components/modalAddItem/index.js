import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Background, CloseModalButton, FormRecord, ModalHeader, ModalWrapper } from './modalAddItemComp'
import { categoryType } from './data'

const ModalAddItem = ({showModal, setShowModal}) => {

    const [values, setValues] = useState({
        itemName: '',
        category: '',
        description: '',
        price: 0,
        discount: 0,
    })

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }
    
    const handleChangeCategory = (event) => {
        // console.log(event.target.value)
        setValues({ ...values, category: event.target.value})
    };

    const handleChangeDescription = (event) => {
        setValues({ ...values, description: event.target.value})
    };

    const handleChangePrice = (event) => {
        setValues({ ...values, price: event.target.value})
    };

    const handleChangeDiscount = (event) => {
        setValues({ ...values, discount: event.target.value})
    };

    const handleSaveItem = () => {
        console.log(values)
        setValues({ ...values, itemName: '', category: '', description: '', price: 0, discount: 0})
        setShowModal(false)
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                    <ModalWrapper>
                        <ModalHeader>
                            Add Item
                        </ModalHeader>
                        <CloseModalButton onClick={() => setShowModal (prev => !prev)}/>
                        <FormRecord>
                            <TextField 
                                required
                                value={values.itemName}
                                onChange={event => setValues({ ...values, itemName: event.target.value})}
                                label="Item name" 
                                fullWidth 
                                variant="filled"
                                error={values.itemName.length === 0 ? true : false} 
                                helperText={values.itemName.length === 0 ? "Can't be empty" : false} 
                            />
                            <TextField
                                required fullWidth
                                size="small"
                                style={{ marginTop: 20 }}
                                select
                                label="Category"
                                onChange={handleChangeCategory}
                                variant="filled"
                                >
                                {categoryType.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                required fullWidth multiline rows={2}
                                size="small"
                                style={{ marginTop: 20 }}
                                label="Description"
                                value={values.description}
                                onChange={handleChangeDescription}
                                variant="filled"
                                >
                            </TextField>
                            <TextField
                                required fullWidth
                                size="small"
                                style={{ marginTop: 20 }}
                                label="Price"
                                type="number"
                                onChange={handleChangePrice}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                            />
                            <TextField
                                required fullWidth
                                size="small"
                                style={{ marginTop: 20 }}
                                label="Discount (%)"
                                type="number"
                                onChange={handleChangeDiscount}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                            />
                            <Button 
                                disabled={(values.itemName.length > 0 && values.category.length > 0 && values.description.length > 0 && values.price >= 0 && values.discount >= 0) ? false : true}
                                variant="outlined" 
                                color="primary" 
                                style={{marginTop: 20}}
                                onClick={handleSaveItem}
                            >
                                SAVE
                            </Button>
                        </FormRecord>
                    </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    )
}

export default ModalAddItem
