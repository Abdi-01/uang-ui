import React, { useState } from 'react';
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { useSelector } from 'react-redux';
import { URL_API } from '../../helper'
import { Image } from './tableComponent';
import { getItemAction } from '../../actions'
import { useDispatch } from 'react-redux';
import ModalAddItem from '../modalAddItem';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  paper: {
    position: 'fixed',
    width: '400px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const ItemTableComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState({
    id: null,
    name: null
  })
  const [showModal, setShowModal] = useState(false)
  const [dataUpdate, setDataUpdate] = useState(null)

  const openModalUpdate = (item) => {
      setShowModal(prev => !prev)
      setDataUpdate(item)
  }
  
  const { data } = useSelector(({ itemReducer }) => {
    return {
      data: itemReducer.item
    }
  })

  const handleOpenDelete = (idMenu, nameMenu) => {
    setOpen(true);
    // console.log("id delete", idMenu)
    setValues({...values, id:idMenu, name:nameMenu})
  };

  const handleCloseDelete = () => {
    setOpen(false);
  };

  const printItems = () => {
    // console.log("Print data", data)
    if (data.length > 0) {
      return data.map((item, index) => {
        return <StyledTableRow key={item.name}>
                  <StyledTableCell component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Image src={item.imageURL}></Image>
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.title}</StyledTableCell>
                  <StyledTableCell align="left">{item.description}</StyledTableCell>
                  <StyledTableCell align="right">{item.price}</StyledTableCell>
                  <StyledTableCell align="right">{item.discount}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button variant="contained" color="primary" onClick={() => openModalUpdate(item)}>
                      Update
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleOpenDelete(item.id, item.name)}>
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
      })
    }
  }

  const deleteItem = async () => {
    try {
      console.log(values.id)
      let config = {
        method: 'delete',
        url: URL_API + `item/delete/${values.id}`,
        headers: {
            'Content-Type': 'application/json',
        }
      }
      await axios(config)
      dispatch(getItemAction())
      handleCloseDelete()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Image</StyledTableCell>
              <StyledTableCell align="left">Category</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="right">Price&nbsp;(IDR)</StyledTableCell>
              <StyledTableCell align="right">Discount&nbsp;(%)</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {printItems()}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleCloseDelete}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <div className={classes.paper}>
        <h2>Are you sure delete {values.name}?</h2>
        <p>This action will delete the item and can't restore!</p>
        <Button variant="contained" color="secondary" fullWidth onClick={deleteItem}>
          Delete Forever
        </Button>
      </div>
      </Modal>
      <ModalAddItem showModal={showModal} setShowModal={setShowModal} data={dataUpdate}/>
    </>
  );
}

export default ItemTableComponent