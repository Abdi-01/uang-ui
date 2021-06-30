import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import { getItemAction } from "../../actions";
import { categoryType } from "./data";
import { URL_API } from "../../helper";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useSpring, animated } from "react-spring";
import {
  Background,
  CloseModalButton,
  FormRecord,
  ModalHeader,
  ModalWrapper,
} from "./modalAddItemComp";

const ModalAddItem = ({ showModal, setShowModal, data }) => {
  const [values, setValues] = useState({
    id: null,
    name: "",
    idcategory: null,
    description: "",
    price: 0,
    discount: 0,
    imageURL: "",
  });

  const modalRef = useRef();
  const dispatch = useDispatch();

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

  const handleChangeCategory = (event) => {
    console.log(event.target.value);
    setValues({ ...values, idcategory: event.target.value });
  };

  const handleChangeDescription = (event) => {
    setValues({ ...values, description: event.target.value });
  };

  const handleChangePrice = (event) => {
    setValues({ ...values, price: event.target.value });
  };

  const handleChangeDiscount = (event) => {
    setValues({ ...values, discount: event.target.value });
  };

  const handleChangeImageURL = (event) => {
    setValues({ ...values, imageURL: event.target.value });
  };

  const handleSaveItem = async () => {
    try {
      console.log(values);
      let config = {
        method: "post",
        url: URL_API + "item/create",
        headers: {
          "Content-Type": "application/json",
        },
        data: values,
      };
      let response = await axios(config);
      console.log("Response add item", response);
      dispatch(getItemAction());
      setValues({
        ...values,
        name: "",
        idcategory: null,
        description: "",
        price: 0,
        discount: 0,
      });
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInitialData = () => {
    // console.log("Initial data before", data)
    if (data !== undefined && data !== null) {
      // console.log("Initial data after", data)
      setValues({
        ...values,
        id: data.id,
        name: data.name,
        idcategory: data.idcategory,
        description: data.description,
        price: data.price,
        discount: data.discount,
        imageURL: data.imageURL,
      });
    }
  };

  const handleUpdateItem = async () => {
    try {
      // handleInitialData()
      console.log("Data update in modal", values);
      let config = {
        method: "patch",
        url: URL_API + "item/update",
        headers: {
          "Content-Type": "application/json",
        },
        data: values,
      };
      let response = await axios(config);
      console.log("Response add item", response);
      dispatch(getItemAction());
      setValues({
        ...values,
        name: "",
        idcategory: null,
        description: "",
        price: 0,
        discount: 0,
      });
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    handleInitialData();
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  console.log(data);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalHeader>
                {data !== undefined ? "Update Item" : "Add Item"}
              </ModalHeader>
              <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
              <FormRecord>
                <TextField
                  required
                  value={values.name}
                  onChange={(event) =>
                    setValues({ ...values, name: event.target.value })
                  }
                  label="Item name"
                  fullWidth
                  variant="filled"
                  // error={values.name.length === 0 ? true : false}
                  // helperText={values.name.length === 0 ? "Can't be empty" : false}
                />
                <TextField
                  required
                  fullWidth
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
                  required
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                  style={{ marginTop: 20 }}
                  label="Description"
                  value={values.description}
                  onChange={handleChangeDescription}
                  variant="filled"
                ></TextField>
                <TextField
                  required
                  fullWidth
                  value={values.price}
                  size="small"
                  style={{ marginTop: 20 }}
                  label="Price"
                  type="number"
                  onChange={handleChangePrice}
                  variant="filled"
                />
                <TextField
                  required
                  fullWidth
                  size="small"
                  style={{ marginTop: 20 }}
                  label="Discount (%)"
                  type="number"
                  onChange={handleChangeDiscount}
                  variant="filled"
                  value={values.discount}
                />
                <TextField
                  required
                  fullWidth
                  size="small"
                  style={{ marginTop: 20 }}
                  label="Image URL"
                  type="url"
                  onChange={handleChangeImageURL}
                  variant="filled"
                  value={values.imageURL}
                />
                <Button
                  // disabled={(values.name.length > 0 && values.idcategory !== 0 && values.description.length > 0 && values.price > 0 && values.discount > -1) ? false : true}
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: 20 }}
                  onClick={
                    data !== undefined ? handleUpdateItem : handleSaveItem
                  }
                >
                  SAVE
                </Button>
              </FormRecord>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default ModalAddItem;
