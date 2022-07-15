
import Grid from '@mui/material/Grid';
import classes from './Header.module.scss'
import HeaderLeft from './HeaderLeft';
import MainHeader from './MainHeader';
import RightHeader from './RightHeader';

const Header = () => {
    return (
        <Grid container className={classes.wrapper}>
            <Grid item xs={4} md={4}>
                <HeaderLeft />
            </Grid>
            <Grid item xs='auto'>
                <MainHeader />
            </Grid>
            <Grid item xs>
                <RightHeader />
            </Grid>
        </Grid>
    )
}

export default Header