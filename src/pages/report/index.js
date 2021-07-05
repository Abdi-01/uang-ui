import React, { useState, useEffect } from "react";
import SidebarComponent from "../../components/sidebar";
import { URL_API } from '../../helper'
import axios from 'axios'
import DateFnsUtils from '@date-io/date-fns';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { 
    MenuWrapper, 
    Container, 
    DateFilter, 
    ContentContainer,
    SearchBar,
    SearchResult,
    CardContainer,
    TextCard
} from "./reportPage";

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
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(1),
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

const categoryType = [
    {
        value: 0,
        label: 'All',
    },
    {
        value: 1,
        label: 'Coffee',
    },
    {
        value: 2,
        label: 'Juice',
    },
    {
        value: 3,
        label: 'Food',
    }
]

const sortType = [
    {
        value: 'Ascending',
        label: 'Ascending',
    },
    {
        value: 'Descending',
        label: 'Descending',
    }
]


const ReportPage = () => {
    const classes = useStyles();

    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const [selectedEndDate, handleEndDateChange] = useState(new Date());
    const [sort, setSort] = useState('ascending');
    const [state, setState] = useState({
        coffee: true,
        juice: false,
        food: false,
    });
    const [report, setReport] = useState(null)

    const getReport = async () => {
        try {
            let config = {
                method: 'get',
                url: URL_API + 'receipt/read',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            let response = await axios(config)
            setReport(response.data)
            console.log("report action", report)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getReport()
    }, [])

    const handleChangeType = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { coffee, juice, food } = state;

    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };

    const printCardReport = () => {
        console.log(report)
        if (report.length > 0) {
            return report.map((item) => {
                return  <StyledTableRow key={item.name}>
                            <StyledTableCell align="left">{item.name}</StyledTableCell>
                            <StyledTableCell align="center">{item.date}</StyledTableCell>
                            <StyledTableCell align="center">IDR {item.subtotal.toLocaleString()}</StyledTableCell>
                        </StyledTableRow>
            })
        }
    }

    return (
        <>
        <MenuWrapper>
            <SidebarComponent />
            <Container>
                <h1>Report Page</h1>
                <DateFilter>
                    <h3>Filter</h3>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-evenly">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                label="Pick start date"
                                value={selectedStartDate}
                                onChange={handleStartDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                label="Pick end date"
                                value={selectedEndDate}
                                onChange={handleEndDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </DateFilter>
                <ContentContainer>
                    <SearchBar>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Time</FormLabel>
                            <RadioGroup aria-label="sort" name="sort" value={sort} onChange={handleChangeSort}>
                                <FormControlLabel value="ascending" control={<Radio />} label="Ascending" />
                                <FormControlLabel value="descending" control={<Radio />} label="Descending" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Type</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={coffee} onChange={handleChangeType} name="coffee" />}
                                    label="Coffee"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={juice} onChange={handleChangeType} name="juice" />}
                                    label="Juice"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={food} onChange={handleChangeType} name="food" />}
                                    label="Food"
                                />
                            </FormGroup>
                        </FormControl>
                    </SearchBar>
                    <SearchResult>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="center">Date</StyledTableCell>
                                <StyledTableCell align="center">Price</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(report !== null) ? printCardReport() : null}
                        </TableBody>
                        </Table>
                    </TableContainer>
                        
                    </SearchResult>        
                </ContentContainer>
            </Container>
        </MenuWrapper>
        </>
    );
};

export default ReportPage;
