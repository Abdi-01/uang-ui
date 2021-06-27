import React, { useState, useEffect } from "react";
import SidebarComponent from "../../components/sidebar";
import NavbarComponent from "../../components/navbar";
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
  Tax,
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
  const { data } = useSelector(({ itemReducer }) => {
    return {
      data: itemReducer.item,
    };
  });

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

  const handleInitialData = () => {
    if (data !== []) {
      setItems(data);
    }
  };

  const addBill = (item) => {
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
    // console.log(bill);
  };

  const handleChangeSubtotal = () => {

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
                        onChange={handleChangeSubtotal}
                        style={{width: '50px'}}
                    />
                    <Text 
                        style={{ fontStyle: "italic", fontWeight: 500 }}
                    >
                        {" "}
                        IDR {item.subtotal.toLocaleString()}
                    </Text>
                </EditBill>
                <TextField label="Note" size="small" variant="filled" fullWidth/>
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
          <Grid container spacing={0}>
            {printCard()}
          </Grid>
        </MainWrapper>
        <BillContainer>
            <h2>Bills</h2>
            {printBillCard()}
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
          <ButtonBill>
            <h3>Print Bill</h3>
          </ButtonBill>
        </BillContainer>
      </Container>
    </>
  );
};

export default MenuPage;
