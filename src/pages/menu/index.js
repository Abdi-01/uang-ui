import React, { useState, useEffect } from "react";
import SidebarComponent from "../../components/sidebar";
import NavbarComponent from "../../components/navbar";
import ModalBill from "../../components/modalBill" 
import { useSelector } from "react-redux";
import { IoFastFood } from "react-icons/io5";
import { SiCoffeescript } from "react-icons/si";
import { GiFruitBowl, GiFoodChain, GiCash } from "react-icons/gi";
import { RiCoupon2Fill } from "react-icons/ri";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {
  Container,
  Title,
  Text,
  MainWrapper,
  MenuWrapper,
  Logo,
  Caption,
  CardWrapper,
  Image,
  Detail,
  ItemWrapper,
  BillContainer,
  Subtotal,
  Payment,
  LogoWrapper,
  ButtonBill,
  BillCard,
  ImageBill,
  ContentBill,
  EditBill,
} from "./menuPage";

const MenuPage = () => {
  const [items, setItems] = useState(null);
  const [bill, setBill] = useState([]);
  const [subtotal, setSubtotal] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const [payment, setPayment] = useState({
    cash: 'none',
    coupon: 'none'
  })
  const [paymentValue, setPaymentValue] = useState({
    cash: null,
    coupon: null
  })
  const { data } = useSelector(({ itemReducer }) => {
    return {
      data: itemReducer.item,
    };
  });

  const openModalBill = (item, total) => {
    setShowModal(prev => !prev)
    // console.log("data update to child component", dataUpdate)
}

  const handleClickItem = (filter) => {
    // console.log(filter)
    if (filter !== "All") {
      const dataFiltered = data.filter((data) => data.category === filter);
    //   console.log("Data filtered", dataFiltered);
      setItems(dataFiltered);
    } else {
      setItems(data);
    }
  };

  const handleClickCash = () => {
    if (payment.cash === 'none') {
      setPayment({...payment, cash: 'block'})
    }
    else {
      setPayment({...payment, cash: 'none'})
    }
  }

  const handleClickCoupon = () => {
    if (payment.coupon === 'none') {
      setPayment({...payment, coupon: 'block'})
    }
    else {
      setPayment({...payment, coupon: 'none'})
    }
  }

  const handleInitialData = () => {
    if (data !== []) {
      setItems(data);
    }
  };

  const addBill = (item) => {
    // console.log(item)
    let billData = {
        idItems: item.id,
        name: item.name,
        imageURL: item.imageURL,
        amount: 1,
        price: item.price,
        subtotal: item.price,
        note: null,
        paymentMethod: null
    }
    let newBill = bill.concat(billData);
    setBill(newBill);
    console.log("Bill state", bill);
    handleTotalPayment()
  };

  const handleChangeSubtotal = (id, event) => {
    let dataBills = bill
    // console.log("change subtotal", dataBills, id, event)
    dataBills.forEach(element => {
      if (element.idItems === id) {
        element.amount = parseInt(event.target.value)
        element.subtotal = element.price * element.amount
      }
    });
    setBill(dataBills)
    handleTotalPayment()
  };

  const handleTotalPayment = () => {
    let values = []
    console.log("Bill", bill.length)
    if (bill.length > 0) {
      bill.forEach(element => {
        values.push(element.subtotal)
      })
      let result = values.reduce((accumulator, currentValue) => accumulator + currentValue).toLocaleString()
      setSubtotal(result)
    }
  }

  const printCard = () => {
    if (items !== null) {
      return items.map((item, index) => {
        return (
          <Grid item xs={12} md={4} sm={6}>
            <CardWrapper>
              <ItemWrapper>
                <Image src={item.imageURL} />
                <Detail>
                  <Title>{item.name}</Title>
                  <Text>{item.description}</Text>
                  <Text style={{ fontStyle: "italic", fontWeight: 500 }}>
                    {" "}
                    IDR {item.price.toLocaleString()}
                  </Text>
                </Detail>
              </ItemWrapper>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => addBill(item)}
                disabled={(bill.findIndex((element) => element.idItems === item.id ) === -1) ? false : true}
              >
                Add to billing
              </Button>
            </CardWrapper>
          </Grid>
        );
      });
    }
  };

  const printBillCard = () => {
    // console.log(bill)
    if (bill !== []) {
      return bill.map((item, index) => {
        return <BillCard>
            <ImageBill src={item.imageURL}/>
            <ContentBill>
                <Title>{item.name}</Title>
                <EditBill>
                    <TextField 
                        type="number" 
                        label="Total" 
                        size="small" 
                        onChange={(event) => handleChangeSubtotal(item.idItems, event)}
                        style={{width: '50px'}}
                        defaultValue={1}
                    />
                    <Text 
                        style={{ fontStyle: "italic", fontWeight: 500 }}
                    >
                        {" "}
                        IDR {item.subtotal.toLocaleString()}
                    </Text>
                </EditBill>
                <TextField label="Note" size="small" variant="filled" fullWidth
                  onChange={(event) =>
                    setBill({ ...bill, note: event.target.value })
                  }/>
            </ContentBill>
        </BillCard>
      });
    }
  };

  useEffect(() => {
    handleInitialData();
  }, []);

  // console.log("Items after update", items)
  return (
    <>
      <Container>
        <SidebarComponent />
        <MainWrapper>
          <NavbarComponent />
          <MenuWrapper>
            <Logo onClick={() => handleClickItem("All")}>
              <IoFastFood />
              <Caption>All</Caption>
            </Logo>
            <Logo onClick={() => handleClickItem("Coffee")}>
              <SiCoffeescript />
              <Caption>Coffee</Caption>
            </Logo>
            <Logo onClick={() => handleClickItem("Juice")}>
              <GiFruitBowl />
              <Caption>Juice</Caption>
            </Logo>
            <Logo onClick={() => handleClickItem("Food")}>
              <GiFoodChain />
              <Caption>Food</Caption>
            </Logo>
          </MenuWrapper>
          <Grid container spacing={0} style={{overflow: 'scroll', height: '100%'}}>
            {printCard()}
          </Grid>
        </MainWrapper>
        <BillContainer show={true}>
            <h2>Bills</h2>
            {printBillCard()}
          {(bill.length > 0) ?
          <Subtotal>
            <p>Total</p>
            <p>IDR {subtotal}</p>
          </Subtotal> : <></>
          }
          <Payment>
            <h2>Payment Method</h2>
            <LogoWrapper>
              <Logo onClick={handleClickCash}>
                <GiCash />
                <Caption>Cash</Caption>
              </Logo>
              <Logo onClick={handleClickCoupon}>
                <RiCoupon2Fill />
                <Caption>Coupon</Caption>
              </Logo>
            </LogoWrapper>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField fullWidth
                  type="number" 
                  label="Input cash" 
                  size="small" 
                  variant="filled"
                  onChange={(event) =>
                    setPaymentValue({ ...paymentValue, cash: event.target.value })
                  }
                  style={{display: payment.cash}}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth
                  type="text" 
                  label="Input coupon code" 
                  size="small" 
                  variant="filled"
                  onChange={(event) =>
                    setPaymentValue({ ...paymentValue, coupon: event.target.value })
                  }
                  style={{display: payment.coupon}}
                />
              </Grid>
            </Grid>
          </Payment>
          <ButtonBill onClick={openModalBill}>
            <h3>Print Bill</h3>
          </ButtonBill>
        </BillContainer>
      </Container>
      <ModalBill showModal={showModal} setShowModal={setShowModal} data={bill} payment={paymentValue}/>
    </>
  );
};

export default MenuPage;
