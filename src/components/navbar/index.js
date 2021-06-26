import React from 'react'
import { NavbarContainer, Header } from './navbarComp'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

const NavbarComponent = () => {
    const classes = useStyles();
    return (
        <>  
            <NavbarContainer>
                <Header>Choose Category</Header>
                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <TextField variant="filled" label="Search category or menu" />
                    </Grid>
                    <Grid item>
                        <SearchIcon />
                    </Grid>
                    </Grid>
                </div>
            </NavbarContainer>
            
        </>
    )
}

export default NavbarComponent
