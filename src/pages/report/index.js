import React, { useState } from "react";
import SidebarComponent from "../../components/sidebar";
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { 
    MenuWrapper, 
    Container, 
    DateFilter, 
    ContentContainer,
    SearchBar,
    SearchResult
} from "./reportPage";

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

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(1),
    },
}));

const ReportPage = () => {
    const classes = useStyles();

    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const [selectedEndDate, handleEndDateChange] = useState(new Date());
    const [value, setValue] = useState('ascending');
    const [state, setState] = useState({
        coffee: true,
        juice: false,
        food: false,
    });

    const handleChangeType = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { coffee, juice, food } = state;

    const handleChangeSort = (event) => {
        setValue(event.target.value);
    };


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
                            <RadioGroup aria-label="sort" name="sort" value={value} onChange={handleChangeSort}>
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
                            
                    </SearchResult>        
                </ContentContainer>
            </Container>
        </MenuWrapper>
        </>
    );
};

export default ReportPage;
