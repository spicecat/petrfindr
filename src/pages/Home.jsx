import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

import logo from '../assets/logo.png';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Indie Flower',
            'Arial',
            'cursive',
        ].join(','),
    },
});

const Home = () => {
    return (
        <ThemeProvider theme={theme}>

            <Typography variant="h1"> PetrGuessr </Typography>
            <div> description </div>
            <div>
                <img src={logo} alt="petr" />
            </div>
            <Button variant="contained" style={{ fontSize: '150px', padding: '10px 20px', fontFamily: 'Chilanka, cursive' }}>
                <Link to='/game'>
                    Start
                </Link>
            </Button>
        </ThemeProvider>
    );
};

export default Home;
