import { createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

import logo from '../assets/logo.png';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Indie Flower',
            'cursive',
        ].join(','),
    },
});

const Home = () => {
    return (
        <ThemeProvider theme={theme} margin='0'>
            <Grid
                container
                margin={2}
                minHeight='100vh'
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                <Typography variant="h1"> PetrGuessr </Typography>
                <img src={logo} alt="petr" style={{ height: '50%' }} />
                <br />
                <Button
                    variant="contained"
                    style={{ fontSize: '70px', padding: '10px 20px', fontFamily: 'Indie Flower, cursive', borderRadius: '10px' }}
                >
                    <Link to='/game' style={{ color: 'yellow', textDecoration: 'None' }}>
                        Start
                    </Link>
                </Button>
            </Grid>
        </ThemeProvider >
    );
};

export default Home;
